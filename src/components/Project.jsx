import Icongithub from "/src/assets/github.png" ;

function Project({ title, imageUrl, description, siteLink, codeLink }) {

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <div className="card-ftr">
            <a href={siteLink} className="btn btn-primary" id="project-btn">view project</a>
            <a href={codeLink} id="gitHub-link">
              <img src={ Icongithub }alt="Phone Icon" id="gitHub"></img>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Project;

