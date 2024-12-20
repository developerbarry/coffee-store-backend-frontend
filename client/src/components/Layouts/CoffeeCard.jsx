import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, coffeName, chef, price, photoURL } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`https://server-liard-beta.vercel.app/coffees/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }

                        const exist = coffees.filter(cof => cof._id !== _id);
                        setCoffees(exist)
                    })


            }
        });
    }
    return (
        <>
            <div className="grid grid-cols-10 justify-between item-center rounded-lg bg-[#F5F4F1] px-9 py-6">
                <div className="flex col-span-4 item-center">
                    <img className="w-[100%]" src={photoURL} alt="" />
                </div>
                <div className="flex flex-col col-span-5 justify-center item-center">
                    <p className="font-raleway text-[#5C5B5B] font-normal text-base"><span className="font-semibold text-[#1B1A1A] text-lg">Name: </span> {coffeName}</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal my-1.5 text-base"><span className="font-semibold text-[#1B1A1A] text-lg">Chef: </span> {chef}</p>
                    <p className="font-raleway text-[#5C5B5B] font-normal text-base"><span className="font-semibold text-[#1B1A1A] text-lg">Price: </span> {price} USD</p>
                </div>
                <div className="flex flex-col justify-center item-center space-y-4">
                    <Link className="flex justify-center bg-[#D2B48C] px-1 py-2.5 rounded"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M480-320q75 0 127.5-52.5T660-500q0-75-52.5-127.5T480-680q-75 0-127.5 52.5T300-500q0 75 52.5 127.5T480-320Zm0-72q-45 0-76.5-31.5T372-500q0-45 31.5-76.5T480-608q45 0 76.5 31.5T588-500q0 45-31.5 76.5T480-392Zm0 192q-146 0-266-81.5T40-500q54-137 174-218.5T480-800q146 0 266 81.5T920-500q-54 137-174 218.5T480-200Zm0-300Zm0 220q113 0 207.5-59.5T832-500q-50-101-144.5-160.5T480-720q-113 0-207.5 59.5T128-500q50 101 144.5 160.5T480-280Z" /></svg></Link>
                    <Link to={`/update-coffee/${_id}/edit`} className="flex justify-center bg-[#3C393B] px-1 py-2.5 rounded"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M200-200h57l391-391-57-57-391 391v57Zm-80 80v-170l528-527q12-11 26.5-17t30.5-6q16 0 31 6t26 18l55 56q12 11 17.5 26t5.5 30q0 16-5.5 30.5T817-647L290-120H120Zm640-584-56-56 56 56Zm-141 85-28-29 57 57-29-28Z" /></svg></Link>
                    <button
                        onClick={() => handleDelete(_id)}
                        className="flex justify-center bg-[#EA4744] px-1 py-2.5 rounded"><svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" /></svg></button>
                </div>
            </div>




        </>
    );
};

CoffeeCard.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.array,
    setCoffees: PropTypes.func
}

export default CoffeeCard;