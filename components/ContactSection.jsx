import { MdOutlineMail, MdLocationPin } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";

const ContactSection = () => {
  return (
    <>
      <div className="min-h-[20vh] p-15 dark:text-white">
        <div className="mx-auto w-[30%]">
        <div className="flex justify-start gap-10 items-center mt-10">
          <MdOutlineMail size={20}/>
          <p>djulovic.dzenita1999@gmail.com</p>
        </div>
        <div className="flex justify-start gap-10 items-center mt-10">
          <FaPhone size={15}/>
          <p>+387 60 337 97 55</p>
        </div>
        <div className="flex justify-start gap-10 items-center mt-10">
          <MdLocationPin size={20}/>
          <p>71000 Sarajevo, Bosnia and Herzegovina</p>
        </div>
        </div>
        <div className="text-5xl flex justify-center items-center gap-16 text-gray-600 dark:text-white py-20">
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
    </>
  );
};

export default ContactSection;
