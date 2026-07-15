
import GitHubIcon from '@mui/icons-material/GitHub';
import '../assets/styles/Main.scss';
import avatar from "../assets/images/S__5005328.jpg";


function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
           <img src={avatar} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/THEBAOxCucumber" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            
          </div>
          <div className="mobile_social_font">
            <h1>Piriyaporn Yamsamruen</h1>
            </div>
            <p>Full Stack Portfolio </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/THEBAOxCucumber" target="_blank" rel="noreferrer"><GitHubIcon/></a>
          
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;