import Link from "next/link";
import { LeaderBoardDescriptionTypes } from "@/components/types/types";
import { JS_TOPICS, TECHNOLOGIES } from "@/constant";

const LeaderboardDescription = ({
  technology,
  topic,
  level,
}: LeaderBoardDescriptionTypes) => {
  const displayTechnology = TECHNOLOGIES.find(
    ({ id }) => id === technology,
  )?.name;
  const displayTopic = JS_TOPICS.find(({ id }) => id === topic)?.name;

  return (
    <div className="pt-4 space-y-8">
      <section className="space-y-2">
        <h2 className="text-xl fonr-bold">
          {displayTechnology} {displayTopic} MCQ Leaderboard – Level {level}
        </h2>
        <p className="text-sm">
          View the leaderboard for {displayTechnology} {displayTopic} MCQ
          questions at Level {level}. Compare scores, track rankings, and see
          how you perform against other learners in frontend interview
          preparation.
        </p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl fonr-bold">How Ranking works?</h2>
        <p className="text-sm">
          Rankings are based on the number of correct answers and overall
          accuracy. Higher scores and better performance improve your position
          on the leaderboard.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-bold">Practice More</h2>
        <p className="text-blue-500">
          {level === 1 ? (
            <ul className="list-disc">
              <li>
                <Link href={`mcq/${technology}/${topic}/level-2`}>
                  Continue with Level 2 {displayTechnology} {displayTopic}
                  MCQs{" "}
                </Link>
              </li>
              <li>
                <Link href={`mcq/${technology}/${topic}/level-3`}>
                  Try Advanced Level 3 Questions{" "}
                </Link>
              </li>
              <li>
                {" "}
                <Link href={`${technology}-mcq`}>
                  Explore other {displayTechnology} interview topics
                </Link>{" "}
              </li>
            </ul>
          ) : level === 2 ? (
            <ul className="list-disc">
              <li>
                <Link href={`mcq/${technology}/${topic}/level-3`}>
                  Try Advanced Level 3 Questions{" "}
                </Link>
              </li>
              <li>
                <Link href={`${technology}-mcq`}>
                  Explore other {displayTechnology} interview topics
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="list-disc">
              <li>
                <Link href={`${technology}-mcq`}>Explore More topics</Link>
              </li>
            </ul>
          )}
        </p>
      </section>
    </div>
  );
};

export default LeaderboardDescription;
