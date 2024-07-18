import { drugData, priceHistory, searchFilter } from "../assets/images";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { duration } from "@mui/material";
export const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#search", label: "Search" },
    { href: "#contact-us", label: "Contact Us" },
];
export const features = [
    {
        imgURL: drugData,
        label: "Comprehensive Drug Data",
        content: "Provides detailed information on a wide range of drugs, including uses, side effects, dosages, and interactions.",
        
    },
    {
        imgURL: priceHistory,
        label: "Price History Tracking",
        content: "Offers historical price data for medications, helping users understand price trends over time.",
        
    },
    {
        imgURL: searchFilter,
        label: "Search and Filter Capabilities",
        content: "Allows users to search for specific drugs and filter results based on various criteria, making it easier to find relevant information.",
        
    }

];
export const FooterIcon = [
    {
        icon: InstagramIcon,
        href: "https://www.instagram.com/ahmaransari3/"
    },
    {
        icon: LinkedInIcon,
        href: "https://www.linkedin.com/in/ahmar-ansari-80313225a/"
    },
    {
        icon: GitHubIcon,
        href: "https://github.com/Ahmar512"
    }
];
export const FooterLinks = [
    {
        title: "Quick Links",
        links : ["Home","About Us","Medicine Database", "Features", "Search", "Contect-Us" , "Privacy Policy", "Terms of Service"]
    },
    {
        title: "Contect Us",
        links: ["support@mediinfohub.com", "info@mediinfohub-example.com","(123) 456-7890","(987) 654-3210"]
    }
]