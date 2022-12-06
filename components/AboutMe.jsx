import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const AboutMe = () => {
  return (
    <div>
      <div className="text-justify p-10 pr-0 pt-36">
        <h2 className="text-5xl py-4 text-cyan-600 font-medium font-playfairDisplay italic md:text-6xl">
          Hello. I am Dženita.
        </h2>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white font-chivo">
          Bachelor of Computer Science with minor in Economics on a double
          degree program with University SSST, Bosnia and Herzegovina, and
          University of Buckingham, United Kingdom.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white font-chivo">
          Experienced fullstack <span className="text-rose-600 font-bold">developer</span> and a highly active <span className="text-rose-600 font-bold">volunteer</span> in various
          organizations for over 6 years now acquiring vast skillset.
        </p>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white font-chivo">
          Always <span className="text-rose-600 font-bold">open</span> to new opportunities and knowledge sharing.
        </p>
        <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white font-chivo">
          Let&#39;s connect!
        </p>
      </div>
      <div className="text-5xl flex justify-center items-center gap-16 py-3 text-gray-600 dark:text-white">
        <a
          className="hover:text-cyan-600"
          href="https://github.com/Jenn-y"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub size={50} />
        </a>
        <a
          className="hover:text-cyan-600"
          href="https://www.linkedin.com/in/dzenita-djulovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin size={50} />
        </a>
        <a
          className="hover:text-cyan-600"
          href="https://www.facebook.com/dzenita.djulovic/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsFacebook size={43} />
        </a>
      </div>
    </div>
  );
};

export default AboutMe;
