import DicodingLogo from "../../images/dicoding-logo.svg";
import { FiInstagram, FiYoutube, FiTwitter, FiFacebook } from "react-icons/fi";

export default function Footer() {
    return (
        <footer className="bg-white container max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <div className="border border-b-0 border-gray-200 mb-8"></div>
            <div>
                <img className="mb-8" src={DicodingLogo} />
                <p className="md:text-lg text-gray-500">
                    Dicoding Space <br />
                    Jl. Batik Kumeli No.50, Sukaluyu, <br />
                    Kec. Cibeunying Kaler, Kota Bandung <br />
                    Jawa Barat 40123
                </p>
                <div className="border border-b-0 border-gray-200 mt-8 md:mt-12 mb-8"></div>
                <div className="flex items-center flex-col space-y-2 md:space-y-0 md:flex-row">
                    <p className="font-semibold text-gray-700">Decode Ideas Discover Potential</p>
                    <div className="flex flex-row space-x-8 mx-auto">
                        <a
                            href="https://www.instagram.com/dicoding"
                            target="_blank"
                        >
                            <FiInstagram />
                        </a>
                        <a
                            href="https://www.youtube.com/channel/UCM6BWkgiGrCHG967i_PyMiw"
                            target="_blank"
                        >
                            <FiYoutube />
                        </a>
                        <a
                            href="https://twitter.com/dicoding"
                            target="_blank"
                        >
                            <FiTwitter />
                        </a>
                        <a
                            href="https://www.facebook.com/dicoding"
                            target="_blank"
                        >
                            <FiFacebook />
                        </a>
                    </div>
                    <div className="flex flex-col sm:mt-0 sm:flex-row sm:space-x-6 items-center text-gray-400">
                        <p>
                            © Dicoding Indonesia {new Date().getFullYear()}
                        </p>
                        <a
                            href="https://www.dicoding.com/termsofuse"
                            target="_blank"
                        >
                            Term
                        </a>
                        <a
                            href="https://www.dicoding.com/privacy"
                            target="_blank"
                        >
                            Privacy
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
