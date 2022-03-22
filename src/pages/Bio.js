import Title from '../components/Title'
import Profile from '../components/Profile'
import Interview from '../components/Interview'


function Bio(){
  return (
    <>
    <Title title="Bio" subtitle="本サイト制作者である「リョウヤマ」についての説明ページです。フランクに認識齟齬・誤解なく伝えられたらなと思います。" />
    <Profile />
    <Interview />
    </>
  );
}
export default Bio;
