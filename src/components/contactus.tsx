import { MdLocationOn } from "react-icons/md";
import {HiOutlineMail} from "react-icons/hi"
import {TbPhone} from "react-icons/tb"
import Footer from "./footer";

export default function Contactus() {
  return (
    <>
      <div id="Contactus">
        <div className="w-full py-20 px-4 md:p-20 relative">
          <div className=" font-semibold text-3xl mt-8 mb-2">ContactUS</div>
          <div className="p-7 ">
            <div className="flex items-center">
              <MdLocationOn size={30} className="flex-shrink-0" />
              <p className="ml-4">
                A-104, Meghdoot Industrial Estate Bldg No.6, H.D.I.L. Industrial
                Park,
                <br /> Chandansar Road, Virar East 401303, District (Palghar),
                MUMBAI
              </p>
            </div>
            <div className="flex items-center mt-8">
              <HiOutlineMail size={30} />
              <p className="ml-4">alliancesubsea@gmail.com</p>  
            </div>
            <div className="flex items-center mt-8">
              <TbPhone size={30} />
              <p className="ml-4">
+91 9867044305</p>  
            </div>
            <div className="flex items-center mt-8">
              <TbPhone size={30} />
              <p className="ml-4">+91-8208943494</p>  
            </div>
          </div>
          <footer className=" text-sm bg-gray-800 text-white text-center py-4 absolute bottom-0 left-0 w-full">
        © {new Date().getFullYear()} Alliance Subsea Solution Pvt.Ltd. | Design & Developed by Alliance
      </footer>
        </div>
      </div>

    </>
  );
}
