import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import admin from "../api/admin"
import { useEffect, useState } from "react";
const useProject = () => {
    const queryClient = useQueryClient();
    const [projects, setProjects] = useState()
    const newProjectMutation = useMutation({
        mutationKey: ["projects"],
        mutationFn: (formData) => admin.newProject(formData),
        onSuccess: () => {

        }
    })

    const { data, isLoading, isError } = useQuery({
        queryKey: ['projects'],
        queryFn: () => admin.getProjects(),
    })

    const deleteProject = useMutation({
        mutationKey: ['projects'],
        mutationFn: (id) => admin.deleteProject(id),
        onSuccess: (_, id) => {
            setProjects((prev) => prev.filter((p) => p.id !== id));
            queryClient.setQueryData(['projects'], (old) =>
                old?.filter((p) => p.id !== id)
            );
        },
    })


    useEffect(() => {
        setProjects(data)
    }, [data])

    return { newProjectMutation, projects, isLoading, isError, deleteProject }
}
export default useProject