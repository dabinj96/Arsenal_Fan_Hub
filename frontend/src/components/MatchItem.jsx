// src/components/MatchItem.jsx
import React from "react";

function MatchItem({ match }) {
  const matchDate = new Date(match.utc_date).toLocaleString();

  // If your DB stores `score` as a string, parse it; if it’s already an object, skip parsing.
  const scoreObj = typeof match.score === "string"
    ? JSON.parse(match.score)
    : match.score;

  let finalScore = "";
  if (match.status === "FINISHED" && scoreObj?.fullTime) {
    // Adjust property names to match your actual data shape
    const homeGoals = scoreObj.fullTime.home ?? 0;
    const awayGoals = scoreObj.fullTime.away ?? 0;
    finalScore = `${homeGoals} - ${awayGoals}`;
  } else {
    finalScore = "TBD";
  }

  return (
    <li>
      <strong>{match.home_team}</strong> vs <strong>{match.away_team}</strong>
      <br />
      Date: {matchDate}
      <br />
      {match.status === "FINISHED" ? (
        <span>Final Score: {finalScore}</span>
      ) : (
        <span>Status: {match.status}</span>
      )}
    </li>
  );
}

export default MatchItem;
