import React from "react";
import Footer from "../components/common/Footer";

const CookiePolicy = () => {
  return (
    <div>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center text-4xl font-semibold mt-8">
              Cookie Policy
            </h1>
            <p className="text-center text-lg text-richblack-300 mt-3">
              Last updated: November 14, 2025
            </p>
          </div>

          <div className="flex flex-col gap-8 text-richblack-100 mb-16">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-base leading-7">
                Cookies are small text files that are stored on your device when
                you visit our website. They help us provide you with a better
                experience by remembering your preferences and understanding how
                you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. Types of Cookies We Use
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Essential Cookies
                  </h3>
                  <p className="text-base leading-7">
                    These cookies are necessary for the website to function
                    properly. They enable core functionality such as security,
                    authentication, and session management.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Performance Cookies
                  </h3>
                  <p className="text-base leading-7">
                    These cookies help us understand how visitors interact with
                    our website by collecting and reporting information
                    anonymously.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Functional Cookies
                  </h3>
                  <p className="text-base leading-7">
                    These cookies enable enhanced functionality and
                    personalization, such as remembering your preferences and
                    providing customized content.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Third-Party Cookies
              </h2>
              <p className="text-base leading-7">
                We may use third-party services that also set cookies on your
                device. These services help us analyze website traffic, process
                payments, and deliver video content. These third parties have
                their own privacy policies governing the use of cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Managing Cookies
              </h2>
              <p className="text-base leading-7">
                Most web browsers allow you to control cookies through their
                settings. You can set your browser to refuse cookies or delete
                certain cookies. However, if you disable cookies, some features
                of our website may not function properly.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Updates to This Policy
              </h2>
              <p className="text-base leading-7">
                We may update this Cookie Policy from time to time to reflect
                changes in technology or legal requirements. We encourage you to
                review this policy periodically.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiePolicy;
