import Navbar  from "./Navbar"

export default function Header(){
    return(
        <header>
            <img src="./brand_logo.png" />
             <Navbar/>
            <button>Login</button>
        </header>
    )
}