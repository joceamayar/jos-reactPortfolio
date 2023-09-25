
function Projects() {

  return (
<div>
      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="src/assets/eventPulse.png" alt="EventPulse website image" />
        <div className="card-body">
          <h5 className="card-title">EventPulse</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="https://event-plannerkas-1ae2bc64599a.herokuapp.com/" className="btn btn-primary">view project</a>
        </div>
      </div>

      <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src="src/assets/nebulaNarratives.png" alt="NebularNarratives website image" />
        <div className="card-body">
          <h5 className="card-title">NebulaNarratives</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <a href="https://cdziedzic.github.io/Nebula-Narratives/" className="btn btn-primary">View project</a>
        </div>
      </div>
    </div>

  );
}

export default Projects;
