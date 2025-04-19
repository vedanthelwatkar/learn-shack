import React, { useRef } from "react";

const PrivacyPolicy = () => {
  const sectionRefs = {
    tableOfContentRef: useRef(null),
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null),
    section4: useRef(null),
    section5: useRef(null),
    section6: useRef(null),
    section7: useRef(null),
    section8: useRef(null),
    section9: useRef(null),
    section10: useRef(null),
    section11: useRef(null),
    section12: useRef(null),
  };

  const getNavbarHeight = () => {
    return window.innerWidth >= 768 ? 78 : 58;
  };

  const scrollToSection = (ref) => {
    if (sectionRefs[ref]?.current) {
      const mainContent = document.getElementById("main-content");
      if (!mainContent) return;

      const navbarHeight = getNavbarHeight();
      const sectionTop = sectionRefs[ref].current.offsetTop;

      mainContent.scrollTo({
        top: sectionTop - navbarHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      <div className="lg:px-20 lg:py-10">
        <div className="bg-brand-primary px-10 flex flex-col gap-4 justify-center items-center py-8 sm:py-[60px] md:px-20 lg:rounded-lg">
          <div className="max-w-[700px] flex flex-col gap-4 justify-center items-center ">
            <span className="text-body-lg text-neutral-100">
              Last Updated April 10, 2025{" "}
            </span>
            <h2 className="text-neutral-0 text-h2 font-heading font-bold text-center">
              We care about your privacy
            </h2>
            <span className="text-body-lg text-neutral-100 text-center">
              Your privacy is important to us at Learnshack Edu. We respect your
              privacy regarding any information we may collect from you across
              our website.
            </span>
          </div>
        </div>
      </div>
      <div className="p-5 pb-10 md:p-10 md:pb-20 lg:p-20 lg:pt-5">
        <div className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]">
          <p>
            This Privacy Notice for Learnshack Private Limited ("we," "us," or
            "our"), describes how and why we might access, collect, store, use,
            and/or share ("process") your personal information when you use our
            services ("Services"), including when you:
          </p>
          <p>
            <li>
              Visit our website at{" "}
              <a
                href="https://learnshackedu.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-system-info-600"
              >
                https://learnshackedu.com/
              </a>
              , or any website of ours that links to this Privacy Notice
            </li>

            <li>
              Engage with us in other related ways, including any sales,
              marketing, or events
            </li>
          </p>
          <p>
            <span className="font-medium">Questions or concerns?</span> Reading
            this Privacy Notice will help you understand your privacy rights and
            choices. We are responsible for making decisions about how your
            personal information is processed. If you do not agree with our
            policies and practices, please do not use our Services. If you still
            have any questions or concerns, please contact us at
            contact@learnshackedu.com.
          </p>
          <span className="text-body-2xl font-semibold text-neutral-800">
            SUMMARY OF KEY POINTS
          </span>
          <p className="font-medium">
            This summary provides key points from our Privacy Notice, but you
            can find out more details about any of these topics by clicking the
            link following each key point or by using our{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("tableOfContentRef")}
            >
              table of contents{" "}
            </span>
            below to find the section you are looking for.
          </p>
          <p>
            <span className="font-medium">
              What personal information do we process?
            </span>{" "}
            When you visit, use, or navigate our Services, we may process
            personal information depending on how you interact with us and the
            Services, the choices you make, and the products and features you
            use. Learn more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section1")}
            >
              personal information you disclose to us.
            </span>
          </p>
          <p>
            <span className="font-medium">
              {" "}
              Do we process any sensitive personal information?
            </span>{" "}
            Some of the information may be considered "special" or "sensitive"
            in certain jurisdictions, for example your racial or ethnic origins,
            sexual orientation, and religious beliefs. We do not process
            sensitive personal information.
          </p>
          <p>
            <span className="font-medium">
              Do we collect any information from third parties?
            </span>{" "}
            We may collect information from public databases, marketing
            partners, social media platforms, and other outside sources. Learn
            more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section1")}
            >
              information collected from other sources.
            </span>
          </p>
          <p>
            <span className="font-medium">
              How do we process your information?
            </span>{" "}
            We process your information to provide, improve, and administer our
            Services, communicate with you, for security and fraud prevention,
            and to comply with law. We may also process your information for
            other purposes with your consent. We process your information only
            when we have a valid legal reason to do so. Learn more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section2")}
            >
              how we process your information.
            </span>
          </p>
          <p>
            <span className="font-medium">
              {" "}
              In what situations and with which parties do we share personal
              information?{" "}
            </span>
            We may share information in specific situations and with specific
            third parties. Learn more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section3")}
            >
              when and with whom we share your personal information.
            </span>
          </p>
          <p>
            <span className="font-medium">
              How do we keep your information safe?
            </span>{" "}
            We have adequate organizational and technical processes and
            procedures in place to protect your personal information. However,
            no electronic transmission over the internet or information storage
            technology can be guaranteed to be 100% secure, so we cannot promise
            or guarantee that hackers, cybercriminals, or other unauthorized
            third parties will not be able to defeat our security and improperly
            collect, access, steal, or modify your information. Learn more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section6")}
            >
              how we keep your information safe.
            </span>
          </p>
          <p>
            <span className="font-medium">What are your rights?</span> Depending
            on where you are located geographically, the applicable privacy law
            may mean you have certain rights regarding your personal
            information. Learn more about{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section8")}
            >
              your privacy rights.
            </span>
          </p>
          <p>
            <span className="font-medium">
              How do you exercise your rights?
            </span>{" "}
            The easiest way to exercise your rights is by submitting a{" "}
            <span
              className="text-system-info-600"
              onClick={() => scrollToSection("section12")}
            >
              data subject access request
            </span>
            , or by contacting us. We will consider and act upon any request in
            accordance with applicable data protection laws.
          </p>
          <p>
            Want to learn more about what we do with any information we collect?{" "}
            <span
              className="text-system-info-600 cursor-pointer"
              onClick={() => scrollToSection("section12")}
            >
              Review the Privacy Notice in full.
            </span>
          </p>
          <span
            className="text-body-2xl font-semibold text-neutral-800"
            ref={sectionRefs.tableOfContentRef}
          >
            TABLE OF CONTENTS
          </span>
          <ol className="list-decimal list-inside text-system-info-600 cursor-pointer">
            <li onClick={() => scrollToSection("section1")}>
              WHAT INFORMATION DO WE COLLECT?
            </li>
            <li onClick={() => scrollToSection("section2")}>
              HOW DO WE PROCESS YOUR INFORMATION?
            </li>
            <li onClick={() => scrollToSection("section3")}>
              WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </li>
            <li onClick={() => scrollToSection("section4")}>
              DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </li>
            <li onClick={() => scrollToSection("section5")}>
              HOW LONG DO WE KEEP YOUR INFORMATION?
            </li>
            <li onClick={() => scrollToSection("section6")}>
              HOW DO WE KEEP YOUR INFORMATION SAFE?
            </li>
            <li onClick={() => scrollToSection("section7")}>
              DO WE COLLECT INFORMATION FROM MINORS?
            </li>
            <li onClick={() => scrollToSection("section8")}>
              WHAT ARE YOUR PRIVACY RIGHTS?
            </li>
            <li onClick={() => scrollToSection("section9")}>
              CONTROLS FOR DO-NOT-TRACK FEATURES
            </li>
            <li onClick={() => scrollToSection("section10")}>
              DO WE MAKE UPDATES TO THIS NOTICE?
            </li>
            <li onClick={() => scrollToSection("section11")}>
              HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </li>
            <li onClick={() => scrollToSection("section12")}>
              HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </li>
          </ol>
          <div
            ref={sectionRefs.section1}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              1. WHAT INFORMATION DO WE COLLECT?
            </span>
            <span className="text-body-xl font-semibold text-neutral-800">
              Personal information you disclose to us
            </span>
            <p>
              <span className="font-medium">In Short:</span> We collect personal
              information that you provide to us.
            </p>
            <p>
              We collect personal information that you voluntarily provide to us
              when you register on the Services, express an interest in
              obtaining information about us or our products and Services, when
              you participate in activities on the Services, or otherwise when
              you contact us.
            </p>
            <p>
              <span className="font-medium">
                Personal Information Provided by You.
              </span>{" "}
              The personal information that we collect depends on the context of
              your interactions with us and the Services, the choices you make,
              and the products and features you use. The personal information we
              collect may include the following:
            </p>
            <p>
              <li>names</li>
              <li>email addresses</li>
              <li>phone numbers</li>
            </p>
            <p>
              <span className="font-medium">Sensitive Information.</span> We do
              not process sensitive information.
            </p>
            <p className="font-medium">
              All personal information that you provide to us must be true,
              complete, and accurate, and you must notify us of any changes to
              such personal information.
            </p>
            <span className="text-body-2xl font-semibold text-neutral-800">
              Information collected from other sources
            </span>
            <p>
              <span className="font-medium">In Short:</span> We may collect
              limited data from public databases, marketing partners, and other
              outside sources.
            </p>
            <p>
              In order to enhance our ability to provide relevant marketing,
              offers, and services to you and update our records, we may obtain
              information about you from other sources, such as public
              databases, joint marketing partners, affiliate programs, data
              providers, and from other third parties. This information includes
              mailing addresses, job titles, email addresses, phone numbers,
              intent data (or user behavior data), Internet Protocol (IP)
              addresses, social media profiles, social media URLs, and custom
              profiles, for purposes of targeted advertising and event
              promotion.
            </p>
          </div>
          <div
            ref={sectionRefs.section2}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              2. HOW DO WE PROCESS YOUR INFORMATION?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We process your
              information to provide, improve, and administer our Services,
              communicate with you, for security and fraud prevention, and to
              comply with law. We may also process your information for other
              purposes with your consent.
            </p>
            <p className="font-medium">
              We process your personal information for a variety of reasons,
              depending on how you interact with our Services, including:
            </p>
            <li>
              <p>
                <span className="font-medium">
                  To facilitate account creation and authentication and
                  otherwise manage user accounts.
                </span>{" "}
                We may process your information so you can create and log in to
                your account, as well as keep your account in working order.
              </p>

              <p>
                <span className="font-medium">
                  To deliver and facilitate delivery of services to the user.
                </span>{" "}
                We may process your information to provide you with the
                requested service.
              </p>
              <p>
                <span className="font-medium"> To request feedback. </span>We
                may process your information when necessary to request feedback
                and to contact you about your use of our Services.
              </p>
              <p>
                <span className="font-medium">
                  To evaluate and improve our Services, products, marketing, and
                  your experience.
                </span>{" "}
                We may process your information when we believe it is necessary
                to identify usage trends, determine the effectiveness of our
                promotional campaigns, and to evaluate and improve our Services,
                products, marketing, and your experience.
              </p>
              <p>
                <span className="font-medium">To identify usage trends.</span>{" "}
                We may process information about how you use our Services to
                better understand how they are being used so we can improve
                them.
              </p>
            </li>
          </div>
          <div
            ref={sectionRefs.section3}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We may share
              information in specific situations described in this section
              and/or with the following third parties.
            </p>
            <p>
              We may need to share your personal information in the following
              situations:
            </p>
            <li>
              <span className="font-medium">Business Transfers.</span> We may
              share or transfer your information in connection with, or during
              negotiations of, any merger, sale of company assets, financing, or
              acquisition of all or a portion of our business to another
              company.
            </li>
          </div>
          <div
            ref={sectionRefs.section4}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We may use cookies
              and other tracking technologies to collect and store your
              information.
            </p>
            <p>
              We may use cookies and similar tracking technologies (like web
              beacons and pixels) to access or store information. Specific
              information about how we use such technologies and how you can
              refuse certain cookies is set out in our Cookie Notice.
            </p>
          </div>

          <div
            ref={sectionRefs.section5}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              5. HOW LONG DO WE KEEP YOUR INFORMATION?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We keep your
              information for as long as necessary to fulfill the purposes
              outlined in this privacy notice unless otherwise required by law.
            </p>
            <p>
              We will only keep your personal information for as long as it is
              necessary for the purposes set out in this privacy notice, unless
              a longer retention period is required or permitted by law (such as
              tax, accounting, or other legal requirements).
            </p>
            <p>
              When we have no ongoing legitimate business need to process your
              personal information, we will either delete or anonymize such
              information, or, if this is not possible (for example, because
              your personal information has been stored in backup archives),
              then we will securely store your personal information and isolate
              it from any further processing until deletion is possible.
            </p>
          </div>

          <div
            ref={sectionRefs.section6}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              6. HOW DO WE KEEP YOUR INFORMATION SAFE?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We aim to protect
              your personal information through a system of organizational and
              technical security measures.
            </p>
            <p>
              We have implemented appropriate and reasonable technical and
              organizational security measures designed to protect the security
              of any personal information we process. However, despite our
              safeguards and efforts to secure your information, no electronic
              transmission over the Internet or information storage technology
              can be guaranteed to be 100% secure, so we cannot promise or
              guarantee that hackers, cybercriminals, or other unauthorized
              third parties will not be able to defeat our security and
              improperly collect, access, steal, or modify your information.
              Although we will do our best to protect your personal information,
              transmission of personal information to and from our Services is
              at your own risk. You should only access the Services within a
              secure environment.
            </p>
          </div>

          <div
            ref={sectionRefs.section7}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              7. DO WE COLLECT INFORMATION FROM MINORS?
            </span>
            <p>
              <span className="font-medium">In Short:</span> We do not knowingly
              collect data from or market to children under 18 years of age.
            </p>
            <p>
              We do not knowingly solicit data from or market to children under
              18 years of age. By using the Services, you represent that you are
              at least 18 or that you are the parent or guardian of such a minor
              and consent to such minor dependent's use of the Services. If we
              learn that personal information from users less than 18 years of
              age has been collected, we will deactivate the account and take
              reasonable measures to promptly delete such data from our records.
              If you become aware of any data we may have collected from
              children under age 18, please contact us at
              contact@learnshackedu.com.
            </p>
          </div>

          <div
            ref={sectionRefs.section8}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              8. WHAT ARE YOUR PRIVACY RIGHTS?
            </span>
            <p>
              <span className="font-medium">In Short:</span> You may review,
              change, or terminate your account at any time, depending on your
              country, province, or state of residence.
            </p>
            <p>
              Withdrawing your consent: If we are relying on your consent to
              process your personal information, which may vary by country
              and/or implied depending on the applicable law, you have the right
              to withdraw your consent at any time. You can withdraw your
              consent at any time by contacting us by using the contact details
              provided in the section{" "}
              <span className="text-system-info-600">
                "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?"
              </span>{" "}
              below.
            </p>
            <p>
              However, please note that this will not affect the lawfulness of
              the processing before its withdrawal nor, when applicable law
              allows, will it affect the processing of your personal information
              conducted in reliance on lawful processing grounds other than
              consent.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Account Information
            </span>
            <p>
              If you would at any time like to review or change the information
              in your account or terminate your account, you can:
            </p>
            <p>
              <li>Contact us using the contact information provided.</li>
            </p>
            <p>
              Upon your request to terminate your account, we will deactivate or
              delete your account and information from our active databases.
              However, we may retain some information in our files to prevent
              fraud, troubleshoot problems, assist with any investigations,
              enforce our legal terms and/or comply with applicable legal
              requirements.
            </p>
            <p>
              Cookies and similar technologies: Most Web browsers are set to
              accept cookies by default. If you prefer, you can usually choose
              to set your browser to remove cookies and to reject cookies. If
              you choose to remove cookies or reject cookies, this could affect
              certain features or services of our Services.
            </p>
            <p>
              If you have questions or comments about your privacy rights, you
              may email us at contact@learnshackedu.com.
            </p>
          </div>

          <div
            ref={sectionRefs.section9}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              9. CONTROLS FOR DO-NOT-TRACK FEATURES
            </span>
            <p>
              Most web browsers and some mobile operating systems and mobile
              applications include a Do-Not-Track ("DNT") feature or setting you
              can activate to signal your privacy preference not to have data
              about your online browsing activities monitored and collected. At
              this time, no uniform technology standard for recognizing and
              implementing DNT signals has been finalized. As such, we do not
              currently respond to DNT browser signals or any other mechanism
              that automatically communicates your choice not to be tracked
              online. If a standard for online tracking is adopted that we must
              follow in the future, we will inform you about that practice in a
              revised version of this Privacy Notice.
            </p>
          </div>

          <div
            ref={sectionRefs.section10}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              10. DO WE MAKE UPDATES TO THIS NOTICE?
            </span>
            <p>
              <span className="font-medium">In Short:</span> Yes, we will update
              this notice as necessary to stay compliant with relevant laws.
            </p>
            <p>
              We may update this Privacy Notice from time to time. The updated
              version will be indicated by an updated "Revised" date at the top
              of this Privacy Notice. If we make material changes to this
              Privacy Notice, we may notify you either by prominently posting a
              notice of such changes or by directly sending you a notification.
              We encourage you to review this Privacy Notice frequently to be
              informed of how we are protecting your information.
            </p>
          </div>

          <div
            ref={sectionRefs.section11}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              11. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
            </span>
            <p>
              If you have questions or comments about this notice, you may email
              us at contact@learnshackedu.com or contact us by post at:
            </p>
            <p>
              Learnshack Private Limited
              <br />
              ALTF plot no. 21, 21A, Sector 142, Gautam Budh Nagar, Uttar
              Pradesh 201304
              <br />
              India
            </p>
          </div>
          <div
            ref={sectionRefs.section12}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              12. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM
              YOU?
            </span>

            <p>
              Based on the applicable laws of your country, you may have the
              right to request access to the personal information we collect
              from you, details about how we have processed it, correct
              inaccuracies, or delete your personal information. You may also
              have the right to withdraw your consent to our processing of your
              personal information. These rights may be limited in some
              circumstances by applicable law. To request to review, update, or
              delete your personal information, you may email us at
              contact@learnshackedu.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
