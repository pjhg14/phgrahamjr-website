import { Link } from "react-router-dom";

export default function NullPath() {
    return(
        <div>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Return</Link>
        </div>
    )
}