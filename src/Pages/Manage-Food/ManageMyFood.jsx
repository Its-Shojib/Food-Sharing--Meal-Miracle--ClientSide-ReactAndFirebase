
import { Helmet } from "react-helmet-async";
import useAuth from "../../Hooks/useAuth";
import { useEffect, useState } from "react";
import ManageFoodTable from "./ManageFoodTable";
import Swal from "sweetalert2";


const ManageMyFood = () => {
    let { user } = useAuth();
    let [myFood, setMyFood] = useState([]);

    useEffect(() => {
        fetch(`https://food-sharing-server-ashy.vercel.app/myfood?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setMyFood(data)

            })
    }, [user])

    let handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://food-sharing-server-ashy.vercel.app/manage-my-food/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Food has been deleted.',
                                'success'
                            )
                            let remaining = myFood.filter(food => food._id !== id);
                            setMyFood(remaining)
                        }
                    })
                fetch(`https://food-sharing-server-ashy.vercel.app/request-delete/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                    })
            }
        })
    }

    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Manage Food</title>
            </Helmet>

            <h2 className="text-center font-bold mt-5 text-3xl md:text-4xl">My <span className="text-rose-800">Managed</span> Food</h2>

            <div className="overflow-x-auto mt-5 min-h-[500px]">
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
                                handleDelete={handleDelete}
                            ></ManageFoodTable>)
                        }
                    </tbody>
                </table>
            </div>
        </div>

    )
}
export default ManageMyFood;