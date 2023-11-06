
import heart from '../assets/Impact/win.png'
import community from '../assets/Impact/community.jpg'
import donate from '../assets/Impact/donate.jpg'
import endless_food from '../assets/Impact/infinity.jpg'
import school from '../assets/Impact/school.jpg'
import waste from '../assets/Impact/waste.png'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const OurImpact = () => {
    return (
        <div className='my-10'>
            <h1 className='text-center text-3xl md:text-5xl font-bold mb-5'>Our <span className='text-rose-800'>Works</span> Impact</h1>
            <div className=' bg-gradient-to-r from-[#688ea8] to-[#2d5169] rounded-lg'>
            <div className='w-10/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:p-10'>
                {/* Card-1 */}
                <div data-aos="fade-up" data-aos-duration="1000" className="card bg-[#688ea8] ">
                    <figure className=" w-8/12 mx-auto h-60 md:h-52 ">
                        <img src={community} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center ">Strong Community!</h2>
                    <p className='p-2 text-white'>Through Meal Miracle, individuals experience a heartwarming sense of community. People from all walks of life come together to share meals and foster connections.</p>
                </div>
                {/* Card-2 */}
                <div data-aos="fade-up" data-aos-duration="1000" className="card bg-[#688ea8]">
                    <figure className="  w-8/12 mx-auto h-60 md:h-52  ">
                        <img src={school} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center">Feeds School!</h2>
                    <p className='p-2 text-white'>Within the school setting, Meal Miracle has become a transformative tool. It simplifies the process of donating surplus food, ensuring that students do not go hungry.</p>
                </div>
                {/* Card-3 */}
                <div data-aos="fade-up" data-aos-duration="1000" className="card bg-[#688ea8]">
                    <figure className="  w-8/12 mx-auto h-60 md:h-52  ">
                        <img src={waste} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center ">No Waste!</h2>
                    <p className='p-2 text-white'>By sharing extra meals with others who can enjoy them, they actively contribute to the noble cause of minimizing food wastage and promoting sustainability.</p>
                </div>
                {/* Card-4 */}
                <div data-aos="fade-down" data-aos-duration="1000" className="card bg-[#688ea8]">
                    <figure className="  w-8/12 mx-auto h-60 md:h-52  ">
                        <img src={endless_food} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center ">Endless availability!</h2>
                    <p className='p-2 text-white'>This innovative app ensures that there is always a bountiful array of delicious food to choose from, making every dining experience feel like an exciting culinary adventure.</p>
                </div>
                {/* Card-5 */}
                <div data-aos="fade-down" data-aos-duration="1000" className="card bg-[#688ea8]">
                    <figure className="  w-8/12 mx-auto h-60 md:h-52   ">
                        <img src={donate} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center ">Help People!</h2>
                    <p className='p-2 text-white'>It is a simple way to make a significant impact on the less fortunate members of the community, sharing nourishment and kindness with those who need it most.</p>
                </div>
                {/* Card-6 */}
                <div data-aos="fade-down" data-aos-duration="1000" className="card bg-[#688ea8]">
                    <figure className="  w-8/12 mx-auto h-60 md:h-52  ">
                        <img src={heart} alt="Shoes" className="rounded-full" />
                    </figure>
                    <h2 className="font-bold text-2xl text-center ">Heartwarming!</h2>
                    <p className='p-2 text-white'>The act of sharing a meal and the resulting gratitude have a profound, heartwarming impact on all participants. It is a testament to the app is ability to create meaningful connections.
                    </p>
                </div>
            </div>
            </div>
        </div>
    )
}
export default OurImpact;