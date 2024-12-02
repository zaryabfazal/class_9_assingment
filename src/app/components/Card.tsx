import React from 'react'

const Cards = () =>{
    return(
        <div className='flex justify-center item-center min-h-screen bg-gray--100'>
            <div className= "flex flex-col gap-6 p-6 bg-white border border-gray-300 rounded-lg shadow-lg">
          <div className='flex gap-14'>
            <img 
            src='/pic1.jpg'
            width={600}
            height={600}
            alt = "pic1.jpg"
            className="w-100 h-64 object-cover rounded-md"
            />
            <img
            src="./pic2.jpg"
            width={600}
            height={600}
            alt ="pic2.jpg"
            className="w-100 h-64 object-cover rounded-md"
            />
            </div>
            <div className='flex gap-6'>
            <img
            src='./pic3.jpg'
            width={500}
            height={500}
            alt="pic3.jpg"
            className="flex-1 h-64 object-cover rounded-md shadow-md"
            />
          
      
            <img
            src="./pic4.jpg"
            width={500}
            height={500}
            alt='pic4.jpg'
            className='flex-1 h-64 object-cover rounded-md shadow-md'
            />
            <img
            src='./pic5.jpg'
            height={500}
            width={500}
            alt='pic5.jpg'
            className='flex-1 h-64 object-cover rounded-md shadow-md'
/>
          </div>
          </div>
        </div>
    )
}

export default Cards