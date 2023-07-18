import './Header.scss';

import logo from "../../assets/videos/logo.mp4";

export default function Header() {

  return (
    <header id="home">
      <div className='logo'>
        <figure>
          <video src={logo} autoPlay={true} loop muted></video>
        </figure>
      </div>
    </header>
  );
}
