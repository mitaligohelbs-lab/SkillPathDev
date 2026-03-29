"use client";

import { useEffect, useMemo, useState } from "react";

import { FolderX } from "lucide-react";
import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material";

import { supabase } from "@/lib/supabase";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";

import BookmarkCard from "./components/BookmarkCard";

import { JS_TOPICS, LEVELS, TECHNOLOGIES } from "@/constant";
import { bookmarkProps } from "../types/mcqTypes";

const BookMark = () => {
  const { userId } = useCurrentUser();
  const [allBookmarkedData, setIsAllBookmarkedData] = useState<bookmarkProps[]>(
    [],
  );
  const [selectedLevel, setSelectedLevel] = useState<number | null>(1);
  const [select, setSelect] = useState({
    technology: "",
    topic: "",
  });

  const formattedTechnology = useMemo(
    () => TECHNOLOGIES.find(({ id }) => id === select?.technology)?.name,
    [select],
  );

  const formattedTopic = useMemo(
    () => JS_TOPICS.find(({ id }) => id === select?.topic)?.name,
    [select],
  );

  const fetchAllBookmarkedQuestionId = async () => {
    try {
      const { data } = await supabase
        .from("bookmarked_questions")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", formattedTechnology)
        .eq("topic", formattedTopic)
        .eq("level", `Level ${selectedLevel}`);

      setIsAllBookmarkedData(data ?? []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = async (question: number) => {
    await supabase
      .from("bookmarked_questions")
      .delete()
      .eq("user_id", userId)
      .eq("question_id", question);

    fetchAllBookmarkedQuestionId();
  };

  useEffect(() => {
    if (select?.technology || select?.topic || selectedLevel) {
      fetchAllBookmarkedQuestionId();
    }
  }, [select, selectedLevel, userId]);

  const handleChange = (value: string, key: string) => {
    setSelect((prev: any) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <div className="overflow-auto pb-20">
      <div className="pt-30 px-6 md:px-0">
        <Grid className="w-full flex flex-col md:flex-row max-w-2xl pb-10 mx-auto gap-3">
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
                <MenuItem key={id} value={id}>
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          {select?.technology?.toLowerCase() === "javascript" && (
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
                id="topic-label"
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
                label="Topic"
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
                  <MenuItem key={id} value={id}>
                    {name}
                  </MenuItem>
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
        </Grid>
      </div>
      {select?.technology ? (
        <>
          {allBookmarkedData?.length ? (
            <Grid className="grid px-6 grid-cols-1 mx-auto md:grid-cols-3 gap-3">
              {allBookmarkedData.map(
                ({ question_id, level, technology, topic }) => (
                  <BookmarkCard
                    key={question_id}
                    questionId={question_id}
                    handleBookmarkClick={handleClick}
                    level={level}
                    technology={technology}
                    topic={topic}
                  />
                ),
              )}
            </Grid>
          ) : (
            <div className="text-center py-12 space-y-2  px-6 md:px-0 ">
              <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
              <p className="text-[#9aa4b2] text-center">
                No questions bookmarked yet. Bookmark a question to view it
                here.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center px-6 md:px-0 py-12 pt-30 space-y-2">
          <FolderX className="w-12 h-12 text-[#272c34] mx-auto" />
          <p className="text-[#9aa4b2] font-mono">Select technology</p>
        </div>
      )}
    </div>
  );
};

export default BookMark;
