
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import RequestedRow from "./RequestedRow";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";


const MyFoodReq = () => {
    // let {data, isLoading, refetch} = useReqFood()
    let [requestedFood, setRequestedFood] = useState([]);

    let { user } = useAuth()

    useEffect(() => {
        fetch(`https://food-sharing-server-ashy.vercel.app/my-requested-food?email=${user?.email}`, { credentials: 'include' })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setRequestedFood(data)

            })
    }, [user])
    console.log(requestedFood);

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
                fetch(`https://food-sharing-server-ashy.vercel.app/my-requested-food/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Request has been deleted.',
                                'success'
                            )
                            let remaining = requestedFood.filter(reqFood => reqFood._id !== id);
                            setRequestedFood(remaining)
                        }
                    })
            }
        })
    }
    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Food Request</title>
            </Helmet>
            <h2 className="text-center font-bold mt-10 text-3xl md:text-4xl">My <span className="text-rose-800">Requested</span> Food</h2>

            <div className="overflow-x-auto mt-5">
                <table className="table bg-[#527790] text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-bold text-black">
                            <th>Donor Name</th>
                            <th>Pickup Point</th>
                            <th>Expire Date</th>
                            <th>Requested Date</th>
                            <th>Donation Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            requestedFood.map(reqFood => <RequestedRow
                                key={reqFood._id}
                                reqFood={reqFood}
                                handleDelete={handleDelete}
                            ></RequestedRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default MyFoodReq;