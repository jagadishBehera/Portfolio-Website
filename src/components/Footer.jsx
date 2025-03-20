import React from "react";
import {
    FaInstagram,
    BsLinkedin,
    FaGithub,
    IoLogoYoutube,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <FaInstagram size={24} />
              <BsLinkedin size={24} />
              <FaGithub size={24} />
              <IoLogoYoutube size={24} />
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
                &copy; 2024 Your Company. All rights reserved.
              </p>
              <p className="text-sm">Supportive Partner ❤️ Smitarani Nayak</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;