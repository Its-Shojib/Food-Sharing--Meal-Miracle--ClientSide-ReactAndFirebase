import img from './../../src/assets/banner.jpg'

const Banner = () => {
    return (
        <div className='relative h-[450px]'>
            <img className='w-full h-full' src={img} alt="" />
            <div className="absolute flex md:items-center h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] left-0 top-0">
                        <div className="space-y-5 w-full md:w-8/12 px-5 md:pl-20 text-white">
                            <h1 className="text-4xl md:text-6xl font-bold w-full md:w-8/12">Donate your Bonemeal, save People.</h1>
                            <p className="w-10/12">Donating bone meal to poor people can help them to save their life. This can lead to better nutrition and health for their families and communities.</p>
                            <div className="flex gap-5">
                                <button className="btn btn-outline bg-[#FF3811] text-white">Donate Food</button>
                                <button className="btn btn-outline text-white">Discover More</button>
                            </div>
                        </div>
                    </div>
        </div>
    )
}
export default Banner;