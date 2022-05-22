import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import { publicRoute } from "./Routes/publicRoute";

function App() {
  return (
    <div>
      <Navbar>
        <Routes>
          {publicRoute.map(({ path, Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;
