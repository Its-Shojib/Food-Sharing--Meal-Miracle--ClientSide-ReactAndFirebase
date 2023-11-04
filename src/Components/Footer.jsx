import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-[#314b5c] text-white">
            <footer className="footer p-10">
                <Link>
                    <img className="w-20" src="/log.png" alt="" />
                    <p>ACME Industries Ltd.<br />Providing reliable tech since 1992</p>
                </Link>
                <nav>
                    <header className="footer-title">Services</header>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </nav>
                
            </footer>
            <p className="text-center text-lg pb-3">All right reserved by &copy; Md Shojib Hossain || 2023</p>
        </div>
    )
}
export default Footer;