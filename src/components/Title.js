function Title(props){
  return(
    <>
      <div className="title-wrapper">
        <h2 className="title">{props.title}</h2>
      </div>
      <p className="subtitle">{props.subtitle}</p>
    </>
  );
}
export default Title;
