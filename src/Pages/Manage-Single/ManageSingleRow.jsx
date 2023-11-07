import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageSingleRow = ({ item }) => {
    let {id, requestedDate, requestedUserName, reqUserEmail, requestedUserImg, foodStatus } = item;

    let navigate = useNavigate()
    let handleConfirm =(id)=>{
        let updateStatus = { foodStatus: 'Delivered'}
        fetch(`http://localhost:5000/updateStatus/${id}`, {
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
        fetch(`http://localhost:5000/updateReqStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateStatus)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
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
            <th><button onClick={()=>handleConfirm(id)} className="btn">{foodStatus}</button></th>
        </tr>
    )
}
ManageSingleRow.propTypes = {
    item: PropTypes.object,
}
export default ManageSingleRow;