import { useParams } from "react-router-dom";

export default function Username() {
    const params = useParams();
    return <div>Username:{params.username}</div>;
}