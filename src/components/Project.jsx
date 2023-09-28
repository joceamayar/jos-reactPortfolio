
function Project({ title, imageUrl, description, link }) {

  return (
    <div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={imageUrl} alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
            {description}
          </p>
          <a href={link} className="btn btn-primary" id="project-btn">view project</a>
        </div>
      </div>
    </div>

  );
}

export default Project;

