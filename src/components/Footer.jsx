import React from "react";
import youtubeIcon from "../assets/youtube_icon.png";
import facebookIcon from "../assets/facebook_icon.png";
import twitterIcon from "../assets/twitter_icon.png";
import InstagramIcon from "../assets/instagram_icon.png";

const Footer = () => {
  return (
    <div className=" items-center justify-center p-[30px_40px]">
      <div className="flex justify-between items-center">
        <div className=" flex  w-[1.8rem] gap-2 cursor-pointer">
          <img src={youtubeIcon} alt="youtube" className="" />
          <img src={facebookIcon} alt="facebook" />

          <img src={twitterIcon} alt="twitter" />

          <img src={InstagramIcon} alt="instagram" />
        </div>

        <ul>
          <li>Audio Description</li>
          <li>Help Center</li>

          <li>Gift Cards</li>
        </ul>
        <ul>
          <li>Investor Relations</li>
          <li>Jobs</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Terms of Use </li>
          <li>Privacy</li>

          <li>Cookie Preferences</li>
          <li>corporate Information</li>
        </ul>
      </div>
      <hr className="" />
      <p className="flex justify-center text-gray-400">@sommytech 2025, inc</p>
    </div>
  );
};

export default Footer;
