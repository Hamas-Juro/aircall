import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="flex items-center justify-center text-3xl font-bold text-blue-500 bg-blue-100 p-5">
      <Link to="/">Air Call Service</Link>
    </header>
  );
}

export default Header;
