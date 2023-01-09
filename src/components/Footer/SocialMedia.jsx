import IconFacebook from "../../assets/icons/IconFacebook";
import IconInstagram from "../../assets/icons/IconInstagram";
import IconPinterest from "../../assets/icons/IconPinterest";
import IconYoutube from "../../assets/icons/IconYoutube";
import IconTwitter from "../../assets/icons/IconTwitter";

const SocialMedia = () => {
  return (
    <div className="flex p-6 justify-center gap-4 lg:p-0">
      <a href="https://www.facebook.com" target="_blank" className="fill-white hover:fill-LimeGreem transition-all">
        <IconFacebook/>
      </a>
      <a href="https://www.youtube.com" target="_blank" className="fill-white hover:fill-LimeGreem transition-all">
        <IconInstagram/>
      </a>
      <a href="https://www.twitter.com" target="_blank" className="fill-white hover:fill-LimeGreem transition-all">
        <IconPinterest/>
      </a>
      <a href="https://www.pinterest.com" target="_blank" className="fill-white hover:fill-LimeGreem transition-all">
        <IconYoutube/>
      </a>
      <a href="https://www.instagram.com" target="_blank" className="fill-white hover:fill-LimeGreem transition-all">
        <IconTwitter/>
      </a>
    </div>
  );
};

export default SocialMedia;
