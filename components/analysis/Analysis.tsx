"use client";

import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { supabase } from "@/lib/supabase";
import { useEffect, useMemo, useState } from "react";
import { FolderX, Target, TrendingUp } from "lucide-react";
import OverallAnalysis from "./components/OverallAnalysis";
import Graph from "./components/Graph";
import TopicWiseAnalysis from "./components/TopicWiseAnalysis";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";
import { TopicStats } from "../types/analysis";
import { useRouter } from "next/navigation";

const Analysis = () => {
  const { userId } = useCurrentUser();
  const router = useRouter();
  const [allAnalysisData, setAllAnalysisData] = useState<any>(null);
  const [selectedTech, setSelectedTech] = useState("");

  const avgScore = allAnalysisData?.length
    ? +(
        allAnalysisData?.reduce((acc: any, curr: any) => acc + +curr.score, 0) /
        allAnalysisData?.length
      ).toFixed(2)
    : 0;

  const groupData = useMemo(() => {
    if (!allAnalysisData) return {};

    return allAnalysisData.reduce((acc: any, curr: any) => {
      const { technology, topic, score, level } = curr;

      acc[technology] ??= {};
      acc[technology][topic] ??= {};
      acc[technology][topic][level] ??= {
        attempts: 0,
        totalScore: 0,
        avgScore: 0,
        bestScore: 0,
      };

      const levelData = acc[technology][topic][level];
      levelData.attempts += 1;
      levelData.totalScore += score;
      levelData.bestScore = Math.max(levelData.bestScore, score);
      levelData.avgScore = +(levelData.totalScore / levelData.attempts).toFixed(
        2,
      );

      return acc;
    }, {});
  }, [allAnalysisData]);

  const fetchAllData = async () => {
    try {
      const { data, error } = await supabase
        .from("user_attempts")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", selectedTech);

      setAllAnalysisData(data ?? []);

      console.log(data, error);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (selectedTech) {
      fetchAllData();
    }
  }, [selectedTech]);

  const ALL_ANALYSIS_DATA = [
    {
      text: "Total Attemp",
      value: allAnalysisData?.length,
      icon: <Target />,
    },
    {
      text: "Avg Score",
      value: avgScore,
      icon: <TrendingUp />,
    },
  ];

  const groupBasedOnTechnology =
    groupData &&
    Object.entries(Object.values(groupData)[0] ?? [])?.map(([key, value]) => {
      const stats = Object.values(value) as TopicStats[];

      const aggregated = stats.reduce(
        (acc, { attempts, totalScore, avgScore, bestScore }) => {
          acc.totalAttempts += attempts;
          acc.totalScore += totalScore;
          acc.totalAvg += avgScore;

          if (bestScore > acc.bestScore) {
            acc.bestScore = bestScore;
          }

          return acc;
        },
        {
          totalAttempts: 0,
          bestScore: 0,
          totalAvg: 0,
          totalScore: 0,
        },
      );

      aggregated.totalAvg = aggregated.totalScore / aggregated.totalAttempts;

      return {
        [key]: aggregated,
      };
    });

  const topics = groupBasedOnTechnology?.map((technology: any) => {
    const [key, value] = Object.entries(technology)[0] as [
      string,
      {
        totalAttempts: number;
        bestScore: number;
        totalAvg: number;
        totalScore: number;
      },
    ];
    const finalKeyName = JS_TOPICS?.find(({ id }) => id === key)?.name;

    return {
      key: finalKeyName,
      ...value,
    };
  });

  return (
    <div className="flex flex-col justify-center mx-auto max-w-2xl pt-30 px-10">
      <FormControl
        size="small"
        className="pt-10"
        sx={{
          backgroundColor: "#1c2128",
          borderRadius: "8px",
          width: "50%",
          "& .MuiOutlinedInput-root": {
            color: "white",

            "& fieldset": {
              borderColor: "#272c34",
              borderRadius: "8px",
            },

            "&:hover fieldset": {
              borderColor: "#31C47F",
            },

            "&.Mui-focused fieldset": {
              borderColor: "#31C47F",
            },
          },

          "& .MuiSvgIcon-root": {
            color: "#9aa4b2",
          },
        }}
      >
        <InputLabel
          id="technology-label"
          sx={{
            color: "#9aa4b2",
            "&.Mui-focused": {
              color: "#31C47F",
            },
          }}
        >
          Technology
        </InputLabel>

        <Select
          labelId="technology-label"
          id="technology"
          value={selectedTech}
          label="Technology"
          onChange={(e) => setSelectedTech(e.target.value)}
          MenuProps={{
            PaperProps: {
              sx: {
                bgcolor: "#1c2128",
                color: "#9aa4b2",
                border: "1px solid #272c34",
                mt: 1,
              },
            },
          }}
        >
          {TECHNOLOGIES.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {selectedTech ? (
        allAnalysisData?.length || topics?.length ? (
          <div className="space-y-3 py-12">
            <OverallAnalysis data={ALL_ANALYSIS_DATA} />
            <Graph topicData={topics} scoreData={allAnalysisData} />
            <TopicWiseAnalysis data={topics || {}} />
          </div>
        ) : (
          <div className="text-center py-12 space-y-2">
            <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
            <p className="text-[#9aa4b2] font-mono">
              No data found. Ready to start the quiz?
            </p>
            <button
              className="px-6 py-3  bg-[#31c47f] rounded-xl text-[#272c34] font-bold"
              onClick={() => router.push("/select-tech")}
            >
              Start Quiz
            </button>
          </div>
        )
      ) : (
        <div className="text-center py-12 space-y-2">
          <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
          <p className="text-[#9aa4b2] font-mono">Select technology</p>
        </div>
      )}
    </div>
  );
};

export default Analysis;
