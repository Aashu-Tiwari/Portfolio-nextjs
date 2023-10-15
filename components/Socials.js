import Link from "next/link";
import {RiInstagramLine,RiFacebookLine,RiLinkedinLine,RiGithubLine} from 'react-icons/ri'
const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg">
    <Link href={'https://www.instagram.com/aashu___781/'} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
      </Link>
      <Link href={'https://www.facebook.com/profile.php?id=100006287205084'} className="hover:text-accent transition-all duration-300">
      <RiFacebookLine/>
      </Link>
      <Link href={'https://www.linkedin.com/in/ashu-tiwari-b802751b4/'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
      </Link>
      <Link href={'https://github.com/Aashu-Tiwari?tab=repositories'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
      </Link>
  </div>;
};

export default Socials;
