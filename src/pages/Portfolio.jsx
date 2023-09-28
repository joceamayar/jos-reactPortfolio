import React from 'react';
import Project from '/src/components/Project'; 

function Portfolio() {
  return (
    <div className="portfolio">
      <Project
        title="EventPulse"
        imageUrl="/src/assets/eventPulse.png"
        description="Some quick example text to build on the card title and make up the bulk of the card's content."
        link="#"
      />
      <Project
        title="NebulaNarratives"
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Another example text for another amazing project."
        link="https://cdziedzic.github.io/Nebula-Narratives/"
      />
        <Project
        title="Project 3"
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Another example text for another amazing project."
        link="https://cdziedzic.github.io/Nebula-Narratives/"
      />
        <Project
        title="NebulaNarratives"
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Another example text for another amazing project."
        link="https://cdziedzic.github.io/Nebula-Narratives/"
      />
        <Project
        title="NebulaNarratives"
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Another example text for another amazing project."
        link="https://cdziedzic.github.io/Nebula-Narratives/"
      />
        <Project
        title="NebulaNarratives"
        imageUrl="/src/assets/nebulaNarratives.png"
        description="Another example text for another amazing project."
        link="https://cdziedzic.github.io/Nebula-Narratives/"
      />

    </div>
  );
}

export default Portfolio;