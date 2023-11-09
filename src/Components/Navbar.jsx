import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from './../AuthProvider/AuthProvider';


const Navbar = () => {
    let { user, Logout } = useContext(AuthContext)

    let links = <>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/available-food'>Available Food</NavLink></li>
        <li><NavLink to='/add-food'>Add Food</NavLink></li>
        <li><NavLink to='/manage-my-food'>Manage My Food</NavLink></li>
        <li><NavLink to='/my-food-request'>My Food Request</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-[#314b5c]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <div className="flex justify-center items-center gap-2">
                        <Link><img className="w-16 h-16" src="/log.png" alt="" /></Link>
                        <h2 className="text-white text-xl md:text-3xl font-bold">Meal Miracle</h2>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end text-white">
                    {
                        user && <>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-500 rounded-box w-28">
                                    <li>{user.displayName}</li>
                                </ul>
                            </div>
                        </>
                    }
                    {
                        user ? <button onClick={() => Logout().then().catch( ()=> {})} className="bg-red-600 px-4 py-2 rounded-md font-semibold">Log Out</button> : <button className=" bg-green-600 px-4 py-2 rounded-md font-semibold"><NavLink to='/login'>Login</NavLink></button>
                    }

                </div>
            </div>
        </div>
    )
}
export default Navbar;