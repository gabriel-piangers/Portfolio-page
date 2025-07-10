import "./App.css";
import { Hero } from "./components/Hero";
import { CodeStack } from "./components/CodeStack";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export function App() {
  return (
    <>
      <Hero />
      <CodeStack />
      <Projects/>
      <Footer/>
    </>
  );
}
