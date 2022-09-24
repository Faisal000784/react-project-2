
import Head from './images/header.jpg'


function Header () {
    return (
       <div className='header bg-cyan-600 h-[100vh]'>

        <div className='pt-60 text-white ml-9' >
            <h2 className='text-2xl w-[25rem] font-serif'>Start Your Journey Today!</h2>
            <h1 className='text-[4rem] w-[40rem] z-50 font-serif mt-4 leading-[4rem]'>Inspire. Educate. Become Great.</h1>
            <button className='bg-yellow-600 opacity-75 px-8 py-3 rounded-3xl mt-6 hover:bg-gray-500'>VISIT SCHOOL</button>
        </div>
        <div className=''>
            <img src={Head} alt="" className='h-[32rem] w-[48rem] rounded-lg ml-[33.5rem] mt-[-19rem] -z-50 '/>

        </div>
       </div>
    )
}

export default Header