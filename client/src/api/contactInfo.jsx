import axiosInstance from "../config/axiosInstance";

const contactInfo = {
    getData: async () => {
        try {
            const res = await axiosInstance.get('/api/contact-info')
            return res.data
        } catch (err) {
            console.log(err.message)
            throw err
        }
    }
}

export default contactInfo