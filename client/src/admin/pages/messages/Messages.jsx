// react query
import { useQuery } from '@tanstack/react-query'

// api
import message from '../../../api/message'
export default function Messages() {
    const { data: messages } = useQuery({
        queryKey: ['message'],
        queryFn: async () => await message.get(),
        // refetchInterval: false,
        refetchOnWindowFocus: false,
        // refetchOnMount: false,
        // refetchOnReconnect: false,
        // staleTime: Infinity, // data never becomes stale
    })
    console.log(messages)
    return (
        <div className='px-3 py-4'>
            {
                messages?.map((message, index) => (
                    <div key={index} className='p-3 bg-primary mb-3 rounded'>
                        <ul>
                            <li className='text-capitalize'>from: <a href="">{message?.email}</a></li>
                            <li className='text-capitalize'>name: {message?.name}</li>
                            <li className='text-capitalize'>subject: {message?.subject}</li>
                            <li className='text-capitalize'>data: {message?.createdAt}</li>
                            <li className='text-capitalize'>message: {message?.message}</li>
                        </ul>


                        <div className='d-flex justify-content-end'>
                            <select name="" id="" className='form form-select w-25'>
                                <option value="" selected>Setting</option>
                                <option value="">delete</option>
                            </select>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
