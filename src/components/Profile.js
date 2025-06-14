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
        subtitle="Here is an overview of Ryo Yamashiro’s basic profile."
      />
      <ProfileContainer>
        <div
          className="profile-thumb"
          style={{ backgroundImage: `url(${ProfileImage})` }}
        ></div>
        <div className="profile-content">
          <p className="profile-heading">Ryo Yamashiro’s</p>
          <p className="profile-text">
          I have 4 years of experience in the IT industry — 2 years in backend development using Laravel and jQuery, and 2 years in QA and web operations.
<br />In development, I’ve built features from scratch, led small teams, and optimized performance using tools like Laravel Debugbar.
<br />On the QA side, I’ve performed cross-browser testing with BrowserStack and managed tasks using Jira and Slack.
<br />With hands-on experience in both development and QA, I’m adaptable to diverse teams, workflows, and project environments.
          </p>
        </div>
      </ProfileContainer>
    </div>
  );
}
export default Profile;
