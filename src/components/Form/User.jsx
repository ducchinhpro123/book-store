import {Link} from "react-router-dom";
import config from "../../config";
import {useAuth} from "../../firestore.jsx";

export default function User() {
  const currentUser = useAuth()

  return (
    <div>
      <Link to={config.routes.userInformation}>
        <img
          width={40}
          height={40}
          src={currentUser && currentUser.photoURL? currentUser.photoURL : '\thttps://external-content.duckduckgo.com/iu/?u=http…9fb31b62833cf41168f0b8a3e0f9a0849308c5&ipo=images'}
          alt=""
        />
      </Link>
    </div>
  );
}
