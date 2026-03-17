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

  const currTechnologyName = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;

  const currTopicName = JS_TOPICS.find(({ id }) => id === topic)?.name;

  const fetchDetails = async () => {
    try {
      const { data } = await supabase
        .from("user_scores")
        .select("*")
        .eq("user_id", userId)
        .eq("technology", currTechnologyName || technology)
        .eq("topic", currTopicName || topic);

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
    if (
      userId &&
      (currTechnologyName || technology) &&
      (currTopicName || topic)
    ) {
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

        <div className="overflow-hidden rounded-2xl border border-[#31c47f]/30">
          <div
            ref={certRef}
            className="relative w-full"
            style={{
              aspectRatio: "297 / 210",
              background:
                "linear-gradient(135deg, #0d1117 0%, #101820 30%, #0d1117 60%, #131a24 100%)",
              padding: "40px",
            }}
          >
            <div
              className="absolute inset-4 rounded-lg"
              style={{
                border: "2px solid hsl(152 60% 48% / 0.4)",
                boxShadow: "inset 0 0 30px hsl(152 60% 48% / 0.05)",
              }}
            />
            <div
              className="absolute inset-5 rounded-lg"
              style={{ border: "1px solid hsl(152 60% 48% / 0.15)" }}
            />

            <div
              className="relative h-full flex flex-col items-center justify-between text-center"
              style={{ padding: "24px 40px" }}
            >
              <div className="space-y-1">
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "11px",
                    color: "hsl(152 60% 48%)",
                    letterSpacing: "4px",
                    textTransform: "uppercase",
                  }}
                >
                  SkillPathDev
                </p>
                <h2
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#e8edf3",
                  }}
                >
                  Certificate of Completion
                </h2>
              </div>

              <div className="space-y-4 w-full">
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#8b95a5",
                  }}
                >
                  This is to certify that
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "26px",
                    fontWeight: 700,
                    color: "hsl(152 60% 48%)",
                    borderBottom: "2px solid hsl(152 60% 48% / 0.3)",
                    paddingBottom: "8px",
                    display: "inline-block",
                  }}
                >
                  {fullName}
                </p>
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "13px",
                    color: "#8b95a5",
                  }}
                >
                  has successfully completed all three levels of
                </p>
                <div className="flex items-center justify-center gap-3">
                  <span
                    style={{
                      fontSize: "22px",
                      fontWeight: 700,
                      color: "#e8edf3",
                    }}
                  >
                    {topic}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "14px",
                    color: "hsl(152 60% 48% / 0.8)",
                  }}
                >
                  Score: {totalScored}/{30} (
                  {Math.round((totalScored / 30) * 100)}% accuracy)
                </p>
              </div>

              <div className="flex items-end justify-between w-full">
                <div style={{ textAlign: "left" }}>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      color: "#8b95a5",
                    }}
                  >
                    {dateStr}
                  </p>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
                      color: "#5a6370",
                    }}
                  >
                    Date of Completion
                  </p>
                </div>
                <div style={{ textAlign: "center" }}>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
                      color: "#5a6370",
                    }}
                  >
                    skillpathdev.com
                  </p>
                </div>
                <div style={{ textAlign: "right" }}>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      color: "hsl(152 60% 48%)",
                      fontWeight: 600,
                    }}
                  >
                    🏅 Verified
                  </p>
                  <p
                    style={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "10px",
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

        <div className="flex justify-center">
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

        <div className="grid grid-cols-3 gap-4">
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
