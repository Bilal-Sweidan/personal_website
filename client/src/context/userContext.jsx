import { createContext } from "react";
import { useState } from "react";
import axios from "axios";
import { useQuery, useMutation } from "react-query";
const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const { data: userData, isLoading: isUserLoading, error } = useQuery("user", async () => {
        const { data } = await axios.get("/api/user");
        return data;
    });

    useEffect(() => {
        if (userData) {
            setUser(userData);
        }
    }, [userData]);

    const login = async (email, password) => {
        const userMutation = useMutation(async () => {
            const { data } = await axios.post("/api/login", { email, password });
            return data;
        });
    }

    const logout = async () => {
        const { data } = await axios.post("/api/logout");
        return data;
    }

    return (
        <UserContext.Provider value={{ user, login, logout }}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;


