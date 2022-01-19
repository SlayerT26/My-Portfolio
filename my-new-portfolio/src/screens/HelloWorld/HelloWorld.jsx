import "./HelloWorld.css";
import { Link } from "react-scroll";
import { Typewriter } from "typewriting-react";

function HelloWorld() {
  return (
    <>
      <div className="HelloWorldPage">
        <div></div>
        <div className="HelloWorldMainDiv">
          <div className="HelloWorldDiv1">
            <div className="PythonDiv">
              <div className="Python">
                {/* <TypewriterEffect text='print("Hello World")' typeSpeed={100} /> */}
                <Typewriter
                  className="TypeWriter"
                  typingSpeed="100"
                  words={[
                    'print("Hello World")',
                    'console.log("Hello World")',
                    'cout << "Hello World" << endl',
                    "put Hello World",
                  ]}
                  erasingSpeed="100"
                  nextWordDelay="1000"
                />
                {/* <h1 className="Python">
                  <span className="PythonSpan1">print</span>(
                  <span className="PythonSpan2">"Hello World"</span>)
                </h1> */}
              </div>
            </div>
            <div className="JavaScriptDiv">
              <div className="JavaScript">
                <Typewriter
                  className="TypeWriter"
                  typingSpeed="100"
                  words={[
                    'print("Hello World")',
                    'console.log("Hello World")',
                    'cout << "Hello World" << endl',
                    "put Hello World",
                  ]}
                  erasingSpeed="100"
                  nextWordDelay="1000"
                />
                {/* <h1 className="JavaScript">
                  <span className="JavaScriptSpan1">console</span>.
                  <span className="JavaScriptSpan2">log</span>(
                  <span className="JavaScriptSpan3">"Hello World"</span>)
                </h1> */}
              </div>
            </div>
          </div>

          <div id="HelloWorldID" to="/#about">
            <h1 className="HelloWorldH1">Hello World</h1>
          </div>

          <div className="HelloWorldDiv2">
            <div className="CDiv">
              <div className="C">
                <Typewriter
                  className="TypeWriter"
                  typingSpeed="100"
                  words={[
                    'print("Hello World")',
                    'console.log("Hello World")',
                    'cout << "Hello World" << endl',
                    "put Hello World",
                  ]}
                  erasingSpeed="100"
                  nextWordDelay="1000"
                />
                {/* <h1 className="C">
                  cout &lt;&lt; "Hello World" &lt;&lt; endl;
                </h1> */}
              </div>
            </div>
            <div className="RubyDiv">
              <div className="Ruby">
                <Typewriter
                  className="TypeWriter"
                  typingSpeed="100"
                  words={[
                    'print("Hello World")',
                    'console.log("Hello World")',
                    'cout << "Hello World" << endl',
                    "put Hello World",
                  ]}
                  erasingSpeed="100"
                  nextWordDelay="1000"
                />
                {/* <h1 className="Ruby">
                  <span className="RubySpan1">put </span>
                  <span className="RubySpan2"> Hello World</span>
                </h1> */}
              </div>
            </div>
          </div>

          <div></div>
        </div>
        <div className="ScrollDiv">
          <Link to="about" id="ScrollDivH3" smooth={true} duration={1000}>
            Scroll Down
          </Link>
        </div>
      </div>
    </>
  );
}

export default HelloWorld;
