import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Error from "../Pages/ErrorPage/Error";
import Home from "../Pages/Home/Home";
import AddFood from "../Pages/Add-Food/AddFood";
import AvailableFood from "../Pages/Available-Food/AvailableFood";
import ManageMyFood from "../Pages/Manage-Food/ManageMyFood";
import MyFoodReq from "../Pages/Food-Request/MyFoodReq";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import ViewDetails from "../Pages/ViewDetails/ViewDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>
            },
            {
                path: '/available-food',
                element: <AvailableFood></AvailableFood>,
                loader: ()=> fetch('http://localhost:5000/available-food/productCount')
            },
            {
                path: '/add-food',
                element: <PrivateRoutes><AddFood></AddFood></PrivateRoutes>
            },
            {
                path: '/manage-my-food',
                element: <PrivateRoutes><ManageMyFood></ManageMyFood></PrivateRoutes>
            },
            {
                path: '/my-food-request',
                element: <PrivateRoutes><MyFoodReq></MyFoodReq></PrivateRoutes>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/food/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader:({params})=> fetch(`http://localhost:5000/food/${params.id}`)
            }
        ]
    },
]);
export default router;