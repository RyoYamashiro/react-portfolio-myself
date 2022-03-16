function Title(props){
  return(
    <>
      <div className="title-wrapper">
        <h2 className="title">{props.title}</h2>
      </div>
      <p className="subtitle">ヤマリョウへ連絡するためのページ</p>
    </>
  );
}
export default Title;
