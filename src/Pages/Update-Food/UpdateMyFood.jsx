import { Helmet } from "react-helmet-async";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateMyFood = () => {
    let navigate = useNavigate();
    let food = useLoaderData();

    let { _id, foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp } = food;

    let handleUpdate = (e) => {
        e.preventDefault();
        let form = e.target;

        let foodName = form.foodName.value;
        let foodQuantity = form.foodQuantity.value;
        let pickupPoint = form.pickupPoint.value;
        let inputDate = form.expDate.value;
        let foodImg = form.foodImg.value;
        let foodDesp = form.addNotes.value;

        let date1 = new Date();
        let date2 = new Date(inputDate)
        let time = Math.abs(date2 - date1);
        let expDate = Math.ceil(time / (1000 * 60 * 60 * 24))

        let updatedFood = { foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp }
        console.log(updatedFood)
        fetch(`https://food-sharing-server-ashy.vercel.app/update-one/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Updated Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/manage-my-food')
                }
            })
        fetch(`https://food-sharing-server-ashy.vercel.app/updateOne/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedFood)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div>
            <Helmet>
                <title>Meal Miracle | Update Food</title>
            </Helmet>
            <div className='bg-[#41647b] space-y-5 my-5 py-8 text-white'>
                <div className=' space-y-5'>
                    <h1 className='text-3xl text-center'>🍕Update Food!🍕</h1>
                </div>
                <div className='px-4 md:px-24'>
                    <form onSubmit={handleUpdate}>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Name</p>
                                <input className="w-full p-2 text-black" type="text" name="foodName" defaultValue={foodName} />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Quantity</p>
                                <input className="w-full p-2 text-black" type="text" name="foodQuantity" defaultValue={foodQuantity} />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Pickup Point</p>
                                <input className="w-full p-2 text-black" type="text" name="pickupPoint" defaultValue={pickupPoint} />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Expire Date</p>
                                <input className="w-full p-2 text-black" type="date" name="expDate" id="" defaultValue={expDate} required />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Image URL</p>
                                <input className="w-full p-2 text-black" type="text" name="foodImg" id="" defaultValue={foodImg} />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Additional Notes</p>
                                <input className="w-full p-2 text-black" type="text" name="addNotes" defaultValue={foodDesp} />
                            </div>
                        </div>

                        <button className='w-full text-center text-white bg-[#0e0d0d] py-2 text-2xl mb-5' type="submit">Update Food</button>

                    </form>
                </div>

            </div>
        </div>
    )
}
export default UpdateMyFood;