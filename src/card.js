function Card() {
  return (
    <div className="bg-pink-100 h-[80vh] w-full ">
      <div className="flex pt-36">
        <div className="flex flex-col bg-white shadow-xl h-[20rem] w-[25rem] ml-11 rounded-lg">
          <div className="w-24 h-24 rounded-full bg-yellow-600 opacity-75 text-center ml-10 mt-9">
            <i class="fas fa-regular fa-user-graduate text-center text-4xl pt-5 text-white "></i>
          </div>
          <h1 className="text-2xl font-serif font-bold opacity-70 ml-10 mt-4">
            Graduate Education
          </h1>
          <p className="ml-10 w-72 font-serif text-gray-600 text-lg">
            Podcasting operational change management inside of workflows to
            establish a framework.
          </p>
        </div>

        <div className="flex flex-col bg-white shadow-xl h-[20rem] w-[25rem] ml-8 rounded-lg">
          <div className="w-24 h-24 rounded-full bg-yellow-600 opacity-75 text-center ml-10 mt-9">
            <i class="fas fa-solid fa-sack-dollar text-center text-4xl pt-5 text-white"></i>
          </div>
          <h1 className="text-2xl font-serif font-bold opacity-70 ml-10 mt-4">
          Research Funding
          </h1>
          <p className="ml-10 w-72 font-serif text-gray-600 text-lg">
            Podcasting operational change management inside of workflows to
            establish a framework.
          </p>
        </div>

        <div className="flex flex-col bg-white shadow-xl h-[20rem] w-[25rem] ml-8 rounded-lg">
          <div className="w-24 h-24 rounded-full bg-yellow-600 opacity-75 text-center ml-10 mt-9">
            <i class="fas fa-sharp fa-solid fa-lines-leaning text-center text-4xl pt-5 text-white"></i>
          </div>
          <h1 className="text-2xl font-serif font-bold opacity-70 ml-10 mt-4">
          Lifelong Learning
          </h1>
          <p className="ml-10 w-72 font-serif text-gray-600 text-lg">
            Podcasting operational change management inside of workflows to
            establish a framework.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
