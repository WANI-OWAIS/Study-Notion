import React from "react";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center text-4xl font-semibold mt-8">
              Privacy Policy
            </h1>
            <p className="text-center text-lg text-richblack-300 mt-3">
              Last updated: November 14, 2025
            </p>
          </div>

          <div className="flex flex-col gap-8 text-richblack-100 mb-16">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Information We Collect
              </h2>
              <p className="text-base leading-7">
                We collect information that you provide directly to us,
                including your name, email address, profile information, and
                course enrollment data. We also collect information about your
                usage of our platform, including course progress, quiz results,
                and interaction with course materials.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-base leading-7">
                We use the information we collect to provide, maintain, and
                improve our services, to process your transactions, to send you
                technical notices and support messages, and to communicate with
                you about courses, offers, and events. We also use your
                information to personalize your learning experience and provide
                course recommendations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Information Sharing
              </h2>
              <p className="text-base leading-7">
                We do not sell or rent your personal information to third
                parties. We may share your information with instructors of
                courses you enroll in, service providers who assist us in
                operating our platform, and when required by law or to protect
                our rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Data Security
              </h2>
              <p className="text-base leading-7">
                We implement appropriate technical and organizational measures
                to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction. However, no
                method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. Your Rights
              </h2>
              <p className="text-base leading-7">
                You have the right to access, update, or delete your personal
                information. You can manage your account settings or contact us
                for assistance. You also have the right to opt-out of marketing
                communications at any time.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Contact Us
              </h2>
              <p className="text-base leading-7">
                If you have any questions about this Privacy Policy, please{" "}
                <Link to="/contact" className="text-yellow-50 underline">
                  contact us
                </Link>
                .
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
