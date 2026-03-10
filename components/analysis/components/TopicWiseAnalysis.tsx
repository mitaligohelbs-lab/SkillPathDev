"use client";

const TopicWiseAnalysis = ({ data }: any) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {data.map(
        ({ key, totalAttempts, bestScore, totalAvg, totalScore }: any) => (
          <div
            key={key}
            className="p-4 rounded-xl border border-[#272c34] bg-[#15181e] space-y-3"
          >
            <div className="flex items-center justify-between">
              <h3 className=" font-semibold text-[#e7ebef] flex items-center gap-2">
                {key}
              </h3>
              <span className="text-xs  text-[#707d8f]">
                {totalAttempts} attempts
              </span>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div>
                <p className="text-lg font-bold  text-[#e7ebef]">{totalAvg}</p>
                <p className="text-[10px] text-[#707d8f]  uppercase">
                  Avg Score
                </p>
              </div>
              <div>
                <p className="text-lg font-bold  text-[#e7ebef]">{bestScore}</p>
                <p className="text-[10px] text-[#707d8f]  uppercase">
                  Best Score
                </p>
              </div>
              <div>
                <p className="text-lg font-bold text-[#e7ebef]">{totalScore}</p>
                <p className="text-[10px] text-[#707d8f]  uppercase">
                  Total Score
                </p>
              </div>
            </div>
            <div className="w-full h-2 bg-[#272c34] rounded">
              <div
                className="h-2 bg-green-400 rounded"
                style={{ width: `${(bestScore / 10) * 100}%` }}
              />
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default TopicWiseAnalysis;
