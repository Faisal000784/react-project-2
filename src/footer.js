import component from "./images/Component-3.png";
import logo from './images/footer.png'
import component2 from './images/Component-3-2.png';
import component3 from './images/Component-3-1.png';

function Footer() {
  return (
    <div className="bg-cyan-600 h-[183vh]">
      <h1 className="flex justify-center text-6xl font-serif pt-36 text-white">
        Feedback From Students
      </h1>

      <div className="flex mt-20 ml-11">
        <div className="flex flex-col bg-white shadow-xl rounded-lg h-[28.5rem] w-[25rem] ">
          <div className="flex mt-4">
            <img src={component3} alt="" className="h-20 w-20 rounded-full ml-9 mt-8" />
            <div className="flex flex-col font-serif ml-9 mt-12">
              <h2 className='text-xl'>Whitney Marshall</h2>
              <h3 className='text-sm text-yellow-700'>USA</h3>
            </div>
          </div>
          <p className='text-xl ml-9 mt-6 w-[83%] '>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
        </div>


        <div className="flex flex-col bg-white shadow-xl rounded-lg h-[28.5rem] w-[25rem] ml-7 ">
          <div className="flex mt-4">
            <img src={component2} alt="" className="h-20 w-20 rounded-full ml-9 mt-8" />
            <div className="flex flex-col font-serif ml-9 mt-12">
              <h2 className='text-xl'>Lorey Porter</h2>
              <h3 className='text-sm text-yellow-700'>SPAIN</h3>
            </div>
          </div>
          <p className='text-xl ml-9 mt-6 w-[83%] '>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
        </div>


        <div className="flex flex-col bg-white shadow-xl rounded-lg h-[28.5rem] w-[25rem] ml-7">
          <div className="flex mt-4">
            <img src={component} alt="" className="h-20 w-20 rounded-full ml-9 mt-8" />
            <div className="flex flex-col font-serif ml-9 mt-12">
              <h2 className='text-xl'>Michael Clark</h2>
              <h3 className='text-sm text-yellow-700'>UNITED KINGDOM</h3>
            </div>
          </div>
          <p className='text-xl ml-9 mt-6 w-[83%] '>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity to beta test. Override the digital divide with additional
            clickthroughs from DevOps. Nanotechnology immersion along the
            information highway will close the loop on focusing solely on the
            bottom line.
          </p>
        </div>
      </div>


      <nav className='nav w-full  h-20 flex justify-between px-11 items-center mt-[12rem]'>
            <div>
            <img src={logo} alt="" className='h-12 w-30' />

            </div>
            <div className='flex text-xl justify-evenly w-[50%] text-white opacity-75' >
            <h2>ADDMISSIONS</h2>
            <h2>TEACHERS</h2>
            <h2>ABOUT</h2>
            <h2>NEWS</h2>
            <h2>CONTACT</h2>

            </div>
            



        </nav>

        <hr  className='w-[92%] ml-11 mt-12'/>

        <div className='flex text-white justify-between px-14 text-xl mt-11'>
            <p >© Impreza Theme by UpSolution</p>
            <div className='pl-[-3rem]'>
            <i class="fa-brands fa-facebook-f pl-3"></i>
            <i class="fa-brands fa-twitter pl-6"></i>
            <i class="fa-brands fa-instagram pl-6"></i>
            <i class="fa-sharp fa-solid fa-envelope pl-6"></i>
            <i class="fa-solid fa-paper-plane pl-6"></i>
            </div>

        </div>
    </div>
  );
}

export default Footer;
