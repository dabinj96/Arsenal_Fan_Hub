import { useState } from "react";
import { searchMatches } from "../api/api";
import MatchItem from "../components/MatchItem";

const SearchPage = () => {
  const [team, setTeam] = useState("");
  const [matches, setMatches] = useState([]);

  const handleSearch = async () => {
    if (!team) return;
    const data = await searchMatches(team);
    setMatches(data);
  };

  return (
    <div>
      <h1>Search Matches</h1>
      <input
        type="text"
        placeholder="Enter team name"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {matches.map((match) => (
            <MatchItem key={match.match_id} match={match} />
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
