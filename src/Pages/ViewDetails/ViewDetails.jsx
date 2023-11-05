import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
    let item = useLoaderData();
    let {donorName } = item;
    // _id, foodName, foodQuantity, pickupPoint, expDate, foodImg, foodDesp, , donorImage
    return (
        <div>
            <p> Hello, I am {donorName}</p>
        </div>
    )
}
export default ViewDetails;