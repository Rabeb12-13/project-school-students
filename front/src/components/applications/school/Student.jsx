import { useLocation } from "react-router-dom";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function Student() {
    const location = useLocation();
    const { student } = location.state || {};

    if (!student) return <p>No data for this student</p>

    return (
        <Card sx={{ maxWidth: 300 }}>
            <a href="/students">Go back</a>
            <CardContent>
                 <h1>{student.first_name} {student.last_name}</h1>
                 <p><strong>Mail:</strong> {student.mail}</p>
                 <p><strong>Phone:</strong> {student.phone}</p>
            </CardContent>
        </Card>
        // <div>
        // </div>
    );
}