function Career() {
  return (
    <div className="bg-pink-100 h-[100vh] w-full">
      <h1 className="flex justify-center pt-[9rem] text-6xl font-serif font-semibold text-gray-700">
        Career
      </h1>
      <div className="flex">
        <div className="flex flex-col w-[38rem] bg-white shadow-xl rounded-xl h-[20rem] ml-11 mt-10">
          <h1 className="text-3xl font-serif font-medium text-gray-600 pl-12 pt-16">Masters Degrees</h1>
          <p className=" pl-12 text-gray-600 pt-5 w-[35.6rem] text-lg font-serif ">
          Ranked among the best in the world, our Masters Degree programmes shape individuals into global business leaders.
          </p>
          <button className="py-3 bg-yellow-600 w-36 opacity-75 text-white shadow-lg rounded-3xl ml-12 mt-7">READ MORE</button>
        </div>

        <div className="flex flex-col w-[38rem] bg-white shadow-xl rounded-xl h-[20rem] ml-10 mt-10">
          <h1 className="text-3xl font-serif font-medium text-gray-600 pl-12 pt-16">Executive Education</h1>
          <p className=" pl-12 text-gray-600 pt-5 w-[35.6rem] text-lg font-serif ">
          Ranked among the best in the world, our Masters Degree programmes shape individuals into global business leaders.
          </p>
          <button className="py-3 bg-yellow-600 w-36 opacity-75 text-white shadow-lg rounded-3xl ml-12 mt-7">READ MORE</button>
        </div>

        
      </div>


      
    </div>
  );
}

export default Career;
