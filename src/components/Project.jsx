import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div id="project" className="container items-center justify-between mx-auto px-4 leading-normal text-center mt-4 mb-24">
      <h2 className="font-black uppercase pb-8 text-3xl text-yellow-500">
        👩🏻‍💻 My Projects
      </h2>

      <div className="md:w-8/12 w-10/12 mx-auto lg:grid grid-cols-2">
        <ProjectCard
          img="moguls.jpg"
          title="Moguls Video Analyzer"
          time="January 2021 - Present"
          descriptions={[
            "Lead a team of six for going through the process of lean start-up for a SaaS product, which provides the service of automated video processing to extract metrics for professional sports. Arrange meetings and communicate with our industrial partner from the Canadian Sport Institute.",
            "Worked as a front-end developer in a team of two software engineers. Implemented features including drag-and-drop video uploading, video playing, sending requests for video processing, data saving with tags, data displaying, filtering, and sorting, with the use of Javascript, React, and Material-UI.",
          ]}
          demoName="Web Demo (In Development)"
          demoLink="https://moguls-analysis.herokuapp.com/"
          tags={[
            "Business of Software",
            "Javascript",
            "React",
            "JEST",
            "Material-UI",
            "Python",
            "Flask",
            "MongoDB",
          ]}
        />

        <ProjectCard
          img="vaccine.jpg"
          title="Vaccinfo"
          time="March 2021"
          descriptions={[
            "Worked as a front-end developer in the deCODE hackathon with League Inc. to create a web application that aims to build vaccine trust through impact and data.",
            "Implemented the user survey feature and the FAQ section with Next.js and React Hooks.",
            "Adjusted the user interface by using TailwindCSS based on the Figma file provided by the UX designers. ",
          ]}
          demoName="Web Demo"
          demoLink="https://league-tracker.vercel.app/"
          tags={["Javascript", "React", "Next.js", "TailwindCSS"]}
        />

        <ProjectCard
          img="terminal.jpg"
          title="Customized File System"
          time="February 2021"
          descriptions={[
            "Implemented a customized file system of own designs in C language using Filesystem in Userspace (FUSE). Supported common Linux file system commands including ls, touch, echo, cat, truncatem rm, mkdir, and rmdir.",
          ]}
          tags={["C", "Operating System"]}
        />

        <ProjectCard
          img="router.jpg"
          title="Simple Router"
          time="October 2020"
          descriptions={[
            "Implemented a simple router with a static routing table with Mininet emulation, which can receives raw Ethernet frames, process the packets, and forward packets to the correct outgoing interface. ",
          ]}
          tags={["C", "Computer Network"]}
        />

        <ProjectCard
          img="hospital.jpg"
          title="SickKids Uroflow Measurement Application"
          time="January 2020 - April 2020"
          descriptions={[
            "Worked as a front-end developer in a team of six in collaboration with the SickKids Hospital to create an application that allows urology patients to do uroflowmetry test at home and allows clinicians to view statistical plots.",
            "Verified target customer's needs through constructing a prototype for the web dashboard.",
            "Implemented the filtering feature of the dashboard with React and Material-UI, and extended the existing mobile app with React Native to support a complete workflow of the application.",
          ]}
          tags={[
            "Javascript",
            "React",
            "Material-UI",
            "React Native",
            "FeathersJS",
            "Figma",
          ]}
          demoName="Video Demo"
          demoLink="https://www.youtube.com/watch?v=ID0yGLDdHhY"
        />
        <ProjectCard
          img="truck.jpg"
          title="UofT Eats"
          time="September 2019 - December 2019"
          descriptions={[
            "Created a web application for students to order food served by food trucks on campus.",
            "Implemented the back-end of the application including RESTful APIs, CRUD operations and user authentication with Express.js and Mongoose.",
            "Designed and constructed an aesthetic user interface in React and Material-UI to support menu, shopping carts, and pick-up reservations.",
          ]}
          tags={[
            "Javascript",
            "React",
            "RESTful API",
            "ExpressJS",
            "MongoDB",
            "Mongoose",
          ]}
        />
        <ProjectCard
          img="money.jpg"
          title="Automated Teller Machine Java Desktop Application"
          time="January 2019 - April 2019"
          descriptions={[
            "Led a team of six to implement an interactive desktop application simulating an Automated Teller Machine (ATM) system supporting various online banking features like withdraw, deposit and transfer.",
            "Maximized development experience and software iteration efficiency through incorporating design patterns such as the MVC pattern and the Factory method into the product.",
            "Enhanced user experience by creating an intuitive graphic user interface for the application in JavaFX.",
          ]}
          tags={["Java", "JavaFX", "Design Patterns", "OOP"]}
        />

        <ProjectCard
          img="book.jpg"
          title="Autocomplete Engine"
          time="November 2018"
          descriptions={[
            "Designed algorithms to suggest strings or melodies based on a prefix tree data structure, according to a few letters (for strings) or intervals (for melodies) provided by the client along with a csv or txt file as input suggestions. Created the engine that returns the result based on the number of occurrences of each suggestion in the file, and play melodies when required by the client.",
          ]}
          tags={["Python", "Prefix Tree", "Recursion"]}
        />
      </div>
    </div>
  );
}
