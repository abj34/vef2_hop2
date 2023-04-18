/*import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children, title, admin }) => {
    return (
        <div>
            <Header title={title} />
            <Navbar admin = {admin}/>
            <main>
                { children }
            </main>
            <Footer />
        </div>
    );
};

export default Layout;*/

import Header from './Header';
import Footer from './Footer';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
  title: string;
  admin?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, title, admin }) => {
  return (
    <div>
      <Header title={title} />
      <Navbar admin={admin} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
