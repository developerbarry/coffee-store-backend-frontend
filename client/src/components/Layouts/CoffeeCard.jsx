import { Link } from "react-router-dom";

const CoffeeCard = () => {
    return (
        <>
            <div className="flex justify-between item-center rounded-lg bg-[#F5F4F1] px-9 py-6">
                <div className="flex justify-center item-center">
                    <img className="w-[80%]" src="https://i.ibb.co.com/0nJkVx8/6.png" alt="" />
                </div>
                <div className="flex flex-col justify-center item-center">
                    <p className="font-raleway text-[#5C5B5B] font-normal"><span className="font-semibold text-[#1B1A1A] text-lg">Name: </span> Americano Coffee</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal my-1.5"><span className="font-semibold text-[#1B1A1A] text-lg">Chef: </span> Mr. Matin Paul</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal"><span className="font-semibold text-[#1B1A1A] text-lg">Price: </span> $20 USD</p>
                </div>
                <div className="flex flex-col justify-center item-center space-y-4">
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></Link>
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></Link>
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></Link>
                </div>
            </div>



            {/* ;;;;;;;;;;;;;; */}

            <div className="flex justify-between item-center rounded-lg bg-[#F5F4F1] px-9 py-6">
                <div className="flex justify-center item-center">
                    <img className="w-[80%]" src="https://i.ibb.co.com/0nJkVx8/6.png" alt="" />
                </div>
                <div className="flex flex-col justify-center item-center">
                    <p className="font-raleway text-[#5C5B5B] font-normal"><span className="font-semibold text-[#1B1A1A] text-lg">Name: </span> Americano Coffee</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal my-1.5"><span className="font-semibold text-[#1B1A1A] text-lg">Chef: </span> Mr. Matin Paul</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal"><span className="font-semibold text-[#1B1A1A] text-lg">Price: </span> $20 USD</p>
                </div>
                <div className="flex flex-col justify-center item-center space-y-4">
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></Link>
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></Link>
                    <Link><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></Link>
                </div>
            </div>

        </>
    );
};

export default CoffeeCard;