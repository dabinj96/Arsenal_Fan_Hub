import { useEffect, useState } from "react";
import { getCompletedMatches } from "../api/api";

const CompletedMatchesPage = () => {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const data = await getCompletedMatches();
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div>
      <h1>Completed Matches</h1>
      <ul>
        {matches.map((match) => {
          const matchDate = new Date(match.utc_date).toLocaleString();

          // 1. Access the `score` field
          //    If your DB returns it as an object, no parse needed. 
          //    If it’s a string, do JSON.parse(match.score).
          const scoreObj = typeof match.score === "string"
            ? JSON.parse(match.score)
            : match.score;

          // 2. Extract the home & away goals from the structure
          //    Adjust these property names to match your data shape
          let homeGoals, awayGoals;
          if (scoreObj && scoreObj.fullTime) {
            homeGoals = scoreObj.fullTime.home ?? 0;
            awayGoals = scoreObj.fullTime.away ?? 0;
          } else {
            homeGoals = 0;
            awayGoals = 0;
          }

          return (
            <li key={match.match_id}>
              <strong>{match.home_team}</strong> vs{" "}
              <strong>{match.away_team}</strong> <br />
              Date: {matchDate} <br />
              Final Score: {homeGoals} - {awayGoals}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default CompletedMatchesPage;
