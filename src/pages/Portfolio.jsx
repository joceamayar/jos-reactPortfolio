import React from 'react';
import Project from '/src/components/Project'; 

function Portfolio() {
  return (
    <div className="portfolio">
   
      <Project
        title="NebulaNarratives "
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        siteLink="https://cdziedzic.github.io/Nebula-Narratives/"
        codeLink="https://github.com/joceamayar"
      />
         <Project
        title="EventPulse"
        imageUrl="/src/assets/eventPulse.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar/Event_Planner"
      />
        <Project
        title="Placeholder "
        imageUrl="/src/assets/placeholder1.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder3.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder4.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl="/src/assets/placeholder6.png"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />

    </div>
  );
}

export default Portfolio;