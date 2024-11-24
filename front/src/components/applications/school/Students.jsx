import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Students() {
    const [students, setStudents] = React.useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/students")
            .then((response) => response.json())
            .then((data) => {
                setStudents(data);
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
            <h1>All students</h1>
            <table>
                <thead>
                    <tr>
                        <th>Full name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.id}>
                            <Link to={`/student/${student.id}`} state={{ student }}>
                                {student.first_name} {student.last_name}
                            </Link>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}