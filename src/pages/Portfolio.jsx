import React from 'react';
import Project from '/src/components/Project'; 

import Nebula from "../assets/nebulaNarratives.png";
import EventPulse from "/src/assets/eventPulse.png";
import Placeholder from "/src/assets/placeholder1.png";
import Placeholder1 from "/src/assets/placeholder1.png";
import Placeholder3 from "/src/assets/placeholder3.png";
import Placeholder4 from "/src/assets/placeholder4.png";
import Placeholder6 from "/src/assets/placeholder6.png";




function Portfolio() {
  return (
    <div className="portfolio">
   
      <Project
        title="NebulaNarratives "
        imageUrl={Nebula}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. "
        siteLink="https://cdziedzic.github.io/Nebula-Narratives/"
        codeLink="https://github.com/joceamayar"
      />
         <Project
        title="EventPulse"
        imageUrl={EventPulse}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar/Event_Planner"
      />
        <Project
        title="Placeholder "
        imageUrl={Placeholder}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl={Placeholder3}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl={Placeholder4}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />
        <Project
        title="Placeholder"
        imageUrl={Placeholder6}
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
        siteLink="https://event-plannerkas-1ae2bc64599a.herokuapp.com/"
        codeLink="https://github.com/joceamayar"
      />

    </div>
  );
}

export default Portfolio;