import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title, user }) => {
    return (
        <div>
            <Header title={title} />
            <Navbar />
            <main>
                { children }
            </main>
            <Footer isLoggedIn={!!user} username={user} />
        </div>
    );
};

export default Layout;