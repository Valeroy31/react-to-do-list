import mysty from "./Style.jsx"
import { FaAccessibleIcon } from "react-icons/fa";
import imhd from "./assets/file.png"
function Header() {
    
    
    return (
        <>
         <header>
            <h1>My React App</h1>
            <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
        <hr />
        </header>
        <div>
<h1 className="home">Welcome to React!</h1>
<p style={{fontSize: '30px', color: 'yellow'}}> This is a simple react paragraph</p>
<h3 style={mysty}>Internal styling</h3>
<p style={mysty.header}>substyle</p>
<FaAccessibleIcon size={30} />

<img style={{width: '400px', height: '400px'}} src={imhd} alt="" />


        </div>
        </>
       
        
    );
}

export default Header;