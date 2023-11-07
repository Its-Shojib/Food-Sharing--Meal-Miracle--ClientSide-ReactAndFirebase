import { useLoaderData } from "react-router-dom";
import ManageSingleRow from "./ManageSingleRow";


const ManageSingle = () => {
    let reqData = useLoaderData();
    console.log(reqData);
    return (
        <div>
            <h2 className="text-center font-bold mt-5 text-3xl md:text-4xl"><span className="text-rose-800">Requested</span> User</h2>
            
            <div className="overflow-x-auto mt-5">
                <table className="table bg-[#527790] text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-lg font-bold text-black">
                            <th>Requester</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Requested Date</th>
                            <th>Food Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reqData?.map(item => <ManageSingleRow
                                key={item._id}
                                item={item}
                            ></ManageSingleRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default ManageSingle;