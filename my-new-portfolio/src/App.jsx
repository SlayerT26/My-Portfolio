import "./App.css";
import { Layout } from "./components";

import HelloWorld from "./screens/HelloWorld/HelloWorld";
import About from "./screens/About/About";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";

function App() {
  return (
    <>
      <div className="AppDiv">
        <Layout>
          <HelloWorld />
          <About />
          <Projects />
          <Contact />
        </Layout>
      </div>
    </>
  );
}

export default App;
