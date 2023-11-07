import PropTypes from 'prop-types';

const RequestedRow = ({ reqFood, handleDelete }) => {
    let { _id, pickupPoint, donorName, donatePrice, foodStatus,
        requestedDate, expDate } = reqFood;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <th>
                {donorName}
            </th>
            <td>
                {pickupPoint}
            </td>
            <td>{expDate} days</td>
            <td>{requestedDate}</td>
            <td>{donatePrice} Tk.</td>
            <td>{foodStatus}</td>

            <th>
                {/* {
                status ==='confirm' ? <span className='font-bold text-red-600'>Confirmed</span> :<button onClick={()=>handleConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
            } */}
            </th>
        </tr>
    )
}
RequestedRow.propTypes = {
    reqFood: PropTypes.node,
    handleDelete: PropTypes.func,
}
export default RequestedRow;