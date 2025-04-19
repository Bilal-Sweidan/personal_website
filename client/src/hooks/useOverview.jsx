import { useQuery } from '@tanstack/react-query'
import axiosInstance from '../config/axiosInstance'

const useOverview = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ['overview'],
        queryFn: () => axiosInstance.get('/api/admin/overview')
    })
    return { data, isLoading, error }
}


export default useOverview

