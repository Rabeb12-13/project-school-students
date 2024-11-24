import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Classes() {
    const [classes, setClasses] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/classes")
            .then((response) => response.json())
            .then((data) => {
                setClasses(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error);
                setLoading(false);
            });
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message} </p>;

    return (
        <div>
            <a href="/">Go back to home</a>
            <h1>All classes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {classes.map((classe) => (
                        <tr key={classe.id}>
                            <Link to={`/classe/${classe.id}`} state={{ classe }}>
                                {classe.name}
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}