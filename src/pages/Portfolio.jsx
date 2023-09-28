import React from 'react';
import Project from '/src/components/Project'; 

function Portfolio() {
  return (
    <div className="portfolio">
      <Project
        title="EventPulse"
        imageUrl="/src/assets/eventPulse.png"
        description="Another example text for another amazing project."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar/Event_Planner"
      />
      <Project
        title="NebulaNarratives "
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Some quick example text to build on the card title and make up the bulk of the card's content."
        siteLink="https://cdziedzic.github.io/Nebula-Narratives/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder "
        imageUrl="/src/assets/placeholder1.png"
        description="Another example text for another amazing project."
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder3.png"
        description="Another example text for another amazing project."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder4.png"
        description="Another example text for another amazing project."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder6.png"
        description="Another example text for another amazing project."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />

    </div>
  );
}

export default Portfolio;