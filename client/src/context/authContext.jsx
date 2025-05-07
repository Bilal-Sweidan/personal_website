import { createContext } from "react";
import { useState, useEffect } from "react";
// auth api
import auth from "../api/auth";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const fetchUser = async () => {
        try {
            setIsLoading(true);
            const data = await auth.currentUser();
            if (data.status === 200) {
                setUser(data.data.user);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setIsLoading(false);
        }
    }
    useEffect(() => {
        fetchUser();
    }, []);

    const logout = async () => {
        setIsLoading(true);
        const data = await auth.logout();
        if (data.status === 200) {
            setUser(null);
            setIsLoading(false);
        }
        setIsLoading(false);
    }

    return (
        <AuthContext.Provider value={{ user, setUser, logout, isLoading }}>
            {children}
        </AuthContext.Provider>
    )
}
const context = {
    AuthProvider,
    AuthContext
};
export default context;


