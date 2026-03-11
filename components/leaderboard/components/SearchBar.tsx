"use client";

import { useEffect } from "react";

import { supabase } from "@/lib/supabase";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";

import { JS_TOPICS, LEVELS, TECHNOLOGIES } from "@/constant";

const SearchBar = ({
  setLeaderBoardData,
  select,
  setSelect,
  setSelectedLevel,
  selectedLevel,
}: any) => {
  const handleChange = (value: string, key: string) => {
    setSelect((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  const displatTechnology = TECHNOLOGIES.find(
    ({ id }) => id === select?.technology,
  )?.name;

  const displayTopic = JS_TOPICS.find(({ id }) => id === select?.topic)?.name;

  const handleFetchdata = async () => {
    try {
      const { data } = await supabase
        .from("user_scores")
        .select("*")
        .eq("technology", displatTechnology)
        .eq("topic", displayTopic)
        .eq("level", selectedLevel)
        .order("score", { ascending: false })
        .limit(10);

      setLeaderBoardData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (displatTechnology && displayTopic && selectedLevel) {
      handleFetchdata();
    }
  }, [displatTechnology, displayTopic, selectedLevel]);

  return (
    <Stack className="w-full max-w-2xl">
      <div className="flex gap-3">
        <FormControl
          size="small"
          fullWidth
          sx={{
            backgroundColor: "#1c2128",
            borderRadius: "8px",

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
            value={select.technology}
            label="Technology"
            onChange={(e) => handleChange(e.target.value, "technology")}
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
              <MenuItem value={id}>{name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {displatTechnology === "JavaScript" && (
          <FormControl
            size="small"
            fullWidth
            sx={{
              backgroundColor: "#1c2128",
              borderRadius: "8px",

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
              Topic
            </InputLabel>

            <Select
              labelId="topic-label"
              id="topic"
              value={select.topic}
              label="topic"
              onChange={(e) => handleChange(e.target.value, "topic")}
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
              {JS_TOPICS.map(({ id, name }) => (
                <MenuItem value={id}>{name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
        <div className="flex gap-2">
          {LEVELS.map((l) => (
            <button
              key={l.level}
              onClick={() => setSelectedLevel(l.level)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold ${
                selectedLevel === l.level
                  ? "text-[#0c0e12] bg-[#31c47f]"
                  : "bg-[#15181e] border border-[#272c34] text-[#e7ebef]"
              }`}
            >
              L{l.level}
            </button>
          ))}
        </div>
      </div>
    </Stack>
  );
};

export default SearchBar;
