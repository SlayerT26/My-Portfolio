import "./Layout.css";
import NavBar from "../NavBar/NavBar";

function Layout(props) {
  return (
    <>
      <div>
        <NavBar />
        <div>{props.children}</div>
      </div>
    </>
  );
}

export default Layout;
