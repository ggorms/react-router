import "./App.css";

import Nav from "./components/Nav";
import MainSection from "./components/MainSection";

function App() {
  return (
    <div id="container">
      {/* <div id="navbar">
        <Link to={"/"}> Home</Link>
        <Link to={"/blue"}> blue</Link>
        <Link to={"/red"}> red</Link>
      </div> */}
      <Nav />
      <div id="main-section">
        {/* <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/blue"} element={<Blue />} />
          <Route path={"/red"} element={<Red />} />
        </Routes> */}
        <MainSection />
      </div>
    </div>
  );
}

export default App;
