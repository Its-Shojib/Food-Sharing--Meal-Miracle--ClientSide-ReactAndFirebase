import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";

const useReqFood = () => {
    let { user } = useAuth();

    const { data, isLoading, refetch } = useQuery({
        queryKey: ['requestedFood'],
        queryFn: async () => {
            const data = await fetch(`https://food-sharing-server-ashy.vercel.app/my-requested-food?email=${user?.email}`);
            return await data.json();
        },
    });
    return { data, isLoading, refetch };
};

export default useReqFood;