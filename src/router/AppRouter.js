import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home'
import About from '../pages/About'
import Login from '../pages/Login'
import MyPosts from '../pages/MyPosts'
import Register from '../pages/Register'
import NotFound from '../pages/NotFound'
import Navbar from '../components/Navbar'
import Details from "../pages/Details";
import Search from "../pages/Search";
import ForgotPassword from "../pages/ForgotPassword";


const AppRouter = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/myposts" element={<MyPosts/>} />
                <Route path="/search" element={<Search/>} />
                <Route path="/details/:title" element={<Details/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter