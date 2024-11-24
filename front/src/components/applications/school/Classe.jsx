import { useLocation } from "react-router-dom";

export default function Classe() {
    const location = useLocation();
    const { classe } = location.state || {};

    if (!classe) return <p>No data for this classe</p>

    return (
        <div>
            <h1>{classe.name}</h1>
        </div>
    )
}