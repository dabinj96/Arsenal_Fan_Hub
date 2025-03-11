import { useEffect, useState } from "react";
import { getUpcomingMatches } from "../api/api";

const UpcomingMatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getUpcomingMatches();
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Upcoming Matches</h1>
      <ul>
        {matches.map((match) => (
          <li key={match.match_id}>
            {match.home_team} vs {match.away_team} - {new Date(match.utc_date).toLocaleString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingMatchesPage;
