// links
import Link from "next/link";

// icons
import { RiInstagramLine, RiFacebookLine, } from "react-icons/ri";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://web.facebook.com/itsabdulmannan'} target="_blank" className="hover:text-accent transition-all duararion-300 text-2xl" >
      <RiFacebookLine />
    </Link>
    <Link href={'https://www.instagram.com/its_abdul_mannan/'} target="_blank" className="hover:text-accent transition-all duararion-300 text-2xl" >
      <RiInstagramLine />
    </Link>
    <Link href={'https://github.com/abdulmannan6'} target="_blank" className="hover:text-accent transition-all duararion-300 text-2xl" >
      <FaGithub />
    </Link>
    <Link href={'https://www.linkedin.com/in/its-abdul-mannan/'} target="_blank" className="hover:text-accent transition-all duararion-300 text-2xl" >
      <FaLinkedin />
    </Link>
    <Link href={'https://twitter.com/itsmannan56'} target="_blank" className="hover:text-accent transition-all duararion-300 text-2xl" >
      <FaTwitter />
    </Link>
  </div >;
};

export default Socials;
