import { Project } from "./Project";

function formatDescription(description: string) : string {
    return description.substring(0, 60) + "..."
}

interface ProjectCardProps {
    project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
    return (
      <div className="card">
        <img src={project.imageUrl} alt={project.name} />
        <section className="section dark">
          <h5 className="strong">
            <strong>{project.name}</strong>
          </h5>
          <p>{formatDescription(project.description)}</p>
          <p>Budget : {project.budget.toLocaleString()}</p>
        </section>
      </div>
    );
  }
  
  export default ProjectCard;