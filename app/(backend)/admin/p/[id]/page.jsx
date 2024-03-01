import Create from "@/components/back-end/create/create";
import { getData } from "@/utils/getData";

export default async function page({ params: { id } }) {
  //   console.log(id);
  const projects = await getData("projects");
  //   console.log(projects);

  const project = await projects.find((project) => project.id == id);
  //   console.log(project);

  return <Create initialData={project} />;
}
