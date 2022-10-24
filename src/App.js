import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Detail from "./pages/Detail"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </>
  )
}

export default App