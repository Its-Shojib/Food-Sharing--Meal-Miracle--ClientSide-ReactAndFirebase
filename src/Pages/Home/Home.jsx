import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import axios from "axios";
import { useState } from "react";
import FoodItem from "./FoodItem";


const Home = () => {

    let [foods,setFood] = useState([]);

    axios.get('http://localhost:5000/')
    .then(data=>{
        setFood(data.data);
    });

    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-5 mt-10 bg-[#41647b]">
                {
                    foods?.map(item=><FoodItem 
                        key={item._id}
                        item={item}></FoodItem>)
                }
            </div>
        </div>
    )
}
export default Home;