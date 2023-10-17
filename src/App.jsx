import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Records from "./pages/Records";
import PageNoteFount from "./pages/PageNoteFount";
import Home from "./pages/Home";
import Accounts from "./pages/Accounts";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/accounts" element={<Accounts />} />
          <Route path="/records" element={<Records />} />
          <Route path="*" element={<PageNoteFount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
