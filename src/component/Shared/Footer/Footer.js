import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer style={{ background: `url(${footer})`, backgroundSize: 'cover', position: ' left top center', }} class="p-10">
            <div className="footer">
                <div>
                    <span class="footer-title">Services</span>
                    <Link to='home' class="link link-hover">Design</Link>
                    <Link to='home' class="link link-hover">Marketing</Link>
                    <Link to='home' class="link link-hover">Branding</Link>
                    <Link to='home' class="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <Link to='home' class="link link-hover">About us</Link>
                    <Link to='home' class="link link-hover">Contact</Link>
                    <Link to='home' class="link link-hover">Jobs</Link>
                    <Link to='home' class="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <Link to='home' class="link link-hover">Terms of use</Link>
                    <Link to='home' class="link link-hover">Privacy policy</Link>
                    <Link to='home' class="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='my-10 text-center'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
    );
};

export default Footer;