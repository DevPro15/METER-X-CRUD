//React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Navbar";
import Home from "./components/Home";
import AddBill from "./components/AddBill";
import EditBill from "./components/EditBill";
import BarChart from "./components/Stats";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/add_bill" element={<AddBill />} />
          <Route exact path="/edit_bill/:id" element={<EditBill />} />
          <Route exact path="/stats" element={<BarChart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
