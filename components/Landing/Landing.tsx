import Feature from "./components/Feature";
import Header from "./components/Header";
import Layout from "../common/Layout";
import StartPracticingButton from "./components/StartPracticingButton";

const Landing = () => (
  <Layout isCard={false} className="p-5 max-w-5xl mx-auto">
    <Header />
    <StartPracticingButton />
    <Feature />
  </Layout>
);

export default Landing;
