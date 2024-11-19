
const SignUp = () => {

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, email, password)
    }

    return (
        <section className="bg-gray-100 flex min-h-[calc(100vh-105px)] md:py-10 items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
                <div className="bg-white shadow-md rounded-md p-6">

                    <img className="mx-auto h-12 w-auto" src="https://www.svgrepo.com/show/499664/user-happy.svg" alt="" />

                    <h2 className="my-3 text-center text-3xl font-bold tracking-tight text-[#374151]">
                        Sign up for an account
                    </h2>


                    <form
                        onSubmit={handleSignUp}
                        className="space-y-6">

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-rancho text-xl">Name</label>
                            <div className="mt-1">
                                <input name="name" type="text" autoComplete="email-address" required
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-rancho text-xl">Email</label>
                            <div className="mt-1">
                                <input name="email" type="email" autoComplete="email-address" required
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-rancho text-xl">Password</label>
                            <div className="mt-1">
                                <input name="password" type="password" autoComplete="password" required
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-rancho text-xl">Confirm Password</label>
                            <div className="mt-1">
                                <input name="confirm_password" type="password" autoComplete="confirm-password" required
                                    className="px-2 py-3 mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm" />
                            </div>
                        </div>

                        <div>
                            <button type="submit"
                                className="flex w-full justify-center rounded-md border border-transparent font-rancho text-[#331A15] bg-[#E3B577] py-2 px-4 text-xl font-medium shadow-sm hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2">Register
                                Account
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default SignUp;