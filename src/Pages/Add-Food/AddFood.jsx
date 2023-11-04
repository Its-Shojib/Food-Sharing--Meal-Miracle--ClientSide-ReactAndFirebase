import { useContext } from "react";
import { AuthContext } from './../../AuthProvider/AuthProvider';
import Swal from "sweetalert2";

const AddFood = () => {
    let {user} = useContext(AuthContext);
    console.log(user);
    let handleAddFood = (e) => {
        e.preventDefault();
        let form = e.target;
        let foodName = form.foodName.value;
        let foodQuantity = form.foodQuantity.value;
        let pickupPoint = form.pickupPoint.value;
        let inputDate = form.expDate.value;
        let foodImg = form.foodImg.value;
        let foodDesp = form.addNotes.value;
        let donorName = user.displayName;
        let donorImage = user.photoURL;
        let donorEmail = user?.email
        let foodStatus = 'available'

        let date1 = new Date();
        let date2 = new Date(inputDate)
        let time = Math.abs(date2-date1);
        let expDate = Math.ceil(time/(1000*60*60*24))

        let newFood = { foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp,donorName,donorImage,donorEmail,foodStatus}
        console.log(newFood)
        fetch('http://localhost:5000/foods', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Added Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
    return (
        <div>
            <div className='bg-[#41647b] space-y-5 my-5 py-8 text-white'>
                <div className=' space-y-5'>
                    <h1 className='text-3xl text-center'>Add New Food</h1>
                </div>
                <div className='px-4 md:px-24'>
                    <form onSubmit={handleAddFood}>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Name</p>
                                <input className="w-full p-2 text-black" type="text" name="foodName" id="" placeholder='Enter food name' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Quantity</p>
                                <input className="w-full p-2 text-black" type="text" name="foodQuantity" id="" placeholder='Enter food quantity' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Pickup Point</p>
                                <input className="w-full p-2 text-black" type="text" name="pickupPoint" id="" placeholder='Enter pickup point' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Expire Date</p>
                                <input className="w-full p-2 text-black" type="date" name="expDate" id="" placeholder='Enter expire date' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row gap-10 mb-5'>
                            <div className='flex-1'>
                                <p className='text-xl'>Food Image URL</p>
                                <input className="w-full p-2 text-black" type="text" name="foodImg" id="" placeholder='Enter food image url' />
                            </div>
                            <div className='flex-1'>
                                <p className='text-xl'>Additional Notes</p>
                                <input className="w-full p-2 text-black" type="text" name="addNotes" id="" placeholder='Enter short description' />
                            </div>
                        </div>

                        <button className='w-full text-center text-white bg-[#0e0d0d] py-2 text-2xl mb-5' type="submit">Add Food</button>

                    </form>
                </div>

            </div>
        </div>
    )
}
export default AddFood;