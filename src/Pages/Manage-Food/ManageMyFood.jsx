import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import axios from "axios";
// import { useReactTable } from 'react-table'


const ManageMyFood = () => {
    let { user } = useAuth();

    const getMyFood = async () => {
        const res = await axios.get(`http://localhost:5000/myfood?email=${user?.email}`)
        return res;
    }
    const { data, isLoading } = useQuery({
        queryKey: ['myfood'],
        queryFn: getMyFood,
    });

    console.log(data?.data, isLoading);


    // useEffect(()=>{
    //     fetch(`http://localhost:5000/myfood?email=${user?.email}`)
    //     .then(res=>res.json())
    //     .then(data=>console.log(data))
    // },[user])

    // axios.get(`http://localhost:5000/myfood?email=${user?.email}`)
    // .then(data=>console.log(data.data));


    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Manage Food</title>
            </Helmet>

        </div>
    )
}
export default ManageMyFood;