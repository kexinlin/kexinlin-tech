import EducationCard from "./EducationCard";

export default function Education() {
  return (
    <div id="education" className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24">
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍🎓 My Education
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">

        <EducationCard
          img="https://pbs.twimg.com/profile_images/1014942894778650626/NyjWU7Fp_400x400.jpg"
          title="University of Toronto"
          time="September 2017 - June 2021"
          p1="I am a Computer Science undergraduate student at the University
          of Toronto, St. George Campus. I am a Bachelor of Science (BSc)
          Honors candidate anticipated to graduate in June 2021."
          p2="My cumulative GPA (up to Winter 2021) is 3.99/4.00. I am a
          Dean's List Scholar and Innis College Later Life Learning
          Scholar."
        />

        <EducationCard
          img="https://pbs.twimg.com/profile_images/1167795858685014017/3dENBKN__400x400.jpg"
          title="Halifax Grammar School"
          time="September 2015 - June 2017"
          p1="I spent my high school life in Halifax, a lovely and peaceful city
          in Nova Scotia. I received International Baccalaureate Diploma
          with a total score of 41. I won Governor General's Academic
          Medal at graduation."
          p2="I also started to learn coding and guitar during high school. Fun
          time!"
        />

      </div>
    </div>
  );
}
