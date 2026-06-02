import logoImage from "../assets/quiz-logo.png";

function Header() {
  return (
    <header>
      <img src={logoImage} alt="logo image displaying a quiz paper" />
      <h1>ReactQuiz</h1>
    </header>
  );
}

export default Header;
