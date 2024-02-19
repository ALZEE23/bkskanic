import { Link } from "react-router-dom";

export default function NavLink({ href, children }) {
  return (
    <Link
      className="inline-flex py-2 text-xl text-blue-300 hover:text-white"
      to={href}
    >
      {children}
    </Link>
  );
}
