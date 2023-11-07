
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import ManageFoodTable from "./ManageFoodTable";


const ManageMyFood = () => {
    let { user } = useAuth();
    let [myFood, setMyFood] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/myfood?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyFood(data)

            })
    }, [user])

    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Manage Food</title>
            </Helmet>

            <h2 className="text-center font-bold mt-5 text-3xl md:text-4xl">My <span className="text-rose-800">Managed</span> Food</h2>

            <div className="overflow-x-auto mt-5">
                <table className="table bg-[#527790] text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-bold text-black">
                            <th><label>Food Image</label></th>
                            <th>Food Name</th>
                            <th>Expire Date</th>
                            <th>Food Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                            <th>Manage Food</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myFood.map(item => <ManageFoodTable
                                key={item._id}
                                item={item}
                                myFood = {myFood}
                            ></ManageFoodTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default ManageMyFood;