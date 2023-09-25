import image from "../assets/react.svg";

function Header() {
  return (
    <div className="app-header">
      <img src={image} alt="logo image" />
      <h1>The React Quiz</h1>
    </div>
  );
}

export default Header;
