import Link from "next/link";

const Navbar = ({admin}) => {
    if(admin){
        return (
            <div className="nav">
                <ul>
                    <li><a href="/admin">Home</a></li>
                    <li><a href="/admin/exams">Exams</a></li>
                    <li><a href="/admin/login">Login</a></li> 
                </ul>
            </div>
        );
    }
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