import '../styles/reset.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./page/Login.tsx";
import Home from "./page/Home.tsx";
import Header from "./components/Header.tsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
