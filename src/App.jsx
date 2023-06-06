import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home/Home";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Home></Home>
      <Outlet></Outlet>
    </>
  );
}

export default App;
