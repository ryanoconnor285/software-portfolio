import Main from "./screens/Main/Main";
import Projects from "./screens/Projects";
import Connect from "./screens/Connect/Connect";

const App = () => {
  return (
    <div className="App">
      <div className="content-wrapper">
        <Main />
        <Projects />
        <Connect />
      </div>
    </div>
  );
};

export default App;
