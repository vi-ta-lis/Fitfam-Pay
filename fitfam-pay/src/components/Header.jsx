import Logo from "../assets/ChatGPT_Image_Jul_6__2025__03_44_02_PM-removebg-preview.png";
import Input from "./Input";

function Header() {
  return (
    <header>
      <div>
        <img src={Logo} alt="Fitfam Pay logo" />
      </div>
      <div>
        <Input />
      </div>
    </header>
  );
}
export default Header;
