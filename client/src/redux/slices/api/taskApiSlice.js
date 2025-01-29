const TASK_URL='/task';
import { apiSlice } from "../apiSlice";

export const taskApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getDashboardStats: builder.query({
            query: () => ({
                url: `${TASK_URL}/dashboard`,
                method: "GET",
                // body:data,
                 credentials: "include",
            }),
        }), 

        getAllTask: builder.query({
            query: ({strQuery,isTrashed,search}) => ({
                url: `${TASK_URL}?stage=${strQuery}&isTrashed=${isTrashed}&search=${search}`,
                method: "GET",
                // body:data,
                 credentials: "include",
            }),
        }), 

        createTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/create`,
                method: "POST",
                body:data,
                 credentials: "include",
            }),
        }), 

        duplicateTask: builder.mutation({
            query: (id) => ({
                url: `${TASK_URL}/duplicate/${id}`,
                method: "POST",
                body:{},
                 credentials: "include",
            }),
        }), 

        updateTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/update/${data._id}`,
                method: "PUT",
                body:data,
                 credentials: "include",
            }),
        }), 

       trashTask: builder.mutation({
            query: (data) => ({
                url: `${TASK_URL}/${id}`,
                method: "PUT",
                // body:data,
                 credentials: "include",
            }),
        }), 

        
       createSubTask: builder.mutation({
        query: ({data,id}) => ({
            url: `${TASK_URL}/create-subtask/${id}`,
            method: "PUT",
            body:data,
             credentials: "include",
        }),
    }), 
    })
})
export const {useGetDashboardStatsQuery,useGetAllTaskQuery,
    useCreateTaskMutation,
    useDuplicateTaskMutation,useUpdateTaskMutation,useTrashTaskMutation ,useCreateSubTaskMutation} = taskApiSlice;
