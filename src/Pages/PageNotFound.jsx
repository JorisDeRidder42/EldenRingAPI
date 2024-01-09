import { Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const PageNotFound = () => {
    return(
        <div className="page404">
                <img src="../assets/parallax/404.jpg" alt='dragon and knight' />
          <div className="middle">
                <h1>404</h1>
                <h6>Did not found the page</h6>
                <Link to={"/"}>Go back</Link>
          </div>
        </div>
    )
}

export default PageNotFound;