import { useSelector } from 'react-redux';
import { userSelector } from '../redux/selector'
import { Navigate } from 'react-router-dom';

export function Protect({ children }) {
    const user = useSelector(userSelector);
    if (!user.status)
        return  <Navigate to="/login" />
    else
        return children;
}
