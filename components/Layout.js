import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Header title={title} />
            <Navbar />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;