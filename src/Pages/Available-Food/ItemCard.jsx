
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
const ItemCard = ({ item }) => {
    let goto = useNavigate();
    let { _id, foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp, donorName, donorImage } = item;
    return (
        <div data-aos="zoom-in">
            <div className="flex flex-col md:flex-row md:justify-start gap-5 bg-gray-300 my-5 p-2 rounded-md">
                <figure className='flex-1'><img className='w-full h-52 md:h-full' src={foodImg} alt={foodName} /></figure>
                <div className="flex-1 space-y-2">
                    <h2 className="card-title text-4xl my-3">{foodName}</h2>
                    <div className='flex gap-5 items-center'>
                        <img className='w-20 rounded-full' src={donorImage} alt="" />
                        <h1 className='text-xl font-bold'>{donorName}</h1>
                    </div>
                    <p className='text-lg font-medium'>Quantity: {foodQuantity} person</p>
                    <p className='text-lg font-medium'>Expire in: {expDate} days</p>
                    <p className='text-lg font-medium'>Pickup Point: {pickupPoint}</p>
                    <p className='text-lg font-medium'>Details: {foodDesp}</p>
                    <button onClick={()=> goto(`/food/${_id}`) } className="bg-teal-700 px-4 py-2 rounded-md text-white block mx-auto">View Details</button>
                </div>
            </div>
        </div>
    )
}
ItemCard.propTypes = {
    item: PropTypes.object,
}
export default ItemCard;
