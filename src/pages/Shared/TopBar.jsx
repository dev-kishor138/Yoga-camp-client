import { AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import { BsInstagram } from 'react-icons/bs';


const TopBar = () => {
    return (
        <section className="h-12 bg-[#15d5cc] text-white">
            <div className="h-full flex justify-between items-center mx-5">
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>

                    <a href="" rel="noreferrer">
                        contact@example.com
                    </a>

                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    <span>+1 5589 55488 55</span>

                </div>
                <div className="hidden md:flex items-center gap-3">
                    <a target="_blank" href="https://twitter.com/" className="twitter" rel="noreferrer">
                        < AiOutlineTwitter />
                    </a>
                    <a target="_blank" href="https://facebook.com" className="facebook" rel="noreferrer">
                        <FaFacebookF />
                    </a>
                    <a target="_blank" href="https://instagram.com" className="instagram" rel="noreferrer">
                        <BsInstagram />
                    </a>
                    <a target="_blank" href="https://linkedin.com" className="linkedin" rel="noreferrer">
                        <AiFillLinkedin />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TopBar;