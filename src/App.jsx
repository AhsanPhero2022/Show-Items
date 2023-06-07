import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
import NavItem from "./components/Home/NavItem";
function App() {
  return (
    <>
      <NavItem></NavItem>
      <Outlet></Outlet>
    </>
  );
}

export default App;
