import { Link } from "react-router-dom"
import "./navbar.css"

const NavBar = () => {
    return (
        <div className="nav-body">
            <nav>
                <Link to="/">Clock</Link>
                <Link to="/world_clock">World Clock</Link>
                <Link to="/alarm">Alarm</Link>
                <Link to="/stopwatch">Stopwatch</Link>
                <Link to="/timer">Timer</Link>
            </nav>
        </div>
    )
}

export default NavBar