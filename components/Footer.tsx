import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-2 bg-[#1D63FF] pt-6 md:pt-12">
        <div className="container px-4 mx-auto">
          <div className="md:flex md:flex-wrap md:-mx-4 py-6 md:pb-12">
            <div className="footer-info lg:w-1/3 md:px-4">
              <h4 className="text-white text-2xl mb-4">
                19K users are using our calendar app, making their life easy.
              </h4>
              <p className="text-white">
                We have carefully crafted the blocks to suit to everyone's need.
              </p>
              <div className="mt-4">
                <button className="bg-facebook py-2 px-4 text-white rounded mt-2 transition-colors duration-300">
                  <span className="fab fa-facebook-f mr-2"></span> Follow
                </button>
                <button className="bg-twitter py-2 px-4 text-white rounded ml-2 mt-2 transition-colors duration-300">
                  <span className="fab fa-twitter mr-2"></span> Follow
                  @gokul'scalendarapp
                </button>
              </div>
            </div>

            <div className="md:w-2/3 lg:w-1/3 md:px-4 xl:pl-16 mt-12 lg:mt-0">
              <div className="sm:flex">
                <div className="sm:flex-1">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    About
                  </h6>
                  <div>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Company
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Culture
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Team
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Careers
                    </a>
                  </div>
                </div>
                <div className="sm:flex-1 mt-4 sm:mt-0">
                  <h6 className="text-base font-medium text-white uppercase mb-2">
                    What we offer
                  </h6>
                  <div>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Blocks
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Resources
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Tools
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Tutorials
                    </a>
                    <a
                      href="#"
                      className="text-white py-1 block hover:underline"
                    >
                      Freebies
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 md:px-4 md:text-center mt-12 lg:mt-0">
              <h5 className="text-lg text-white font-medium mb-4">
                Explore our site
              </h5>
              <button className="bg-transparent hover:bg-white text-white hover:text-gray-900 py-1 px-3 rounded border border-solid border-white mr-2">
                Explore
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-solid border-[#FFCE32] mt-4 py-4">
          <div className="container px-4 mx-auto">
            <div className="md:flex md:-mx-4 md:items-center">
              <div className="md:flex-1 md:px-4 text-center md:text-left">
                <p className="text-white">
                  &copy; <strong>Gokul's Calendar App</strong>
                </p>
              </div>
              <div className="md:flex-1 md:px-4 text-center md:text-right">
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="py-2 px-4 text-white inline-block hover:underline"
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
