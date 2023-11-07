
import { Helmet } from "react-helmet-async";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import './AvailableFood.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AvailableFood = () => {
    let [products, setProducts] = useState([]);
    let [sortValue,setSortValue] = useState(1);
    let [myData,setMyData] = useState([]);

    useEffect(()=>{
        setMyData(products)
    },[products])

    // useEffect(()=>{
    //     fetch(`http://localhost:5000/available-food/sort?foodStatus=available&sortOrder=${sortValue}`)
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data))
    // },[sortValue])

    useEffect(() => {
        fetch(`http://localhost:5000/available-food?foodStatus=available&sortOrder=${sortValue}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [sortValue]);
    // const getAvailableFood = async () => {
    //     const res = await axios.get(`http://localhost:5000/available-food?foodStatus=available`)
    //     return res;
    // }
    // const { data } = useQuery({
    //     queryKey: ['availableFood'],
    //     queryFn: getAvailableFood,
    // });
    // let availableFood = data?.data;

    let handleSearch = (e) =>{
        e.preventDefault();
        let input = e.target.name.value;
        let filteredData = products.filter(data => data.foodName.toLowerCase().includes(input.toLowerCase()))
        setMyData(filteredData);
    }
    let handleSort = (e) =>{
        let val = parseInt(e.target.value);
        setSortValue(val);
    }
    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Available Food</title>
            </Helmet>
            <div className="text-center text-4xl font-bold my-5">All <span className="text-rose-800">Available</span> Food</div>

            <div className="flex justify-center items-center flex-col md:flex-row gap-5 md:gap-20 w-full mx-auto my-10">
                <div className="space-y-5">
                    <form onSubmit={handleSearch}>
                        <input className="w-64 p-2 text-black border-solid border-2" type="text" name="name" placeholder="Search food name..." />
                        <button className="bg-red-500 text-white px-3 py-2 rounded-r-md" type="submit">Search</button>
                    </form>
                </div>
                <div className="text-lg">
                    <span className="font-bold text-xl">Sort by:</span> <select onChange={handleSort}>
                        <option value="1">Assending</option>
                        <option value="-1">Decending</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-5 gap-5 mt-5 bg-[#41647b]">
                {
                    myData?.map(item => <ItemCard
                        key={item._id}
                        item={item}></ItemCard>)
                }
            </div>
        </div>
    )
}
export default AvailableFood;