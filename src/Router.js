
import {Routes, Route} from "react-router-dom"
import Login from "./pages/Login"
import Search from "./pages/Search"
import List from "./pages/List"
import NotFind from "./pages/NotFound"

export default function Router(){

    return(

        <Routes>
            <Route path="/" element={<Login/>} />
            <Route path="/Search" element={<Search/>} />
            <Route path="/List" element={<List/>} />
            <Route path="*" element={<NotFind/>} />
        </Routes>

    )
}