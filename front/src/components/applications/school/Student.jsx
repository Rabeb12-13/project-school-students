import { useLocation } from "react-router-dom";

export default function Student() {
    const location = useLocation();
    const { student } = location.state || {};

    if (!student) return <p>No data for this student</p>

    return (
        <div>
            <h1>{student.first_name} {student.last_name}</h1>
            <p><strong>Mail:</strong> {student.mail}</p>
            <p><strong>Phone:</strong> {student.phone}</p>
        </div>
    )
}