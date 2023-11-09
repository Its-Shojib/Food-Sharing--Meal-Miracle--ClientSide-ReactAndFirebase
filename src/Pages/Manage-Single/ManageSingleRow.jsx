import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const ManageSingleRow = ({ item }) => {
    let { id, requestedDate, requestedUserName, reqUserEmail, requestedUserImg, foodStatus } = item;

    let navigate = useNavigate()
    let handleConfirm = (id) => {
        let updateStatus = { foodStatus: 'Delivered' }
        fetch(`https://food-sharing-server-ashy.vercel.app/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Food Delivered Successfully',
                        icon: 'Success',
                        confirmButtonText: 'Cool'
                    })
                    navigate('/manage-my-food')
                }
            })
        fetch(`https://food-sharing-server-ashy.vercel.app/updateReqStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(() => {
            })
    }
    return (
        <tr>
            <th>
                <img className="md:w-28 md:h-28 rounded-full" src={requestedUserImg} alt="" />
            </th>
            <th className="text-lg font-bold">{requestedUserName}</th>
            <th>{reqUserEmail}</th>
            <th>{requestedDate}</th>
            <th><button onClick={() => handleConfirm(id)} className="bg-green-600 px-4 py-2 text-white rounded-md font-bold">{foodStatus == 'available' ? 'Deliver This =>' : 'Delivered'}</button></th>
        </tr>
    )
}
ManageSingleRow.propTypes = {
    item: PropTypes.object,
}
export default ManageSingleRow;