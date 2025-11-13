import React from "react";
import Footer from "../components/common/Footer";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <div className="relative mx-auto flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
        <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-center text-4xl font-semibold mt-8">
              Terms and Conditions
            </h1>
            <p className="text-center text-lg text-richblack-300 mt-3">
              Last updated: November 14, 2025
            </p>
          </div>

          <div className="flex flex-col gap-8 text-richblack-100 mb-16">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                1. Acceptance of Terms
              </h2>
              <p className="text-base leading-7">
                By accessing and using StudyNotion, you accept and agree to be
                bound by these Terms and Conditions. If you do not agree to
                these terms, please do not use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                2. User Accounts
              </h2>
              <p className="text-base leading-7">
                You must create an account to access certain features of our
                platform. You are responsible for maintaining the
                confidentiality of your account credentials and for all
                activities that occur under your account. You must notify us
                immediately of any unauthorized use of your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                3. Course Enrollment and Payment
              </h2>
              <p className="text-base leading-7">
                Course prices are subject to change without notice. Payment must
                be made in full at the time of enrollment. Once enrolled,
                refunds may be provided according to our refund policy. Course
                content and access are provided on an "as is" basis.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                4. Intellectual Property
              </h2>
              <p className="text-base leading-7">
                All content on StudyNotion, including courses, videos, text,
                graphics, and logos, is the property of StudyNotion or its
                content creators and is protected by copyright and other
                intellectual property laws. You may not reproduce, distribute,
                or create derivative works without explicit permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                5. User Conduct
              </h2>
              <p className="text-base leading-7">
                You agree not to use our platform for any unlawful purpose or in
                any way that could damage, disable, or impair our services. You
                must not upload or share any content that is offensive,
                defamatory, or infringes on others' rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                6. Instructor Responsibilities
              </h2>
              <p className="text-base leading-7">
                Instructors are responsible for the accuracy and quality of
                their course content. Instructors must have the necessary rights
                to all content they upload and must not violate any copyrights
                or other intellectual property rights.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                7. Limitation of Liability
              </h2>
              <p className="text-base leading-7">
                StudyNotion shall not be liable for any indirect, incidental,
                special, or consequential damages arising out of or in
                connection with your use of the platform. Our total liability
                shall not exceed the amount you paid for the course or service
                in question.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                8. Termination
              </h2>
              <p className="text-base leading-7">
                We reserve the right to terminate or suspend your account at any
                time for violations of these terms or for any other reason at
                our sole discretion.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                9. Changes to Terms
              </h2>
              <p className="text-base leading-7">
                We may update these Terms and Conditions from time to time.
                Continued use of the platform after changes are posted
                constitutes your acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">
                10. Contact Information
              </h2>
              <p className="text-base leading-7">
                If you have any questions about these Terms and Conditions,
                please{" "}
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

export default Terms;
