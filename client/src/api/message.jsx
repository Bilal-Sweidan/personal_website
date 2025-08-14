import axiosInstance from "../config/axiosInstance";

const message = {
    post: async (data) => {
        try {
            const res = await axiosInstance.post('/api/message', data)
            return res
        } catch (err) {
            console.log(err)
            throw err
        }
    },
    get: async () => {
        try {
            const res = await axiosInstance.get('/api/message', { withCredentials: true })
            console.log(res.data)
            return res.data
        } catch (err) {
            console.log(err.message)
            throw err
        }
    }
}

export default message