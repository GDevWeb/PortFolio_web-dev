import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import BackToTopButton from '../BackToTop/BackToTopButton';
import Footer from '../Footer/Footer';

const Layout = ({children}) => { 
    
    return (
      <>
    <NavBar/>
    <div className='wrapper'>
    <Header/>
    <main>
      <section id='content'>
    { children }
      </section>
    </main>
    <div className="containerBackToTop">
    <BackToTopButton/>
    </div>
    <Footer/>
    
    </div>
      </>
  )
}

export default Layout;