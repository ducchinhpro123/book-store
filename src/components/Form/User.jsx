import { Link } from "react-router-dom";
import config from "../../config";

export default function User() {
  return (
    <div>
      <Link to={config.routes.userInformation}>
        <img
          width={40}
          height={40}
          src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.pngall.com%2Fwp-content%2Fuploads%2F5%2FUser-Profile-PNG-High-Quality-Image.png&f=1&nofb=1&ipt=5719264a783a0ecc1ff36f1a959fb31b62833cf41168f0b8a3e0f9a0849308c5&ipo=images"
          alt=""
        />
      </Link>
    </div>
  );
}
