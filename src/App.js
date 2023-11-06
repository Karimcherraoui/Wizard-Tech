import {Route, Routes} from "react-router-dom"
import "./App.css"
import Header from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Footer from "./component/Footer";
import Categories from "./component/Categories";
import Category from "./component/Category";
import Session from "./component/Session";
import Register from "./component/Register";
import Notfound from "./component/Notfound";
import Thanks from "./component/Thanks";


export default function App() {
    return (
        <>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Categories />}>
                    <Route path=":idcat" element={<Category />}>
                        <Route path=":idsession" element={<Session />} />
                    </Route>
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/thanks" element={<Thanks />} />

                <Route path='*' element={<Notfound />}/>

            </Routes>
            <Footer/>
</>
)
}