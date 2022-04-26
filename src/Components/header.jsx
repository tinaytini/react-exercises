import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <div>
            <ul style={{ display: 'grid', gridAutoFlow: 'column', gap: 12 }}>
                <Link to="/Exercise1"><li>Задание 1</li></Link>
                <Link to="/Exercise2"><li>Задание 2</li></Link>
                <Link to="/Exercise3"><li>Задание 3</li></Link>
                <Link to="/Exercise4"><li>Задание 4</li></Link>
                <Link to="/Exercise5"><li>Задание 5</li></Link>
                <Link to="/Exercise6"><li>Задание 6</li></Link>
            </ul>
        </div>
    )
}

export default Header;