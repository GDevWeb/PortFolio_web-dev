import CardPortfolio from '../Cards/Cards_Portfolio';
import portFolioTab from './portFolio.tab';

export default function PortFolio() {
  return (

    <>

    <section>

    <div className="title_section">
        <p>PortFolio </p>
      </div>
    <div id='portFolio' className='portfolio'>


{portFolioTab.map((project) => (
  <CardPortfolio
    key={project.id}
    projectName={project.name}
    image={project.image}
    trailer={project.trailer}
    description={project.description}
    githubLink={project.githubLink}
    codeSandBoxLink={project.codeSandBoxLink}
    type={project.type}
  />
      ))}    
      </div>
      <div className="callToAction">
</div>
      </section>

      </>
  )
}
