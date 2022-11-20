import {Navigate} from 'react-router-dom';
import {useUserContext} from './UserContext';

export const ProtectedRoute = ({children}) => {
    const {
        user: {email},
    } = useUserContext();
    if (!email) {
        //if user is not identificated, then he goes to "login"
        return <Navigate to="/login" />;
    }
    return children;
};
