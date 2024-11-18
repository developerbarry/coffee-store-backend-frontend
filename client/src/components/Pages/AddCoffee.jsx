import Swal from 'sweetalert2'

const AddCoffee = () => {

    const handleSubmitAddCoffee = event => {
        event.preventDefault()
        const form = event.target;
        const coffeName = form.coffeeName.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoURL = form.photo.value;
        const newCoffee = { coffeName, chef, supplier, taste, category, details, photoURL };
        console.log(newCoffee)

        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Successfully Added',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });
                    form.reset();
                }
            })

    }


    return (
        <section>
            <div className="md:px-56 sm:px-10">
                <div className="py-10">
                    <div className="flex gap-1 items-center mb-7">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="undefined"><path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" /></svg>
                        <p className="font-rancho font-normal text-2xl"><span>Back to home</span></p>
                    </div>
                    <div className="bg-[#F4F3F0] p-10">
                        <div className="text-center">
                            <h1 className="font-rancho text-[#374151] font-normal text-5xl mb-5">Add New Coffee</h1>
                            <p className="font-raleway font-normal text-lg text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="p-6 space-y-6 mt-4">
                            <form onSubmit={handleSubmitAddCoffee}>
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="coffee-name" className="text-sm font-medium font-rancho font-semibold text-xl text-[#1B1A1ACC] block mb-2">Name</label>
                                        <input type="text" name="coffeeName" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5 font-raleway" placeholder="Enter coffee name" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="chef" className="text-sm font-medium font-rancho font-semibold text-xl text-[#1B1A1ACC] block mb-2">Chef</label>
                                        <input type="text" name="chef" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block font-raleway w-full p-2.5" placeholder="Enter coffee chef" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="supplier" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Supplier</label>
                                        <input type="text" name="supplier" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" placeholder="Enter coffee supplier" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="taste" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Taste</label>
                                        <input type="text" name="taste" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" placeholder="Enter coffee test" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="category" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Category</label>
                                        <input type="text" name="category" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" placeholder="Enter coffee category" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-3">
                                        <label htmlFor="details" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Details</label>
                                        <input type="text" name="details" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" placeholder="Enter coffee details" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">
                                        <label htmlFor="photo" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Photo</label>
                                        <input type="text" name="photo" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" placeholder="Enter photo URL" required="" />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6">

                                        <input type="submit" value='Add Coffee' className="shadow-sm bg-[#D2B48C] border border-[#331A15] text-lg font-rancho text-[#331A15] sm:text-2xl rounded font-normal cursor-pointer focus:ring-cyan-600 focus:border-[#1B1A1ACC] block w-full p-2.5" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCoffee;