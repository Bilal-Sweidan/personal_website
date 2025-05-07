import axiosInstance from "../config/axiosInstance";

const auth = {
    login: async (email, password) => {
        const data = await axiosInstance.post("/auth/login", { email, password }, { withCredentials: true });
        return data;
    },
    currentUser: async () => {
        const data = await axiosInstance.get("/auth/current-user", { withCredentials: true });
        return data;
    },
    logout: async () => {
        const data = await axiosInstance.post("/auth/logout",{}, { withCredentials: true });
        return data;
    }
}
export default auth;
