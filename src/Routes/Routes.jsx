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
import UpdateMyFood from "../Pages/Update-Food/UpdateMyFood";
import ManageSingle from "../Pages/Manage-Single/ManageSingle";


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
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/food/:id',
                element: <PrivateRoutes><ViewDetails></ViewDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://food-sharing-server-ashy.vercel.app/food/${params.id}`, { credentials: 'include' })
            },
            {
                path: '/update/:id',
                element: <PrivateRoutes><UpdateMyFood></UpdateMyFood></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://food-sharing-server-ashy.vercel.app/update/${params.id}`, { credentials: "include" })
            },
            {
                path: '/manage/:id',
                element: <PrivateRoutes><ManageSingle></ManageSingle></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://food-sharing-server-ashy.vercel.app/manage/${params.id}`, { credentials: 'include' })
            },
        ]
    },
]);
export default router;