import { Link } from "react-router-dom";

function SocialMediaIcons() {
  return (
    <div className="flex space-x-4 lg:justify-start justify-evenly mt-2">
      <Link to="#" className="rtl:ml-4">
        <img src={require("../../assets/facebook.png")} alt="facebook" />
      </Link>
      <Link to="#">
        <img src={require("../../assets/Instagram.png")} alt="instagram" />
      </Link>
      <Link to="#">
        <img src={require("../../assets/Twitter.png")} alt="twitter" />
      </Link>
      <Link to="#">
        <img src={require("../../assets/tiktok.png")} alt="tiktok" />
      </Link>
      <Link to="#">
        <img src={require("../../assets/Telegram.png")} alt="telegram" />
      </Link>
    </div>
  );
}

export default SocialMediaIcons;
