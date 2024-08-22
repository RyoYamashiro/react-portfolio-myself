import SecondTitle from "./SecondTitle";
import ProfileImage from "../images/profile-image.jpg";

import styled from "styled-components";
import {
  media,
  space_m,
  space_l,
  font_size_l,
  green,
} from "../utils/styledComponents";

const ProfileContainer = styled.div`
  width: 600px;
  margin: 0 auto ${space_l};
  display: flex;
  ${media.handheld`
    display: block;
    width: 100%;
  `}
  .profile-thumb {
    background-size: cover !important;
    background-position: center center;
    background-repeat: no-repeat;
    position: relative;
    height: 130px;
    width: 130px;
    margin-bottom: 30px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    border-radius: 50%;
    flex-shrink: 0;
    ${media.handheld`
      margin: auto;
    `}
  }
  .profile-content{
    margin-left: ${space_m};
    ${media.handheld`
      margin-left: 0;
    `}
    .profile-text{
      width: 100%;
    }
  }
  .profile-heading{
    font-size: ${font_size_l};
    font-weight: bold;
    margin-bottom: ${space_m};
    display: inline-block;
    &:after{
      background: ${green};
      border-radius: 3px;
      content: "";
      display: block;
      height: 6px;
    }
`;

function Profile() {
  return (
    <div>
      <SecondTitle
        title="Profile"
        subtitle="リョウヤマの基本情報です。（こちらでは細かな個人情報は控えておりますが、知りたい情報がありましたら気兼ねなく「CONTACT」よりお問合せください。）"
      />
      <ProfileContainer>
        <div
          className="profile-thumb"
          style={{ backgroundImage: `url(${ProfileImage})` }}
        ></div>
        <div className="profile-content">
          <p className="profile-heading">リョウヤマ</p>
          <p className="profile-text">
            沖縄県で1997年に生まれ、散歩と旅行を趣味としております。
            <br />
            Laravelを中心としたバックエンドエンジニア経験があります。
            <br />
          </p>
        </div>
      </ProfileContainer>
    </div>
  );
}
export default Profile;
