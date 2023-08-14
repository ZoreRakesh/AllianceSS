import Image from "next/image";


export default function Home() {
    return (
        <>

        <div id="Home" className="">
            <div className="w-full p-20">
            <div className=" text-center font-bold text-4xl leading-[50px] my-10 lg:hidden">WE PROVIDES UNDER WATER DIVING SERVICES.</div>
                <div className="hidden lg:block font-bold text-6xl leading-[80px] mt-10 mb-10 md:mb-16">WE PROVIDES UNDER WATER<br/>  DIVING SERVICES.</div>
              <div className="flex flex-col-reverse md:flex-row justify-between items-center">
                <div className="text-center text-gray-500 pt-10 md:pt-0 lg:pt-0 md:pr-20 md:text-sm lg:text-base">Alliance Subsea Solution Pvt Ltd is an ISO 9001, ISO14001, and ISO 45001 certified company in Mumbai, India that provides 24-hour specialized underwater diving services and is an exciting startup specializing in underwater exploration and services. Established with a passion for the ocean, our company aims to provide operation, construction, Repair & Maintainance, and Inspection solutions in the field of subsea operations, combining advanced technology, expertise, and a commitment to safety and sustainability.</div>
              <Image src="/Divers.jpg" alt="alternatetext" className=" h-[200px] w-[350px] md:h-[200px] rounded-lg animate-pulse lg:h-[270px] md:w-[800px]" width={800} height={200}></Image>

              </div>


            </div>
        </div>
        </>
    )
  }
