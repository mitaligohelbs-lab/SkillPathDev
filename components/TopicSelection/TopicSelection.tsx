import Header from "./components/Header";
import Layout from "../common/Layout";
import TopicList from "./components/TopicList";

const TopicSelection = () => (
  <Layout className="px-5 md:px-0 pt-20 pb-10 md:pb-20 md:pt-20  overflow-auto">
    <Header />
    <TopicList />
  </Layout>
);

export default TopicSelection;
