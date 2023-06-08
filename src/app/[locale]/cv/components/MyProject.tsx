import ProjectCard from "@/components/Card/ProjectCard";
import React from "react";

function MyProject() {
  return (
    <div className="w-full grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
      <ProjectCard
        title="SSO Client"
        children={<>ha</>}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat teneturpariatur doloribus."
        }
      />
      <ProjectCard
        children={<>ha</>}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat teneturpariatur doloribus."
        }
      />
      <ProjectCard
        children={<>ha</>}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat teneturpariatur doloribus."
        }
      />
      <ProjectCard
        children={<>ha</>}
        content={
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat teneturpariatur doloribus."
        }
      />
    </div>
  );
}

export default MyProject;
