import {Routes, Route} from "react-router-dom"
import App from "./App"
import UpdatePost from "./updatePost"
import Home from "./Home"

function Rpoters () {
    return <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<App />} />
        <Route path="/update/:id" element={<UpdatePost />} />
    </Routes>
}

export default Rpoters