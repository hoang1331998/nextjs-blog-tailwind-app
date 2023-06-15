import ProjectCard from "@/components/Card/ProjectCard";
import React from "react";

function MyProject() {
  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <ProjectCard
        title="Web application to manage hospital (HIS)"
        date="04/2023 - now"
        content={
          "Patient management website with accompanying services such as examination, treatment, care, planning,..."
        }
      >
        <div>
          <h3 className="text-[16px] text-white">Patient management website with accompanying services such as examination, treatment, care, planning,...</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">TypeScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">ReactJS, Bootstrap</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">04/2023 - now</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Web application to manage camera devices"
        date="10/2022 - 03/2023"
        content={
          "Website to manage camera devices, watch live, receive real-time notifications, edit videos extracted from it."
        }
      >
        <div>
          <h3 className="text-[16px] text-white">Website to manage camera devices, watch live, receive real-time notifications, edit videos extracted from it</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer/Team leader</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">ReactJS, AntDesign, Firebase, Bootstrap</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">10/2022 - 03/2023</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Patient management system"
        date="09/2021 - 09/2022"
        content={
          "Manage and receive care of patients in the hospital"
        }
      >
         <div>
          <h3 className="text-[16px] text-white">Website to manage and receive care of patients in the hospital</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">ReactJS, Material UI, Stringee, Rechart, Bootstrap</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">09/2021 - 09/2022</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="System management sea target, air target"
        date="08/2021 - 11/2021"
        content={
          "Web application to manage the route, status of targets such as aircraft, ships."
        }
      >
         <div>
          <h3 className="text-[16px] text-white">Web application to manage the route, status of targets such as aircraft, ships.</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">TypeScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">ReactJS, Material UI, SocketIO, Bootstrap</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">08/2021 - 11/2021</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Single Sign On Client system"
        date="01/2021 - 03/2021"
        content={
          "Single sign-on system for all sites under the same system."
        }
      >
         <div>
          <h3 className="text-[16px] text-white">Single sign-on system for all sites under the same system.</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">JavaScript, iframe, nginx server</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">01/2021 - 03/2021</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="English test preparation system (ioe.vn)"
        date="01/2021-07/2021"
        content={
          "As an extension of the ioe.vn online English learning system, this website serves the practice part, as well as organizes English tests in the form of multiple choice, test and grading for exams there, along with the system for registration and payment."
        }
      >
         <div>
          <h3 className="text-[16px] text-white">As an extension of the <a href="https://ioe.vn" target="blank">ioe.vn</a> online English learning system, this website serves the practice part, as well as organizes English tests in the form of multiple choice, test and grading for exams there, along with the system for registration and payment.</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">JavaScript, AntDesign, Bootstrap, SSO</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">01/2021-07/2021</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Korean test preparation system (iok.vn)"
        date="05/2021-07/2021"
        content={
          "A new website built for the purpose of teaching Korean and organizing Korean language competitions for students of all levels.."
        }
      >
        <div>
          <h3 className="text-[16px] text-white">A new website built for the purpose of teaching Korean and organizing Korean language competitions for students of all levels.</h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">JavaScript, AntDesign, Bootstrap, SSO</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">05/2021-07/2021</span></p>
        </div>
      </ProjectCard>
      <ProjectCard
        title="Web site support goplay account"
        date="09/2020-12/2020"
        content={
          "The system includes articles on how to install, how to play the game, as well as receive and answer tickets related to the game process."
        }
      >
         <div>
          <h3 className="text-[16px] text-white">The system includes articles on how to install, how to play the game, as well as receive and answer tickets related to the game process. <a href="https://hotro.goplay.vn/" target="blank"></a></h3>
          <p className="text-white mt-3">- Role: <span className="text-[#fbbf24]">Developer</span></p>
          <p className="text-white mt-3">- Programming languages: <span className="text-[#fbbf24]">JavaScript</span></p>
          <p className="text-white mt-3">- Environment: <span className="text-[#fbbf24]">JavaScript, AntDesign, Bootstrap</span></p>
          <p className="text-white mt-3">- Start - end: <span className="text-[#fbbf24]">09/2020-12/2020</span></p>
        </div>
      </ProjectCard>
      
    </div>
  );
}

export default MyProject;
