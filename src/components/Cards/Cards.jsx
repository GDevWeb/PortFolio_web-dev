import './Card.scss';

export default function Cards({ icon, skillName, description}) {
  return (
    <div className='card'>
      <div className="icon">
        {icon}
      </div>
      <div className="skillName">
        {skillName}
      </div>
      <div className="skill-description">
        {description}
      </div>
    </div>
  );
}
