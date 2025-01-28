const USER_URL='/user';
import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        updateUser: builder.mutation({
            query: (data) => ({
                url: `${USER_URL}/profile`,
                method: "PUT",
                body:data,
                 credentials: "include",
            }),
        }), 

        getTeamList: builder.query({
            query: () => ({
                url: `${USER_URL}/get-team`,
                method: "GET",
                 credentials: "include",
            }),
        }), 

        deleteUser: builder.mutation({
          query: (id) => ({
              url: `${USER_URL}/${id}`,
              method: "GET",
               credentials: "include",
          }),
      }), 

      userAction: builder.mutation({
        query: () => ({
            url: `${USER_URL}/${data.id}`,
            method: "PUT",
            credentials: "include",
        }),
    }), 

        logout: builder.mutation({
            query: (data) => ({
                url: `${AUTH_URL}/logout`,
                method: "POST",
                body:data,
                 credentials: "include",
            }),
        }), 
    }),
})
export const { useUpdateUserMutation,useGetTeamListQuery,useDeleteUserMutation,useUserActionMutation} = userApiSlice;
