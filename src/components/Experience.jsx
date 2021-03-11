import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div id="experience" className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24">
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 My Experience
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <ExperienceCard
          img="Tencent.jpg"
          role="Product Manager Intern - JOOX Product Team"
          title="Tencent Technology Company, Shenzhen"
          time="May, 2020 - August 2020"
          descriptions={[
            "Created and presented reports on product improvement to the product team after conducting product analysis, competitor analysis and market research, with multiple feature suggestions adopted for future product iterations, including music search trends, personalized search rank, and joint subscription plans.",
            "Generated insights to promote user activity, prevent user loss, and increase revenue by extracting and analyzing user portrait and user behavior data using SQL and Python.",
            "Optimized efficiency of the automated notification system by designing task batch importing and exploring push notification scenarios based on data.",
          ]}
        />

        <ExperienceCard
          img="Tencent.jpg"
          role="Product Manager Intern - Billing Platform Product Team"
          title="Tencent Technology Company, Shenzhen"
          time="May, 2018 - August 2018"
          descriptions={[
            "Overall responsible for the task system of a SaaS product that provides customer loyalty solutions. Wrote product requirement documents for the business-side console and the client-side interface. Organized weekly meetings, and promoted progress of feature developments.",
            "Designed multiple features for product iterations, including client personalized incentives based on recommendation algorithm, the budget alert functionality, the store platform for external suppliers, to further drive higher levels of efficiency and lead to customer lifetime value maximization.",
            "Created publicity materials, including the client-side workflow document, and the business-side instruction document.",
          ]}
        />
      </div>
    </div>
  );
}
