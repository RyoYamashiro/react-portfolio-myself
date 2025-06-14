import Title from "../components/Title";
import Profile from "../components/Profile";
// import Interview from '../components/Interview'

function Bio() {
  return (
    <>
      <Title
        title="Bio"
        subtitle="This page is all about me — Ryo Yamashiro, the developer behind this site."
      />
      <Profile />
      {/* <Interview /> */}
    </>
  );
}
export default Bio;
