import { Helmet } from "react-helmet-async";
import Banner from "../../Components/Banner";
import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import { Link } from "react-router-dom";
import CustomerReview from "../../Components/CustomerReview";
import OurImpact from './../../Components/OurImpact';

const Home = () => {

    let [foods, setFood] = useState([]);
    useEffect(() => {
        fetch('https://food-sharing-server-ashy.vercel.app/home', { credentials: 'include' })
            .then(res => res.json())
            .then(data => setFood(data))
    }, []);

    
    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Home</title>
            </Helmet>
            <Banner></Banner>
            <h2 className="mt-10 mb-3 text-3xl md:text-5xl font-bold text-center">Features <span className="text-rose-800">Food</span> Items</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:p-5 gap-10 mt-10 bg-[#41647b]">
                {
                    foods?.map(item => <FoodItem
                        key={item._id}
                        item={item}></FoodItem>)
                }
            </div>
            <div className="my-5 block mx-auto">
                <button className="bg-black px-5 py-2 rounded block mx-auto text-white"><Link to='/available-food'>Show All Food</Link></button>
            </div>
            <OurImpact></OurImpact>
            <CustomerReview></CustomerReview>
        </div>
    )
}
export default Home;