import { useEffect, useState } from 'react';
import { getAllFixtures } from '../api/api';
import MatchItem from '../components/MatchItem';

const FixturesPage = () => {
    const [fixtures, setFixtures] = useState([]);

    useEffect(() => {
        const fetchFixtures = async () => {
            const data = await getAllFixtures();
            setFixtures(data);
        };
        fetchFixtures();
    }, []);

    return (
        <div>
            <h1>Arsenal Fan Hub</h1>
            <ul>
                {fixtures.map((match) => (
                    <MatchItem key={match.match_id} match={match} />
                ))}
            </ul>
        </div>
    )
}

export default FixturesPage;