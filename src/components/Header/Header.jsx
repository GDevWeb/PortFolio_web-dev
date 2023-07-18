import { lazy } from "react";
import logo from "../../assets/videos/logo.mp4";
import Navbar from "../NavBar/navBar";

export default function Header() {

  return (
    <header id="home">
      <div className='logo'>
        <figure>
          <video src={logo} autoPlay={true} loop muted onLoad={lazy}></video>
        </figure>
      </div>
      <Navbar/>
    </header>
  );
}
