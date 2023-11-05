import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import ItemCard from "./ItemCard";


const AvailableFood = () => {
    const getAvailableFood = async () => {
        const res = await axios.get(`http://localhost:5000/available-food?foodStatus=available`)
        return res;
    }
    const { data } = useQuery({
        queryKey: ['availableFood'],
        queryFn: getAvailableFood,
    });

    let availableFood = data?.data;

    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Available Food</title>
            </Helmet>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-5 mt-10 bg-[#41647b]">
                {
                    availableFood?.map(item =><ItemCard 
                    key={item._id}
                    item={item}></ItemCard>)
                }
            </div>
        </div>
    )
}
export default AvailableFood;