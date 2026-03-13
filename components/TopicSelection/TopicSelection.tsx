import Header from "./components/Header";
import Layout from "../common/Layout";
import TopicList from "./components/TopicList";

const TopicSelection = () => (
  <Layout className="px-5 md:px-0 pt-20 pb-10 md:pb-0 md:pt-0">
    <Header />
    <TopicList />
  </Layout>
);

export default TopicSelection;
