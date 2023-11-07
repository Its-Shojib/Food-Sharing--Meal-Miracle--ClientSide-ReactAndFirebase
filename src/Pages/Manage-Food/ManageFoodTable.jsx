import { GrUpdate } from 'react-icons/gr';
import PropTypes from 'prop-types';

const ManageFoodTable = ({ item, myFood }) => {
    let { _id, foodImg, foodName,
        expDate,foodStatus} = item;

    let handleDelete = (_id) => {
        console.log(_id);
    }
    let handleUpdate = (_id) =>{
        console.log(_id);
    }
    return (
        <tr>
            <th>
                <img className="md:w-36 md:h-36 rounded-full" src={foodImg} alt="" />
            </th>
            <th className="text-lg font-bold">{foodName}</th>
            <th>{expDate} days</th>
            <th>{foodStatus}</th>
            <th>
                <button className="btn btn-ghost" onClick={() => handleUpdate(_id)}>
                    <GrUpdate  className='text-2xl'></GrUpdate>
                </button>
            </th>
            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
            </th>
            <th><button className="btn">Manage Food</button></th>
        </tr>
    )
}
ManageFoodTable.propTypes = {
    item: PropTypes.object,
    myFood: PropTypes.array,
}
export default ManageFoodTable;