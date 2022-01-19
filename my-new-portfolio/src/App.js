import "./App.css";
import { Layout } from "./components";
import { Route } from "react-router";
import HelloWorld from "./screens/HelloWorld/HelloWorld";
import About from "./screens/About/About";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";

function App() {
  return (
    <>
      <div className="AppDiv">
        <Layout>
          <Route path="/">
            <HelloWorld />
          </Route>
          <Route>
            <About />
          </Route>
          <Route>
            <Projects />
          </Route>
          <Route>
            <Contact />
          </Route>
        </Layout>
      </div>
    </>
  );
}

export default App;
