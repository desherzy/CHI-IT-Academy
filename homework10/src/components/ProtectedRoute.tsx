import type { JSX } from 'react';
import { Navigate } from 'react-router-dom';

interface Props {
    children: JSX.Element;
    isAllowed: boolean;
    redirectPath?: string;
};

function ProtectedRoute({ children, isAllowed, redirectPath = '/login' }: Props) {
    if (!isAllowed) {
        return <Navigate to={redirectPath} replace />;
    }

    return children;
}

export default ProtectedRoute;

