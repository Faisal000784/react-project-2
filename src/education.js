import education from "./images/education.jpg";

function Education() {
  return (
    <div className="bg-pink-100 h-[100vh] w-full">
      <div className="flex pt-14">
        <div>
          <img
            src={education}
            alt=""
            className="w-[38rem] h-[30rem] rounded-lg ml-[43rem]"
          />
        </div>
        <div className="flex flex-col ml-[-78.2rem] w-[33rem] pt-11">
          <h1 className="text-5xl font-serif font-medium leading-[3.5rem] text-blue-900">
            Undergraduate Education
          </h1>
          <p className="text-lg font-serif pt-6 text-gray-600">
            Collaboratively administrate turnkey channels whereas virtual
            e-tailers. Seamlessly empower fully researched growth strategies and
            interoperable internal or “organic” sources.
          </p>
          <p className='pt-9 text-lg font-serif  text-gray-600'>
            Credibly innovate granular internal or “organic” sources whereas
            high standards in web-readiness. Energistically scale future-proof
            core competencies vis-a-vis impactful experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Education;
