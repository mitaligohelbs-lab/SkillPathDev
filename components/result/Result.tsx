import Layout from "../common/Layout";
import ActionButton from "./components/ActionButton";
import LeaderBoard from "./components/LeaderBoard";
import ResultHeader from "./components/ResultHeader";

const Result = () => {
  return (
    <Layout>
      <div className="w-full space-y-3">
        <ResultHeader />
        <LeaderBoard />
        <ActionButton />
      </div>
    </Layout>
  );
};

export default Result;
