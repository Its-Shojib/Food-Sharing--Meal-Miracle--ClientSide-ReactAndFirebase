
import { Helmet } from "react-helmet-async";
import ItemCard from "./ItemCard";
import { useEffect, useState } from "react";
import './AvailableFood.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const AvailableFood = () => {
    let [count,setCount] = useState(null);
    let [products, setProducts] = useState([]);
    let [itemPerPage, setItemPerPage] = useState(10)
    let [currentPage, setCurrentPage] = useState(0);
    let numberOfPages = Math.ceil(count / itemPerPage);

    let pages = [...Array(numberOfPages).keys()]
    useEffect(()=>{
        fetch('http://localhost:5000/available-food/productCount')
        .then(res=>res.json())
        .then(data=>{
            setCount(data.count);
        })
    },[])

    useEffect(() => {
        fetch(`http://localhost:5000/available-food?foodStatus=available&page=${currentPage}&size=${itemPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [currentPage, itemPerPage]);
    // const getAvailableFood = async () => {
    //     const res = await axios.get(`http://localhost:5000/available-food?foodStatus=available`)
    //     return res;
    // }
    // const { data } = useQuery({
    //     queryKey: ['availableFood'],
    //     queryFn: getAvailableFood,
    // });
    // let availableFood = data?.data;

    let handleItemPerPage = (e) =>{
        let val = parseInt(e.target.value);
        setItemPerPage(val);
        setCurrentPage(0);
    }
    let handlePrevious = () =>{
        if(currentPage > 0){
            setCurrentPage(currentPage - 1);
        }
    }
    let handleNext = () =>{
        if(currentPage < pages.length - 1){
            setCurrentPage(currentPage + 1);
        }
    }
    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Available Food</title>
            </Helmet>
            <div className="text-center text-4xl font-bold my-5">All <span className="text-rose-800">Available</span> Food</div>
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 md:px-5 gap-5 mt-5 bg-[#41647b]">
                {
                    products?.map(item => <ItemCard
                        key={item._id}
                        item={item}></ItemCard>)
                }
            </div>
            <div className='pagination my-5'>
                <button onClick={handlePrevious}>Prev</button>
                {
                    pages.map(page => <button 
                    className={currentPage === page ? 'selected':'undefined'} 
                    key={page}
                    onClick={()=> setCurrentPage(page)}
                    >{page}</button>)
                }
                <button onClick={handleNext}>Next</button>
                <select  defaultValue={itemPerPage} onChange={handleItemPerPage} name="" id="">
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                </select>
            </div>
        </div>
    )
}
export default AvailableFood;