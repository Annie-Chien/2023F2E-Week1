import { useEffect } from 'react';
/** Components */
import Activity from './components/Activity/Activity';
import Advocacy from './components/Advocacy/Advocacy';
import Contact from './components/Contact/Contact';
import Donate from './components/Donate/Donate';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Policy from './components/Policy/Policy';
/** Plugins */
import AOS from 'aos';
import { ToastContainer } from 'react-toastify';
/** Style */
import 'react-toastify/dist/ReactToastify.css';
import 'aos/dist/aos.css';

/* ------------------ Default Component ----------------- */
function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  /** RENDER */
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Main />
      <Advocacy />
      <Activity />
      <Policy />
      <Donate />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
