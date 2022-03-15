import './Project.css';

const Project = (props) => {
  const { img, title } = props;
  return <article className='project'>
    <img src={img} alt="" />
    <h3>{title}</h3>
  </article>
}

export default Project;