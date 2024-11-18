
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
                            <h1 className="font-rancho">Add New Coffee</h1>
                            <p>It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                        </div>
                        <div className="m-10">

                            <div className="p-6 space-y-6">
                                <form>
                                    <div className="grid grid-cols-6 gap-6">
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="product-name" className="text-sm font-medium text-gray-900 block mb-2">Product Name</label>
                                            <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple Imac 27”" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="category" className="text-sm font-medium text-gray-900 block mb-2">Category</label>
                                            <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Electronics" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                                            <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                            <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="brand" className="text-sm font-medium text-gray-900 block mb-2">Brand</label>
                                            <input type="text" name="brand" id="brand" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Apple" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-3">
                                            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                            <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                            <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
                                        </div>
                                        <div className="col-span-6 sm:col-span-6">
                                            <label htmlFor="price" className="text-sm font-medium text-gray-900 block mb-2">Price</label>
                                            <input type="submit" value='Add Coffee' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="$2300" required="" />
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