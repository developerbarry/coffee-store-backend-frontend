
const AddCoffee = () => {
    return (
        <section>
            <div className="md:px-72 sm:px-10">
                <div>
                    <div>
                        <h2>Back</h2>
                    </div>
                    <div className="bg-[#F4F3F0] h-screen">
                        <div>
                            <h1 className="font-rancho text-[#374151] font-normal text-5xl">Add New Coffee</h1>
                            <p className="font-raleway font-normal text-lg text-[#1B1A1AB3]">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="m-10">

                            <div className="p-6 space-y-6">
                                <form>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="coffee-name" className="text-sm font-medium font-rancho font-semibold text-xl text-[#1B1A1ACC] block mb-2">Name</label>
                                            <input type="text" name="coffee-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5 font-raleway" placeholder="Enter coffee name" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="chef" className="text-sm font-medium font-rancho font-semibold text-xl text-[#1B1A1ACC] block mb-2">Chef</label>
                                            <input type="text" name="chef" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block font-raleway w-full p-2.5" placeholder="Enter coffee chef" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="supplier" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Supplier</label>
                                            <input type="text" name="supplier" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter coffee supplier" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="taste" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Taste</label>
                                            <input type="text" name="taste" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter coffee test" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="category" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Category</label>
                                            <input type="text" name="category" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter coffee category" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="details" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Details</label>
                                            <input type="text" name="details" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter coffee details" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="photo" className="text-sm font-medium font-rancho text-xl font-semibold text-[#1B1A1ACC] block mb-2">Photo</label>
                                            <input type="text" name="photo" className="shadow-sm bg-gray-50 border border-gray-300 font-raleway text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Enter photo URL" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                           
                                            <input type="submit" value='Add Coffee' className="shadow-sm bg-[#D2B48C] border border-gray-300 text-4xl font-rancho text-[#331A15] sm:text-sm rounded-lg font-normal focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddCoffee;