import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
    return ( 
        <footer>
            <h4>Me contate</h4>

            <div className= "imagens">
            <Link to ="https://www.linkedin.com/in/isaqueocruz/">
                    <i className="fa-brands fa-linkedin"></i>
                </Link>

                <Link to ="https://github.com/IsaqueCruzDev"> 
                    <i className="fa-brands fa-square-github"></i>
                </Link> 
                
                <Link to ="https://www.instagram.com/ioc.off/">
                    <i className="fa-brands fa-square-instagram"></i>
                    </Link>
            </div>  
        </footer>
     );
}

export default Footer;