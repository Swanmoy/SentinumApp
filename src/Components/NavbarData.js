import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as FcIcons from "react-icons/fc";
export const NavbarData = [{
        name: "Home",
        path: "/SentinumApp",
        icon: < AiIcons.AiFillHome className = 'nav-text-icons' / > ,
    },
    {
        name: "About Us",
        path: "/SentinumApp/aboutus",
        icon: < FcIcons.FcAbout className = 'nav-text-icons' / > ,
    },
    {
        name: "How to Use?",
        path: "/SentinumApp/howtouse",
        icon: < AiIcons.AiFillQuestionCircle className = 'nav-text-icons' / > ,
    },
    {
        name: "Contact Us",
        path: "/SentinumApp/contactus",
        icon: < AiIcons.AiFillContacts className = 'nav-text-icons' / > ,
    },
    {
        name: "Privacy Policy",
        path: "/SentinumApp/privacypolicy",
        icon: < AiIcons.AiOutlineSecurityScan className = 'nav-text-icons' / > ,
    },
];