import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FavoriteIcon from '@mui/icons-material/Favorite';
import '../App.css'
function Footer() {
  return (
    <div style={{marginTop: '4rem'}}>
      <footer style={{backgroundColor: "black"}}>
        <h6>
          Developed and designed with <FavoriteIcon fontSize="small" /> by Dev-Khay
        </h6>
        <div className='footerIconDiv'>
          <a href='https://github.com/thatkhay' target='_blank' rel='noopener noreferrer'>
            <GitHubIcon style={{color:'white'}}/>
          </a>
          <a href='https://www.linkedin.com/in/john-kingsley-egeonu-a6225b255/' target='_blank' rel='noopener noreferrer'>
            <LinkedInIcon style={{color:'white'}}/>
          </a>
          <a href='https://www.twitter.com/that_khayy' target='_blank' rel='noopener noreferrer'>
            <TwitterIcon style={{color:'white'}}/>
          </a>
         
        </div>
      </footer>
    </div>
  );
}

export default Footer;
