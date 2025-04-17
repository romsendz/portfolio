import { SocialIcon } from "react-social-icons";

export default function Footer() {
  const date = new Date();
  return (
    <footer className="flex justify-between items-center p-4 shadow-lg backdrop-filter backdrop-blur-[5px] z-10">
      <span className="text-sm text-gray-400">{`© ${date.getFullYear()} Roman Sendziuk`}</span>
      <div className="flex justify-end items-center space-x-4">
        <SocialIcon
          title="LinkedIn"
          url="https://www.linkedin.com/in/roman-sendziuk/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: "2rem", width: "2rem" }}
          className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
        />
        <SocialIcon
          title="GitHub"
          url="https://github.com/romsendz"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: "2rem", width: "2rem" }}
          className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
        />
        <SocialIcon
          title="Facebook"
          url="https://www.facebook.com/roman.sendziuk"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: "2rem", width: "2rem" }}
          className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
        />
        <SocialIcon
          title="Email"
          url="mailto:sendzyuk.r@gmail.com,sendzyuk.r@ukr.net"
          target="_blank"
          rel="noopener noreferrer"
          style={{ height: "2rem", width: "2rem" }}
          className="hover:scale-125 transition-all duration-200 hover:filter hover:brightness-125"
        />
      </div>
    </footer>
  );
}
