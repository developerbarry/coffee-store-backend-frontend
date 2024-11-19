import { useEffect, useState } from "react";
import CoffeeCard from "../Layouts/CoffeeCard";
import { Link } from "react-router-dom";

const Home = () => {

    const [coffees, setCoffees] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/coffees')
            .then(res => res.json())
            .then(data => setCoffees(data))
    }, [])


    return (
        <>
            <section>
                <div className="px-4 py-2 sm:px-10">
                    <h1>this is home</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, animi aliquam magni consequuntur impedit cupiditate dolore et assumenda, blanditiis nam doloremque magnam repellat dolorum placeat aut deserunt iure dicta! Distinctio explicabo neque temporibus soluta dolores, aperiam ad vitae optio atque illum voluptates, fugit veritatis, quae dolorum. Dolorum eaque accusamus ipsum aut earum facere vel iste provident alias voluptas velit iure sapiente quasi expedita, dolorem neque officia maiores accusantium magnam. Soluta qui fuga nihil nemo impedit possimus dolorum distinctio! Consectetur ipsum quia quae enim itaque, iure illum fuga animi, et in corrupti dolorum consequuntur! Ipsum, error assumenda! Repellat ullam beatae voluptates.</p>
                </div>
            </section>
            <section>
                <div className="px-4 py-10 sm:px-36">
                    <div>
                        <div className="text-center mb-8">
                            <div className="mb-3">
                                <span className="font-raleway text-lg font-normal text-[#1B1A1A]">--- Sip & Savor ---</span>
                                <h2 className="font-rancho font-normal text-5xl text-[#331A15]">Our Popular Products</h2>
                            </div>
                            <div className="flex justify-center">
                                <Link to={'/add-coffee'} className="bg-[#E3B577] flex gap-2 items-center text-[#FFFFFF] px-3 py-1.5 font-rancho text-xl font-normal rounded outline outline-[#331A15] ">Add Coffee
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M160-120v-80h640v80H160Zm160-160q-66 0-113-47t-47-113v-400h640q33 0 56.5 23.5T880-760v120q0 33-23.5 56.5T800-560h-80v120q0 66-47 113t-113 47H320Zm0-80h240q33 0 56.5-23.5T640-440v-320H240v320q0 33 23.5 56.5T320-360Zm400-280h80v-120h-80v120ZM320-360h-80 400-320Z" /></svg>
                                </Link>

                            </div>
                        </div>
                        <div className="grid gird-cols-1 md:grid-cols-2 gap-5">
                            {
                                coffees.map(coffee => <CoffeeCard
                                    key={coffee._id}
                                    coffees={coffees}
                                    setCoffees={setCoffees}
                                    coffee={coffee} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="px-4 py-10 sm:px-36">
                    <div className="text-center">
                        <div className="mb-6">
                            <span className="font-raleway text-lg font-normal text-[#1B1A1A]">Follow Us Now</span>
                            <h2 className="font-rancho font-normal text-5xl text-[#331A15]">Follow on Instagram</h2>
                        </div>
                        <div>
                            <div className="flex flex-wrap md:justify-between gap-y-8">
                                <img className=" w-full md:w-60 h-72" src="https://i.ibb.co.com/Y8g7nhj/Rectangle-9.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/LrgtYvm/Rectangle-10.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/HN4Cqt1/Rectangle-11.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/cLcG5Wq/Rectangle-12.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/KDPTKRb/Rectangle-13.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/CnkF2bv/Rectangle-14.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/Z8rH4s9/Rectangle-15.png" alt="" />
                                <img className="w-full md:w-60 h-72" src="https://i.ibb.co.com/brs8RNK/Rectangle-16.png" alt="" />
                               
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;