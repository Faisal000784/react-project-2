import person from "./images/Group-4.jpg";

function Person() {
  return (
    <div className="bg-pink-100 h-[92vh] w-full">
      <div className="flex bg-white shadow-xl h-[30rem] w-[94%] ml-[3%] rounded-lg">
        <img
          src={person}
          alt=""
          className="h-[22rem] w-[22rem] rounded-full mt-16 ml-16"
        />

        <div className="flex flex-col w-[40rem] ml-[5rem] mt-16">
          <h2 className='text-yellow-700 font-serif text-xl opacity-80'>Director of the School</h2>
          <h1 className=' font-serif text-6xl text-gray-600 mt-4'>Michael Clark</h1>

          <div className='flex mt-8 leading-[3rem]'>
          <i class="fas fa-solid fa-quote-left text-4xl "></i>


         
          <p className='w-[35rem] text-2xl font-serif pl-5 pt-2 text-gray-500 leading-[2.6rem]'>
            At the end of the day, going forward, a new normal that has evolved
            from generation X is on the runway heading towards a streamlined
            cloud solution. User generated content in real-time will have
            multiple touchpoints for offshoring.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Person;
