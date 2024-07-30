import Link from "next/link";

import {FaGithub, FaLinkedin, FaFacebook} from "react-icons/fa";

const socials = [
    {icon: <FaGithub />, path: "https://github.com/Aphiwatch"},
    {icon: <FaLinkedin />, path: "https://www.linkedin.com/in/aphiwat-chalongtham-00767b2b3/"},
];

const Social = ({containerStyles, iconStyles}) => {
  return (
    <div className={containerStyles}>
    {socials.map((item, index) => {
      return (<Link href={item.path} key={index} className={iconStyles}>
        {item.icon}
      </Link>
    );
    })}
    </div>
  )
};

export default Social