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

    })
})
export const {useGetDashboardStatsQuery } = taskApiSlice;
