import tailwindIcon from "../../../public/assets/Tailwind_CSS_Logo.svg.png";

function Header() {
  return (
    <>
      <header className="heads">
        <img src={tailwindIcon} alt="TailwindCSS Icon" />
        <h2 className="m-auto font-extrabold text-indigo-100">
          Starting Tailwind CSS
        </h2>
      </header>
    </>
  );
}

export default Header;
