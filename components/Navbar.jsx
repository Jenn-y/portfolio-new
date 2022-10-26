import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="py-10 mb-12 fixed inset-x-0 bg-white dark:bg-gray-800 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <h1 className="text-4xl font-playfairDisplay tracking-wider font-bold dark:text-white">
            Dženita Đulović
          </h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                className="cursor-pointer text-2xl dark:text-white"
                onClick={() => setDarkMode(!darkMode)}
              />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
