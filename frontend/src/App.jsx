import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<PrivateRoute/>} >
        <Route path="/profile" element={<Profile/>} />
      </Route>
        
      <Route path="/about" element={<About />} />
      <Route path="/signin" element={<SignIn/>} />
      <Route path="/signup" element={<SignUp /> }/>
    </Routes>
    </BrowserRouter>
  );
}