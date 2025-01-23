import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Full name
                        </TableCell>
                        <TableCell>
                            Mail
                        </TableCell>
                        <TableCell>
                            Phone number
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {students.map((student) => (
                        <TableRow 
                        key={student.id}
                        >
                            <TableCell>
                                <Link to={`/student/${student.id}`} state={{ student }}>
                                    {student.first_name} {student.last_name}
                                </Link>
                            </TableCell>
                            <TableCell>
                                {student.mail}
                            </TableCell>
                            <TableCell>
                                {student.phone}
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}