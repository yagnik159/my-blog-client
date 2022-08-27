
import Home from "./pages/home/Home";
import TopBar from "./comp/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Setting from "./pages/setting/Setting";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { useContext } from "react";
import { Context } from "./context/Context";


function App() {
  const {user} = useContext(Context);
  return (
  <BrowserRouter>
    <TopBar/>
    <Routes>
      <Route path="https://my-mern-blog-apps.herokuapp.com/" element={<Home/>}/>
      <Route path="https://my-mern-blog-apps.herokuapp.com/register" element={user?<Home/>:<Register/>} />
      <Route path="https://my-mern-blog-apps.herokuapp.com/login" element={user?<Home/>:<Login/>}/>
      <Route path="https://my-mern-blog-apps.herokuapp.com/write" element={user?<Write/>:<Login/>}/>
      <Route path="https://my-mern-blog-apps.herokuapp.com/setting" element={user?<Setting/>:<Login/>}/>
      <Route path="https://my-mern-blog-apps.herokuapp.com/post/:postid" element={<Single/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
