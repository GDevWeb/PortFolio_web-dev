import { Link } from 'react-router-dom';
import './NotFound.scss';

export const NotFound = () => {
  return (
    <div className="notFoundMssg">
    <h1 >NotFound</h1>

    <Link to='/'><p className='backToHomeMssg'>Retour à l'accueil</p></Link>
    </div>
  )
}
export default NotFound;