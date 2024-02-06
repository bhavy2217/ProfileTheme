import React, {useState} from 'react'

export default function About(props) {
    const [color, setColor] = useState("Olive")

    return (
        <div className="py-16 bg-white"  style={{ backgroundColor: color }}>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                            accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                            aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                        </p>
                        <p className="mt-4 text-gray-600">
                            Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                            Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                        </p>
                    </div>
                </div>
            </div>
            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
                <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button onClick={() => setColor("Red")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "red" }}>Red</button>
                    <button onClick={() => setColor("Green")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Green" }}>Green</button>
                    <button onClick={() => setColor("Blue")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Blue" }}>Blue</button>
                    <button onClick={() => setColor("Purple")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Purple" }}>Purple</button>
                    <button onClick={() => setColor("pink")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Pink" }}>Pink</button>
                    <button onClick={() => setColor("Black")} className="p-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "black" }}>Black</button>
                </div>
            </div>
        </div>
    );
}
