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
    }
}

export default message