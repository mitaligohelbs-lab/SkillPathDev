import Feature from "./components/Feature";
import Header from "./components/Header";
import Layout from "../common/Layout";
import StartPracticingButton from "./components/StartPracticingButton";

const Landing = () => (
  <Layout isCard={false}>
    <Header />
    <StartPracticingButton />
    <Feature />
  </Layout>
);

export default Landing;
