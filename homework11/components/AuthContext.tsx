'use client';

import Cookies from 'js-cookie';
import { createContext, 
    useContext, 
    useEffect, 
    useState, 
    ReactNode 
} from 'react';

const AuthContext = createContext({ isAuth: false, login: () => {}, logout: () => {} });

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        setIsAuth(!!Cookies.get('token'));
    }, []);

    const login = () => setIsAuth(true);
    const logout = () => {
        Cookies.remove('token');
        setIsAuth(false);
    };

    return (
        <AuthContext.Provider value={{ isAuth, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => useContext(AuthContext);

