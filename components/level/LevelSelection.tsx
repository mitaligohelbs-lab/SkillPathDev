import Header from "./components/Header";
import Layout from "../common/Layout";
import LevelList from "./components/LevelList";

const LevelSelection = () => (
  <Layout isCard className="pt-20 px-4">
    <Header />
    <LevelList />
  </Layout>
);
export default LevelSelection;
