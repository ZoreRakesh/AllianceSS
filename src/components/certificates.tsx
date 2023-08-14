
const images = [
    '/certi1.jpg',
    '/certi2.jpg',
    '/certi3.jpg',

    // Add more image paths
  ];

export default function Certificates() {
    return (
        <>
        <div id="Certificates">
            <div className="w-full  md:h-screen p-20">
                
            <div className=" font-semibold text-3xl my-8 text-center">Certificates</div>
            <div className='flex  mt-8 justify-center'>
        
      
        <div className="flex flex-col md:flex-row" >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Image ${index + 1}`}
              className="inline-block h-80 lg:h-96 md:h-[300px] max-w-xs m-4  shadow-md"
            />
          ))}
        </div>
          
       
      
      </div>
           
            
            </div>
        </div>
        </>
    )
  }