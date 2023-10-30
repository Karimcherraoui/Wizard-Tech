import {Route, Routes} from "react-router-dom"
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";



export default function App() {
    return (
        <>
            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>

            </Routes>
        </>
    )
}