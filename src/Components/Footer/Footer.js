import React from 'react'
import useMediaQuery from '../MediaQuery/UseMediaQuery';
import './Footer.css'

function Footer() {

  const is1023px = useMediaQuery('(max-width: 1023px)');

  return (
    <div className='footer'>
      {!is1023px && <div className="socials">
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/facebook-f.png" alt=''/>
        <img src="https://img.icons8.com/metro/30/FFFFFF/instagram-new.png" alt=''/>
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/twitter--v1.png" alt=''/>
        <img src="https://img.icons8.com/ios-glyphs/50/FFFFFF/youtube-play.png" alt=''/>
      </div>}
      {!is1023px && <div className="footer-list">
        <ul>
          <li>Audio Description</li>
          <li>Help Centre</li>
          <li>Gift Cards</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Legal Notices</li>
          <li>Cookie Prefrences</li>
          <li>Corporate Infromation</li>
          <li>Contact Us</li>
        </ul>
      </div>}

      {is1023px && <div className="isSmallDeviceList">
        <ul>
          <li>Terms of Use</li>
          <li>Privacy Satement</li>
          <li>Cookie Prefrences</li>
          <li>Help Centre</li>
        </ul>
      </div>}

      {!is1023px && <div className="service-code">
        <button>Service Code</button>
      </div>}
      <div className="copyright">
        <p>&copy; 1997-2023 Netflix, Inc.</p>
        <p>Designed by <a href="https://prajilk.github.io">PRAJIL</a></p>
      </div>
    </div>
  )
}

export default Footer
