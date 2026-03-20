"use client";

import { JS_TOPICS, TECHNOLOGIES } from "@/constant";
import { useCurrentUser } from "@/lib/hooks/useCurrentUser";
import { supabase } from "@/lib/supabase";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { Download } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function Certificate() {
  const param = useSearchParams();
  const technology = param.get("technology");
  const topic = param.get("topic");
  const certRef = useRef<HTMLDivElement>(null);
  const [levelWiseData, setLevelWiseData] = useState<any>([]);
  const [downloading, setDownloading] = useState<boolean>(false);

  const { fullName, userId } = useCurrentUser();

  const currTechnologyName =
    TECHNOLOGIES.find(({ id }) => id === technology)?.name || technology;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name || topic;

  const fetchDetails = async () => {
    try {
      const { data } = await supabase
        .from("user_scores")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", currTechnologyName)
        .eq("topic", currTopicName);

      const formattedData = data?.map(({ level, score }) => ({
        level,
        score: +score,
      }));

      if (formattedData) {
        setLevelWiseData(formattedData);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (userId && currTechnologyName && currTopicName) {
      fetchDetails();
    }
  }, [userId, currTechnologyName, technology, currTopicName, topic]);

  const totalScored = levelWiseData.reduce(
    (acc: number, { score }: any) => acc + score,
    0,
  );

  const dateStr = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleDownload = async () => {
    if (!certRef.current) return;
    setDownloading(true);
    try {
      const canvas = await html2canvas(certRef.current, {
        scale: 2,
        backgroundColor: null,
        useCORS: true,
      });
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "landscape",
        unit: "mm",
        format: "a4",
      });
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save(`SkillPathDev-Certificate-${topic}.pdf`);
    } catch (err) {
      console.error("Failed to generate PDF:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen gradient-hero mt-20">
      <div className="max-w-4xl mx-auto px-6 py-10 space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold">Your Certificate is Ready!</h1>
          <p className="text-[#707d8f]">Download and share your achievement</p>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "1000px",
            margin: "0 auto",
          }}
        >
          <div
            ref={certRef}
            style={{
              aspectRatio: "297 / 210",
              overflow: "hidden",
              borderRadius: "16px",
              border: "1px solid rgba(49,196,127,0.3)",
            }}
          >
            <div
              ref={certRef}
              style={{
                position: "relative",
                width: "100%",
                aspectRatio: "297 / 210",
                background: "#0d1117",
                padding: "clamp(12px, 3vw, 40px)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: "clamp(8px, 1.5vw, 16px)",
                  borderRadius: "10px",
                  border: "2px solid rgba(49,196,127,0.4)",
                  boxShadow: "inset 0 0 30px rgba(49,196,127,0.05)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "clamp(12px, 2vw, 20px)",
                  borderRadius: "10px",
                  border: "1px solid rgba(49,196,127,0.15)",
                }}
              />

              <div
                style={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  textAlign: "center",
                  padding: "clamp(10px, 2vw, 24px) clamp(12px, 4vw, 40px)",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "clamp(8px, 1vw, 11px)",
                      color: "#31c47f",
                      letterSpacing: "clamp(2px, 0.5vw, 4px)",
                      textTransform: "uppercase",
                    }}
                  >
                    SkillPathDev
                  </p>
                  <h2
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(16px, 3vw, 28px)",
                      fontWeight: 700,
                      color: "#e8edf3",
                    }}
                  >
                    Certificate of Completion
                  </h2>
                </div>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "clamp(6px, 1.5vw, 16px)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "clamp(10px, 1.5vw, 13px)",
                      color: "#8b95a5",
                    }}
                  >
                    This is to certify that
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(16px, 3vw, 26px)",
                      fontWeight: 700,
                      color: "#31c47f",
                      borderBottom: "2px solid rgba(49,196,127,0.3)",
                      display: "inline-block",
                      paddingBottom: "clamp(4px, 1vw, 8px)",
                    }}
                  >
                    {fullName}
                  </p>
                  <p
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: "clamp(10px, 1.5vw, 13px)",
                      color: "#8b95a5",
                    }}
                  >
                    has successfully completed all three levels of
                  </p>
                  <span
                    style={{
                      fontSize: "clamp(14px, 2.5vw, 22px)",
                      fontWeight: 700,
                      color: "#e8edf3",
                    }}
                  >
                    {topic}
                  </span>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "clamp(10px, 1.5vw, 14px)",
                      color: "rgba(49,196,127,0.8)",
                    }}
                  >
                    Score: {totalScored}/30 (
                    {Math.round((totalScored / 30) * 100)}%)
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-end",
                    fontSize: "clamp(8px, 1.2vw, 11px)",
                  }}
                >
                  <div style={{ textAlign: "left" }}>
                    <p style={{ color: "#8b95a5" }}>{dateStr}</p>
                    <p
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        color: "#5a6370",
                        fontSize: "clamp(7px, 1vw, 10px)",
                      }}
                    >
                      Date of Completion
                    </p>
                  </div>
                  <div
                    style={{
                      textAlign: "center",
                      color: "#5a6370",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    skillpathdev.com
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        color: "#31c47f",
                        fontWeight: 600,
                        fontFamily: "JetBrains Mono, monospace",
                      }}
                    >
                      🏅 Verified
                    </p>
                    <p
                      style={{
                        fontFamily: "JetBrains Mono, monospace",
                        fontSize: "clamp(7px, 1vw, 10px)",
                        color: "#5a6370",
                      }}
                    >
                      SkillPathDev
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-5">
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 px-8 py-4 rounded-xl gradient-[#31c47f] text-[#31c47f]-foreground  font-semibold text-lg disabled:opacity-50 transition-opacity"
            style={{ boxShadow: "0 0 25px hsl(152 60% 48% / 0.1)" }}
          >
            <Download className="w-5 h-5" />
            {downloading ? "Generating PDF..." : "Download Certificate"}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {levelWiseData.map(({ level, score }: any) => {
            const names = ["Basics", "Intermediate", "Advanced"];
            return (
              <div
                key={level}
                className="p-4 rounded-xl border border-[#31c47f]/20 bg-[#31c47f]/5 text-center space-y-1"
              >
                <p className="text-xs text-muted-foreground">
                  Level {level} – {names[level - 1]}
                </p>
                <p className="text-xl font-bold  text-[#31c47f]">{score}/10</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
