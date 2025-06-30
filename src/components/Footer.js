import Image from "next/image";
import logo from "../../public/logo.png";
import google from "../../public/google.png";
import apple from "../../public/apple.png";
import visa from "../../public/visa.png";
import badge from "../../public/Badge.png";
import express from "../../public/express.png";
import kash from "../../public/kash.png";
import nogod from "../../public/nogod.png";
import { MdLocationOn } from "react-icons/md";
import { FaPhone, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#0A1128] text-white pb-8 pt-16">
      <div className="w-11/12 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          {/* Logo + Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              {/* Logo Placeholder */}
              <Image src={logo} alt="logo" priority width={24} height={24} />
              <h2 className="font-bold text-lg">FALCON</h2>
            </div>
            <p className="text-xs leading-relaxed">
              Experience our new platform &amp; Enjoy <br />
              exciting deals and offers on your day to day
            </p>
            <div className="text-xs space-y-2">
              <div className="flex items-start space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <MdLocationOn className="text-[#0A1128]" />
                </div>
                <p>
                  House #54, Road 13, ASA Center,
                  <br />
                  Uttara, Dhaka-1402
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <FaPhone className="text-[#0A1128]" />
                </div>
                <p>01729-147201</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
                  <IoMdMail className="text-[#0A1128]" />
                </div>
                <p>falcon@gmail.com</p>
              </div>
            </div>
          </div>

          {/* About */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-2">ABOUT</h3>
            <ul className="space-y-1">
              <li>Contact Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press</li>
              <li>Cancellation & Returns</li>
              <li>Terms of Use</li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-2">
            <h3 className="font-semibold mb-2">HELP</h3>
            <ul className="space-y-1">
              <li>Payments</li>
              <li>Shipping</li>
              <li>My Orders</li>
              <li>FAQs</li>
              <li>Terms of Use</li>
              <li>Security</li>
              <li>Privacy</li>
            </ul>
          </div>

          {/* Support & App */}
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Need Support?</h3>
              <div className="bg-[#13254c] rounded px-3 py-2 inline-block text-sm">
                📞 10724-7814XX
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-2">DOWNLOAD APP</h3>
              <div className="space-y-2">
                <div className="w-32 h-10 bg-white">
                  <Image
                    src={google}
                    alt="google"
                    priority
                    height={40}
                    width={128}
                  />
                </div>
                <div className="w-32 h-10 bg-white">
                  <Image
                    src={apple}
                    alt="apple"
                    priority
                    height={40}
                    width={128}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 my-8">
          <div className="flex items-center flex-wrap space-x-4 pt-2">
            <h1 className="text-base font-onest font-medium text-white">
              Follow us on
            </h1>
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <FaFacebookF className="text-[#0A1128]" />
            </div>
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <FaInstagram className="text-[#0A1128]" />
            </div>
            <div className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <FaTwitter className="text-[#0A1128]" />
            </div>
          </div>
          {/* Payments Accepted */}
          <div className="space-y-2 flex items-center flex-wrap space-x-4 pt-2">
            <h3 className="font-semibold mb-2 text-sm">PAYMENTS ACCEPTED</h3>
            <div className="flex flex-wrap gap-2">
              <div className="w-12 h-8 bg-white rounded">
                <Image src={visa} alt="visa" priority height={32} width={48} />
              </div>
              <div className="w-12 h-8 bg-white rounded">
                <Image
                  src={badge}
                  alt="badge"
                  priority
                  height={32}
                  width={48}
                />
              </div>
              <div className="w-12 h-8 bg-white rounded">
                <Image
                  src={express}
                  alt="express"
                  priority
                  height={32}
                  width={48}
                />
              </div>
              <div className="w-12 h-8 bg-white rounded">
                <Image src={kash} alt="kash" priority height={32} width={48} />
              </div>
              <div className="w-12 h-8 bg-white rounded">
                <Image
                  src={nogod}
                  alt="nogod"
                  priority
                  height={32}
                  width={48}
                />
              </div>
            </div>
          </div>
        </div>
        {/* Bottom */}
        <div className="border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
          Falcon ©2025. Design by kujz
        </div>
      </div>
    </footer>
  );
};

export default Footer;
