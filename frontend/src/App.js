//React-Router-Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS
import "./App.css";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
//Components
import Header from "./components/Navbar";
import Home from "./components/Home";
import AddBill from "./components/AddBill";
import EditBill from "./components/EditBill";
import BarChart from "./components/Stats";

// APP function: for routing and components call
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* Navbar */}
        <Header />
        {/* Routes */}
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
