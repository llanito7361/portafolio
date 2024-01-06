import 'bootswatch/dist/cosmo/bootstrap.min.css';
import Navbar from "./Navbar";

const Layout = ({ children }) => (
  <>
    <Navbar />

      <main className='container py-4'>
        {children}
      </main>

  </>
);
export default Layout;
