import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const usersData = useLoaderData();
    const [users, setUsers] = useState(usersData)

    let count = 0;

    const handleDeleteUser = (id) => {
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

                fetch(`http://localhost:5000/users/${id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        const exsit = users.filter(user => user._id !== id);
                        setUsers(exsit)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }


    return (
        <section>
            <div className="px-4 py-2 sm:px-10">
                <div>
                    <h1>Total User: {usersData.length}</h1>
                    <div className="flex flex-col">
                        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="overflow-hidden">
                                    <table className="min-w-full">
                                        <thead className="border-b">
                                            <tr>
                                                <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 text-left">#</th>
                                                <th scope="col" className="text-sm font-medium text-gray-900 px-6 font-rancho py-4 text-left">Email</th>
                                                <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 font-rancho text-left">CreatedAt</th>
                                                <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 font-rancho text-left">LastLoginAt</th>
                                                <th scope="col" className="text-xl font-medium text-gray-900 px-6 py-4 font-rancho text-left">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                users.map(userData => (
                                                    <tr key={userData._id} className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{count += 1}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{userData.email}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{userData.metaData.createdAt}</td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">{userData.metaData.lastLoginAt}</td>
                                                        <td><button onClick={() => handleDeleteUser(userData._id)} className="bg-red-500 px-4 py-2 text-white">Remove</button></td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Users;