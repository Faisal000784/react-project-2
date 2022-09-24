import logo from './images/logo.png'


function Nav () {
    return (
        <nav className='nav w-full bg-white shadow-md h-20 flex justify-between px-11 items-center fixed z-40'>
            <div>
            <img src={logo} alt="" className='h-12 w-30' />

            </div>
            <div className='flex text-xl justify-evenly w-[50%]'>
            <h2>ADDMISSIONS</h2>
            <h2>TEACHERS</h2>
            <h2>ABOUT</h2>
            <h2>NEWS</h2>
            <h2>CONTACT</h2>

            </div>
            



        </nav>

    )
}

export default Nav