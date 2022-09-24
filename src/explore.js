import explore from "./images/Rectangle-12.jpg";

function Explore() {
  return (
    <div className="bg-pink-100 h-[100vh] w-full">
      <div className="flex pt-14">
        <div>
          <img
            src={explore}
            alt=""
            className="w-[38rem] h-[30rem] ml-11 rounded-lg"
          />
        </div>
        <div className="flex flex-col pl-[3rem] w-[41rem] pt-11">
          <h1 className="text-5xl font-serif font-medium leading-[3.5rem] text-blue-900">
            Explore South’s School Programs
          </h1>
          <p className='text-lg font-serif pt-6 text-gray-600'>
            Podcasting operational change management inside of workflows to
            establish a framework. Taking seamless key performance indicators
            offline to maximise the long tail.
          </p>
          <div className='flex'>
            <div className='flex-col mt-14'>
              <h1 className='text-6xl font-serif text-yellow-800 font-semibold opacity-70'>4,000+</h1>
              <h3 className='text-2xl font-serif pt-2'>Active Users</h3>

            </div>

            <div className='flex-col mt-14 ml-28'>
              <h1 className='text-6xl font-serif text-yellow-800 font-semibold opacity-70'>750</h1>
              <h3 className='text-2xl font-serif pt-2'>Online Courses</h3>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
export default Explore;
