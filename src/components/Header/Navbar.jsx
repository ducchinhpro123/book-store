import User from "../Form/User";
import {Link} from 'react-scroll'
import {Link as RouterLink} from 'react-router-dom'
import config from "../../config/index.js";
import {useAuth} from "../../firestore.jsx";

export default function Navbar() {

  const currentUser = useAuth()

  return (
      <nav>
        <div className="logo">BOOK STORE</div>
        <ul className="list">
          <li className="item-list active">
            <RouterLink to={config.routes.homePage}>Home</RouterLink>
          </li>
          <li className="item-list">
            <Link style={{cursor: "pointer"}} to={"AboutUs"} smooth={true}>About Us</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">Offers</a>*/}
            <Link style={{cursor: "pointer"}} to={"Offers"} smooth={true}>Offers</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">BLOG</a>*/}
            <Link style={{cursor: "pointer"}} to={"Blog"} smooth={true}>Our Blog</Link>
          </li>
          <li className="item-list">
            {/*<a href="#">CONTACT</a>*/}
            <Link style={{cursor: "pointer"}} to={"Contact"} smooth={true}>Contact</Link>
          </li>

        </ul>
        <div className={'d-flex'}>
          <Link style={{cursor: "pointer"}} to={"SearchBook"} smooth={true}>Find your books <span
              className={'text-2xl'}>👀 👈</span></Link>
          {currentUser && <User/>}
        </div>
      </nav>
  );
}
