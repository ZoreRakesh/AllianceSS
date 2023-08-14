import Image from "next/image";


export default function Services() {
    return (
        <>
        <div id="Services">
            <div className="w-full py-20 px-4 md:p-20">
                <div className=" font-semibold text-3xl mt-6 mb-10 text-center ">Our Services</div>
                <div className="flex flex-col md:flex-row justify-evenly items-center mt-4 md:mt-6">
                    <div className="hidden lg:block lg:w-10"></div>
                <div className="relative cursor-pointer transition-transform transform hover:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg hover:opacity-10"></div>
                <Image src="/MSI-Offshore-Rig.jpg" alt="alternatetext" className="z-20 h-[240px] rounded-lg cursor-pointer md:h-[250px] md:w-[280px] lg:h-[350px] " width={300} height={200}></Image>
                <p className="text-2xl font-semibold absolute bottom-4 left-2 text-white">Offshore Service</p>
                </div>
                <div className="mt-10 md:mt-0 relative cursor-pointer  transition-transform transform hover:-translate-y-4">
                <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg hover:opacity-10"></div>
                <Image src="/MSI-Inshore.jpg" alt="alternatetext" className="z-20 h-[240px] rounded-lg md:h-[250px] md:w-[280px]  lg:h-[350px]" width={300} height={200}></Image>
                <p className="text-2xl font-semibold absolute bottom-4 left-2 text-white ">Inshore Service</p>
                </div>
                <div className="hidden lg:block lg:w-10"></div>


                </div>

            </div>
        </div>
        </>
    )
  }