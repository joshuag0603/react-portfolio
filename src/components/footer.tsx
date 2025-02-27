import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4 mt-4 text-center">
      <div className="container d-flex flex-column align-items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Joshua Gilbert. All Rights Reserved.</p>
        <div className="d-flex gap-3 mt-2">
          <a
            href="https://github.com/joshuag0603"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/joshuag0306"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            <FaLinkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;