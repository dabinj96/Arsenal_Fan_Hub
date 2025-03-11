import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import FixturesPage from "./pages/FixturesPage";
import UpcomingMatchesPage from "./pages/UpcomingMatchesPage";
import SearchPage from "./pages/SearchPage";
import CompletedMatchesPage from "./pages/CompletedMatchesPage"; // 🔥 NEW

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">All Matches</Link> | 
        <Link to="/upcoming">Upcoming Matches</Link> | 
        <Link to="/completed">Completed Matches</Link> |
        <Link to="/search">Search Matches</Link>  
      </nav>
      <Routes>
        <Route path="/" element={<FixturesPage />} />
        <Route path="/upcoming" element={<UpcomingMatchesPage />} />
        <Route path="/completed" element={<CompletedMatchesPage />} /> 
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
};

export default App;
