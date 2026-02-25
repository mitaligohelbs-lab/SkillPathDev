import Feature from "./components/Feature";
import Header from "./components/Header";
import StartPracticingButton from "./components/StartPracticingButton";
import Layout from "../common/Layout";

const Landing = () => (
  <Layout isCard={false}>
    <Header />
    <StartPracticingButton />
    <Feature />
  </Layout>
);

export default Landing;
