import Title from "../components/Title";
import Profile from "../components/Profile";
// import Interview from '../components/Interview'

function Bio() {
  return (
    <>
      <Title
        title="Bio"
        subtitle="本サイト制作者である「リョウヤマ」についての説明ページです。"
      />
      <Profile />
      {/* <Interview /> */}
    </>
  );
}
export default Bio;
