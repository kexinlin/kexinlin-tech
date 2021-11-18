import ExperienceCard from "./ExperienceCard";

export default function Experience() {
  return (
    <div
      id="experience"
      className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-24 mb-24"
    >
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        💼 My Experience
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto">
        <ExperienceCard
          img="RBC.jpeg"
          role="Software Development Engineer"
          title="Royal Bank of Canada, Toronto, Canada"
          time="June 2021 - Now"
          descriptions={[
            "Designed and implemented pipelines to automate monthly RBC Datamart Communique generation, approval and consolidation. Integrated Jira, Jira Service Desk, Confluence, and Rundeck by Python scripts into the automation. Reduced cycle time and labor effort by 30%.",
            "Added query parameters for endpoint configurations on a metric monitoring system of Spring framework. Enabled users to specify data sources at run time and monitor metrics with more flexibility.",
          ]}
        />
        <ExperienceCard
          img="Renos.png"
          role="Front-end Developer (Part-time)"
          title="Renos Design, Toronto, Canada"
          time="April 2021 - June 2021"
          descriptions={[
            "Implemented a 3D furniture model viewer with features of drag control, light angle adjustment, and texture replacement with React, Three.js, and Next.js. Fetched models stored in AWS S3. Enabled users to view and interact with 3D furniture models.",
            "Implemented a 3D showroom with Three.js to support first-person and drag view with camera auto zoom-in for close-up views of furniture. Engaged customers into an immersive in-browser 3D experience.",
          ]}
        />
        <ExperienceCard
          img="Tencent.jpg"
          role="Product Manager Intern - JOOX Music"
          title="Tencent Technology Company, Shenzhen, China"
          time="May, 2020 - August 2020"
          descriptions={[
            "Optimized labor efficiency by designing A/B test automation and task batch importing for the automated push notification system.",
            "Generated insights to promote user activity and prevent user loss by analyzing user behavior data using SQL and Python. Explored more push notification scenarios based on the data.",
            "Presented reports for product improvements after conducting product analysis and market research, with multiple feature suggestions adopted for future product iterations, including music search trends, personalized search rank, and joint subscription plans.",
          ]}
        />

        <ExperienceCard
          img="Tencent.jpg"
          role="Product Manager Intern - Billing Platform"
          title="Tencent Technology Company, Shenzhen, China"
          time="May, 2018 - August 2018"
          descriptions={[
            "Owned the task system of a SaaS product that provides customer loyalty solutions. Wrote product requirement documents for the business-side console and the client-side interface. Organized weekly meetings, and promoted progress of feature developments.",
            "Designed multiple features for product iterations, including client personalized incentives based on recommendation algorithm, the budget alert functionality, the store platform for external suppliers, to further drive higher levels of efficiency and lead to customer lifetime value maximization.",
            "Created publicity materials, including the client-side workflow document, and the business-side instruction document.",
          ]}
        />
      </div>
    </div>
  );
}
