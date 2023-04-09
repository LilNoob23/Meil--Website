import { useState } from "react";
import { Layout } from "../../modules";
import projects from "../../data/projects.json";
import "./projects.css";

function Projects() {
  const [type, setType] = useState("");

  const handleType = (enteredType) => {
    if (enteredType === type) return setType("");
    setType(enteredType);
  };

  return (
    <Layout>
      <div className="projects">
        <div className="selectors">
          <button onClick={() => handleType("1")}>
            <img
              className={type === "1" ? "selectors-item-selected-img" : ""}
              src="https://images.pexels.com/photos/3779191/pexels-photo-3779191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className={type === "1" ? "selectors-item-selected-p" : ""}>
              Categoria 1
            </p>
          </button>
          <button onClick={() => handleType("2")}>
            <img
              className={type === "2" ? "selectors-item-selected-img" : ""}
              src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <p className={type === "2" ? "selectors-item-selected-p" : ""}>
              Categoria 2
            </p>
          </button>
          <button onClick={() => handleType("3")}>
            <img
              className={type === "3" ? "selectors-item-selected-img" : ""}
              src="https://images.pexels.com/photos/16173118/pexels-photo-16173118.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <p className={type === "3" ? "selectors-item-selected-p" : ""}>
              Categoria 3
            </p>
          </button>
        </div>
        <h2>Producciones artisticas</h2>
        <div className="projects-items">
          {projects.data
            .filter((item) => type === "" || item.type === type)
            .map((project) => (
              <div className="projects-items-item">
                <img src={project.img} alt="" />
                <p>{project.title}</p>
              </div>
            ))}
        </div>
      </div>
    </Layout>
  );
}

export default Projects;
