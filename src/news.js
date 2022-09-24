import Rectangle from './images/rectangle.jpg';
// import Rectangle2 from './images/rectangle2.jpg';
// import Rectangle3 from './images/rectangle3.jpg';



function News() {
    return (
        <div className="bg-pink-100 h-[145vh] w-full">
            <h1 className="font-serif text-6xl text-gray-700 ml-11 pt-28 font-medium">Latest News</h1>

            <button className="px-8 py-[0.90rem] bg-white shadow-xl rounded-3xl font-serif text-blue-900 mt-12 ml-11">ALL POSTS</button>
            <div className="flex ml-[30rem] mt-[-8rem]">
                <img src={Rectangle} alt="" className='h-[12rem] w-[16rem] rounded-md'/>

                  <div className='flex flex-col'>

                <div className='flex ml-9'>
                    <button className='bg-yellow-600 h-8 rounded-2xl w-28 text-white text-xs opacity-80'>DIRECTION</button>
                    <h2 className='font-serif pl-9 text-gray-600 text-2xl '>12th December 2021</h2>
                    </div>
                    <h1 className='text-3xl font-serif font-medium opacity-75 w-[30rem] ml-9 mt-7'>Taking seamless key performance indicators offline to maximise the long tail</h1>

   
                </div>
    
               
                
            </div>
<hr  className='w-[65%] ml-[35%] mt-6'/>
            <div className="flex ml-[30rem] mt-[2rem]">
                <img src={Rectangle} alt="" className='h-[12rem] w-[16rem] rounded-md'/>

                  <div className='flex flex-col'>

                <div className='flex ml-9'>
                    <button className='bg-yellow-600 h-8 rounded-2xl w-28 text-white text-xs opacity-80'>DIRECTION</button>
                    <h2 className='font-serif pl-9 text-gray-600 text-2xl '>12th December 2021</h2>
                    </div>
                    <h1 className='text-3xl font-serif font-medium opacity-75 w-[30rem] ml-9 mt-7'>Taking seamless key performance indicators offline to maximise the long tail</h1>

   
                </div>
    
               
                
            </div>

            <hr  className='w-[65%] ml-[35%] mt-6'/>



            <div className="flex ml-[30rem] mt-[2rem]">
                <img src={Rectangle} alt="" className='h-[12rem] w-[16rem] rounded-md'/>

                  <div className='flex flex-col'>

                <div className='flex ml-9'>
                    <button className='bg-yellow-600 h-8 rounded-2xl w-28 text-white text-xs opacity-80'>DIRECTION</button>
                    <h2 className='font-serif pl-9 text-gray-600 text-2xl '>12th December 2021</h2>
                    </div>
                    <h1 className='text-3xl font-serif font-medium opacity-75 w-[30rem] ml-9 mt-7'>Taking seamless key performance indicators offline to maximise the long tail</h1>

   
                </div>
    
               
                
            </div>
<hr  className='w-[65%] ml-[35%] mt-6'/>

        </div>

    )
    
}

export default News