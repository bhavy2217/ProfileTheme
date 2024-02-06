import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    const [color, setColor] = useState("Olive")
    
    // // ----
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/codewithharry')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data)
    //             setData(data)    
    //         })
    // }, [])
    // ------isko hm alag fle me or ala se kar sakte he
    return (
        <>
            <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl" style={{ backgroundColor: color }}>
                Github Followers :  {data.followers}
                <img src={data.avatar_url} alt="Github Picture" width={300} />

                {/* follower name se key he uska data le sakte he  */}

                {/* Github follower lene ke liye api Call karni padegi */}
                {/* API call tab kar sakte he jab hamara component load ho  */}
                {/* uske liye useEffect use kar sakte he jab hamara component load hoga tab ham api call kar lenge */}
                {/* useEffect(() => {}, []) */}
            </div>

            <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
                <div className="flex flex-wrap  justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                    <button onClick={() => setColor("Red")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Red" }}>Red</button>
                    <button onClick={() => setColor("Green")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Green" }}>Green</button>
                    <button onClick={() => setColor("Blue")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Blue" }}>Blue</button>
                    <button onClick={() => setColor("Purple")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Purple" }}>Purple</button>
                    <button onClick={() => setColor("pink")} className=" px-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "Pink" }}>Pink</button>
                    <button onClick={() => setColor("Black")} className="p-4 rounded-lg py-1 rounded-full text-white shadow-xl border border-gray-500" style={{ backgroundColor: "black" }}>Black</button>
                </div>
            </div>            
        </>
    )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch('http://api.github.com/users/codewithharry')
    return response.json()
}
