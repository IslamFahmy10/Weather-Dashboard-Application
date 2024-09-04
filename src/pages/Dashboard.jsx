import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/navbar";
import Search from "../components/Search";
import MyLocation from "./MyLocation";
import SearchHistory from "./SearchHistory";

function Dashboard() {
  return (
   
     
      <Router>
         <Navbar />
        <Routes>
          {/* Default route to Dashboard */}
          <Route path="/" element={<Search />} />
          <Route path="/myLocation" element={<MyLocation />} />
          <Route path="/history" element={<SearchHistory  />} />
          <Route path="*" element={<Search />} />
        </Routes>
      </Router>
  );
}

export default Dashboard;
