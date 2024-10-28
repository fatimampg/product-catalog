import { FaFacebookSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
  return (
    <div className="bg-background bg-opacity-70 flex items-center justify-center  w-full h-10 space-x-6 z-10 fixed bottom-0">
      <FaFacebookSquare className="text-foreground " size={22} />
      <FaInstagram className="text-foreground" size={22} />
      <FaXTwitter className="text-foreground" size={22} />
      <FaLinkedin className="text-foreground" size={22} />
      <MdEmail className="text-foreground" size={23} />
    </div>
  );
};

export default Footer;
