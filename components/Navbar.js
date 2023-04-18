import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/exams">Exams</a></li>
                <li><a href="/login">Login</a></li> 
            </ul>
        </div>
    );
};

export default Navbar;