

function SecondTitle(props){
  return (
    <div className="second-title-container">
      <div className="second-title-wrapper">
        <h2 className="second-title">{props.title}</h2>
      </div>
      <p className="second-subtitle">{props.subtitle}</p>
    </div>
  )
}
export default SecondTitle;
