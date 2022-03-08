import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import ErrorPage from "./components/404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Detail />} />
        <Route path="/404" element={<ErrorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
