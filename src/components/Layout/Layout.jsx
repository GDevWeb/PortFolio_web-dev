import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Layout = ({children}) => { 
    
    return (
    <div className='wrapper'>
    <NavBar/>
    <Header/>
    <Footer/>
    </div>
  )
}

export default Layout;