
import { Helmet } from "react-helmet-async";
import ItemCard from "./ItemCard";
import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import './AvailableFood.css'


const AvailableFood = () => {
    let { count } = useLoaderData();
    let [products, setProducts] = useState([]);
    let [itemPerPage, setItemPerPage] = useState(10)
    let [currentPage, setCurrentPage] = useState(0);
    let numberOfPages = Math.ceil(count / itemPerPage);

    let pages = [...Array(numberOfPages).keys()]

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
            <div className="grid grid-cols-1 md:grid-cols-2 px-2 gap-5 mt-10 bg-[#41647b]">
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