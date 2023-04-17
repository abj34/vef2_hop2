import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title }) => {
    return (
        <div>
            <Header title={title} />
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;