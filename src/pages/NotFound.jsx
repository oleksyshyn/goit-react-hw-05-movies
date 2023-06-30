// import NotFoundComponent from 'components/NotFoundComponent/NotFoundComponent';
// import { useNavigate } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

function NotFound() {
    // const navigate = useNavigate();
    // const goHomeHandler = () => navigate('/', { replace: true });
    // return <NotFoundComponent goHomeHandler={goHomeHandler} />
    
    return <Navigate to="/" replace={true} />
}

export default NotFound;