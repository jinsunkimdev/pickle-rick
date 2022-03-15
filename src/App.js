import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import SearchCharacters from "./routes/SearchCharacters"
import Episodes from "./routes/Episodes"
import Detail from "./routes/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<SearchCharacters/>}/>
        <Route path="/episodes" element={<Episodes/>}/>
        <Route path="/:id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
