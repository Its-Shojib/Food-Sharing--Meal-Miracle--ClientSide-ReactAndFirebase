import { useLoaderData, useNavigate } from "react-router-dom";
import useAuth from './../../Hooks/useAuth';
import Swal from "sweetalert2";

const ViewDetails = () => {
    let { user } = useAuth();
    let goto = useNavigate();
    let currentDate = new Date();
    let date = currentDate.toISOString().split('T')[0];
    let item = useLoaderData();
    let { donorName, _id, foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp, donorImage, donorEmail } = item;

    let handleRequest = (e) => {
        e.preventDefault();
        let form = e.target;
        let id = _id;
        let requestedDate = date;
        let foodDesp = form.addNotes.value;
        let donatePrice = form.donationPrice.value;
        let requestedUserName = user?.displayName;
        let requestedUserImg = user?.photoURL;
        let reqUserEmail = user?.email;
        let foodStatus = 'available';

        let requestedUser = { id, donorName, foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp, donorImage, donatePrice, requestedDate, requestedUserName, reqUserEmail, requestedUserImg, foodStatus };

        fetch('https://food-sharing-server-ashy.vercel.app/requested-food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestedUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Request Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                }
                goto('/my-food-request')
            })
    }

    return (
        <div>
            <div className="flex flex-col md:flex-row md:justify-start gap-5 bg-gray-300 my-5 rounded-md">
                <figure className='flex-1'><img className='w-full h-52 md:h-full' src={foodImg} alt={foodName} /></figure>
                <div className="flex-1 space-y-2">
                    <h2 className="card-title text-4xl my-3">Food Name: {foodName}</h2>
                    <h1 className='text-xl font-bold'>Donor Name: {donorName}</h1>
                    <p className="font-semibold text-lg">Quantity: {foodQuantity} person</p>
                    <p className="font-semibold text-lg">Expire in: {expDate} days</p>
                    <p className="font-semibold text-lg">Pickup Point: {pickupPoint}</p>
                    <p className="font-semibold text-lg">Details: {foodDesp}</p>
                    <button onClick={() => document.getElementById('modal').showModal()} className="bg-teal-700 px-4 py-2 rounded-md text-white">Request Food</button>
                </div>
                <dialog id="modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form onSubmit={handleRequest}>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Food Name</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={foodName} readOnly />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Food Image</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={foodImg} readOnly />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Donor Name</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={donorName} readOnly />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Donor Email</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={donorEmail} readOnly />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>User Name</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={user?.displayName} readOnly />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>User Email</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={user?.email} readOnly />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Pickup Point</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={pickupPoint} readOnly />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Food Id</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={_id} readOnly />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Requested Date</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={date} readOnly />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Expire Date</p>
                                    <input className="w-full p-2 text-black" type="text" defaultValue={expDate} readOnly />
                                </div>
                            </div>
                            <div className='flex flex-col md:flex-row gap-10 mb-5'>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Donation Money</p>
                                    <input className="w-full p-2 text-black" type="number" name="donationPrice" required placeholder='Enter the amount $' />
                                </div>
                                <div className='flex-1'>
                                    <p className='text-xl font-bold'>Additional Notes</p>
                                    <input className="w-full p-2 text-black" type="text" name="addNotes" id="" defaultValue={foodDesp} />
                                </div>
                            </div>

                            <button className='w-full text-center text-white bg-[#0e0d0d] py-2 text-2xl' type="submit">Request Food</button>

                        </form>
                    </div>
                </dialog>
            </div>
        </div>
    )
}
export default ViewDetails;