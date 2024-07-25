import React from 'react'

const TopButtons = ({setQuery}) => {
    const cities=[
        {
            id:1,
            name:'London'
        },
        {
            id:2,
            name:'Kolkata'
        },
        {
            id:3,
            name:'San Francisco'
        },
        {
            id:4,
            name:'Mumbai'
        },
        {
            id:5,
            name:'Delhi'
        }
    ]
  return (
    <div className='flex justify-around my-6'>
        {
            cities.map(city=>(
                <button key={city.id} className='text-xl font-medium hover:bg-blue-500 px-3 py-2 rounded-md transition ease-in' onClick={()=>setQuery({q:city.name})}>{city.name}</button>
            ))
        }
    </div>
  )
}

export default TopButtons
