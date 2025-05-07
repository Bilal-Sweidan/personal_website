import axios from "axios";
import axiosInstance from "../config/axiosInstance";

const admin = {
    newProject: async (data) => {
        const res = await axiosInstance.post('/api/projects', data, { withCredentials: true })
        return res
    },
    getProjects: async () => {
        const res = await axiosInstance.get('/api/projects')
        return res.data
    },
    deleteProject: async (id) => {
        const res = await axiosInstance.delete(`/api/projects/${id}`, { withCredentials: true })
        return res
    }
}

export default admin