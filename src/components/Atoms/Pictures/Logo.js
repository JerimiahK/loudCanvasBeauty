import Logo from "../../../Assets/Logo/Logo.svg";
import "./Pictures.css"

export default function LogoImage() {
  return (
    <a href="/">
      <img alt="The De Novo Beauty logo" className="logoImage" src={Logo} />
    </a>
  );
}
