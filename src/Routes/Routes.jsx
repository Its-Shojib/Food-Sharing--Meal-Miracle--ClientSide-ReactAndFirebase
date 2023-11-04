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
                element: <AvailableFood></AvailableFood>
            },
            {
                path: '/add-food',
                element: <AddFood></AddFood>
            },
            {
                path: '/manage-my-food',
                element: <ManageMyFood></ManageMyFood>
            },
            {
                path: '/my-food-request',
                element: <MyFoodReq></MyFoodReq>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            }
        ]
    },
]);
export default router;