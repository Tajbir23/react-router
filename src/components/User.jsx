import { useLoaderData } from "react-router-dom"


const User = () => {
    
    const data = useLoaderData()
    console.log(data)
  return (
    <div className="flex items-center justify-center w-full">
      <div className="m-auto">
        <h1 className="text-4xl font-bold">Hello <span className="text-red-700">{data.name}</span></h1>
        <ul className="list-disc list-inside my-5">
          <h1 className=" text-2xl font-semibold">Address</h1>
            <li> {data.address.street}</li>
        </ul>
        <ul className="list-disc list-inside my-5">
              <h1 className=" text-2xl font-semibold">Geo</h1>
                  <li> {data.address.geo.lat}</li>
                  <li> {data.address.geo.lng}</li>
        </ul>
      </div>
    </div>
  )
}

export default User