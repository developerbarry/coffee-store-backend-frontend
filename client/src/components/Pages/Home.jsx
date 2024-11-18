import CoffeeCard from "../Layouts/CoffeeCard";

const Home = () => {
    return (
        <>
            <section>
                <div className="px-4 py-2 sm:px-10">
                    <h1>this is home</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus, animi aliquam magni consequuntur impedit cupiditate dolore et assumenda, blanditiis nam doloremque magnam repellat dolorum placeat aut deserunt iure dicta! Distinctio explicabo neque temporibus soluta dolores, aperiam ad vitae optio atque illum voluptates, fugit veritatis, quae dolorum. Dolorum eaque accusamus ipsum aut earum facere vel iste provident alias voluptas velit iure sapiente quasi expedita, dolorem neque officia maiores accusantium magnam. Soluta qui fuga nihil nemo impedit possimus dolorum distinctio! Consectetur ipsum quia quae enim itaque, iure illum fuga animi, et in corrupti dolorum consequuntur! Ipsum, error assumenda! Repellat ullam beatae voluptates.</p>
                </div>
            </section>
            <section>
                <div className="px-4 py-2 sm:px-36">
                <div className="grid grid-cols-2 gap-5">
                    <CoffeeCard />
                </div>
                </div>
            </section>
        </>
    );
};

export default Home;