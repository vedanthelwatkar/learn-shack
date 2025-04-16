"use client";

import { useRef } from "react";

const TermsConditions = () => {
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
    section13: useRef(null),
    section14: useRef(null),
    section15: useRef(null),
    section16: useRef(null),
    section17: useRef(null),
    section18: useRef(null),
    section19: useRef(null),
    section20: useRef(null),
    section21: useRef(null),
    section22: useRef(null),
    section23: useRef(null),
  };

  const getNavbarHeight = () => {
    return window.innerWidth >= 768 ? 76 : 56;
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
        <div className="bg-brand-primary flex flex-col gap-4 justify-center items-center px-10 py-8 sm:py-[60px] md:px-20 lg:rounded-lg">
          <span className="text-body-lg text-neutral-100">
            Last Updated April 10, 2025{" "}
          </span>
          <h2 className="text-neutral-0 text-h2 font-heading font-bold text-center">
            Terms & Conditions
          </h2>
          <span className="text-body-lg text-neutral-100 text-center">
            At Learnshack Edu, transparency and trust are at the heart of
            everything we do. These terms outline the guidelines and
            expectations for using our services and website.
          </span>
        </div>
      </div>
      <div className="p-5 pb-10 md:p-10 md:pb-20 lg:p-20 lg:pt-5">
        <div className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]">
          <span className="text-body-2xl font-semibold text-neutral-800">
            AGREEMENT TO OUR LEGAL TERMS
          </span>
          <p>
            We are Learnshack Private Limited ("Company," "we," "us," "our"), a
            company registered in India at ALTF plot no. 21, 21A, Sector 142,
            Gautam Budh Nagar, Uttar Pradesh 201304.
          </p>
          <p>
            We operate the website{" "}
            <a
              href="https://learnshackedu.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-system-info-600"
            >
              https://learnshackedu.com
            </a>{" "}
            (the "Site"), as well as any other related products and services
            that refer or link to these legal terms (the "Legal Terms")
            (collectively, the "Services").
          </p>
          <p>
            You can contact us by phone at +91 81787 59588, email at
            contact@learnshack.com, or by mail to ALTF plot no. 21, 21A, Sector
            142, Gautam Budh Nagar, Uttar Pradesh 201304, India.
          </p>
          <p>
            These Legal Terms constitute a legally binding agreement made
            between you, whether personally or on behalf of an entity ("you"),
            and Learnshack Private Limited, concerning your access to and use of
            the Services. You agree that by accessing the Services, you have
            read, understood, and agreed to be bound by all of these Legal
            Terms. IF YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU
            ARE EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
            DISCONTINUE USE IMMEDIATELY.
          </p>
          <p>
            Supplemental terms and conditions or documents that may be posted on
            the Services from time to time are hereby expressly incorporated
            herein by reference. We reserve the right, in our sole discretion,
            to make changes or modifications to these Legal Terms at any time
            and for any reason. We will alert you about any changes by updating
            the "Last updated" date of these Legal Terms, and you waive any
            right to receive specific notice of each such change. It is your
            responsibility to periodically review these Legal Terms to stay
            informed of updates. You will be subject to, and will be deemed to
            have been made aware of and to have accepted, the changes in any
            revised Legal Terms by your continued use of the Services after the
            date such revised Legal Terms are posted.
          </p>
          <p>
            All users who are minors in the jurisdiction in which they reside
            (generally under the age of 18) must have the permission of, and be
            directly supervised by, their parent or guardian to use the
            Services. If you are a minor, you must have your parent or guardian
            read and agree to these Legal Terms prior to you using the Services.
          </p>
          <p>
            We recommend that you print a copy of these Legal Terms for your
            records.
          </p>
          <span
            className="text-body-2xl font-semibold text-neutral-800"
            ref={sectionRefs.tableOfContentRef}
          >
            TABLE OF CONTENTS
          </span>
          <ol className="list-decimal list-inside text-system-info-600 cursor-pointer">
            <li onClick={() => scrollToSection("section1")}>OUR SERVICES</li>
            <li onClick={() => scrollToSection("section2")}>
              INTELLECTUAL PROPERTY RIGHTS
            </li>
            <li onClick={() => scrollToSection("section3")}>
              USER REPRESENTATIONS
            </li>
            <li onClick={() => scrollToSection("section4")}>
              USER REGISTRATION
            </li>
            <li onClick={() => scrollToSection("section5")}>
              PROHIBITED ACTIVITIES
            </li>
            <li onClick={() => scrollToSection("section6")}>
              USER GENERATED CONTRIBUTIONS
            </li>
            <li onClick={() => scrollToSection("section7")}>
              CONTRIBUTION LICENSE
            </li>
            <li onClick={() => scrollToSection("section8")}>
              THIRD-PARTY WEBSITES AND CONTENT
            </li>
            <li onClick={() => scrollToSection("section9")}>
              SERVICES MANAGEMENT
            </li>
            <li onClick={() => scrollToSection("section10")}>PRIVACY POLICY</li>
            <li onClick={() => scrollToSection("section11")}>
              TERM AND TERMINATION
            </li>
            <li onClick={() => scrollToSection("section12")}>
              MODIFICATIONS AND INTERRUPTIONS
            </li>
            <li onClick={() => scrollToSection("section13")}>GOVERNING LAW</li>
            <li onClick={() => scrollToSection("section14")}>
              DISPUTE RESOLUTION
            </li>
            <li onClick={() => scrollToSection("section15")}>CORRECTIONS</li>
            <li onClick={() => scrollToSection("section16")}>DISCLAIMER</li>
            <li onClick={() => scrollToSection("section17")}>
              LIMITATIONS OF LIABILITY
            </li>
            <li onClick={() => scrollToSection("section18")}>
              INDEMNIFICATION
            </li>
            <li onClick={() => scrollToSection("section19")}>USER DATA</li>
            <li onClick={() => scrollToSection("section20")}>
              ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </li>
            <li onClick={() => scrollToSection("section21")}>
              SMS TEXT MESSAGING
            </li>
            <li onClick={() => scrollToSection("section22")}>MISCELLANEOUS</li>
            <li onClick={() => scrollToSection("section23")}>CONTACT US</li>
          </ol>
          <div
            ref={sectionRefs.section1}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              1. OUR SERVICES
            </span>
            <p>
              The information provided when using the Services is not intended
              for distribution to or use by any person or entity in any
              jurisdiction or country where such distribution or use would be
              contrary to law or regulation or which would subject us to any
              registration requirement within such jurisdiction or country.
              Accordingly, those persons who choose to access the Services from
              other locations do so on their own initiative and are solely
              responsible for compliance with local laws, if and to the extent
              local laws are applicable.
            </p>
          </div>
          <div
            ref={sectionRefs.section2}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              2. INTELLECTUAL PROPERTY RIGHTS
            </span>
            <span className="text-body-xl font-semibold text-neutral-800">
              Our intellectual property
            </span>
            <p>
              We are the owner or the licensee of all intellectual property
              rights in our Services, including all source code, databases,
              functionality, software, website designs, audio, video, text,
              photographs, and graphics in the Services (collectively, the
              "Content"), as well as the trademarks, service marks, and logos
              contained therein (the "Marks").
            </p>
            <p>
              Our Content and Marks are protected by copyright and trademark
              laws (and various other intellectual property rights and unfair
              competition laws) and treaties around the world.
            </p>
            <p>
              The Content and Marks are provided in or through the Services "AS
              IS" for your personal, non-commercial use or internal business
              purpose only.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Your use of our Services
            </span>
            <p>
              Subject to your compliance with these Legal Terms, including the
              "PROHIBITED ACTIVITIES" section below, we grant you a
              non-exclusive, non-transferable, revocable license to:
            </p>
            <p>
              <li>access the Services; and</li>
              <li>
                download or print a copy of any portion of the Content to which
                you have properly gained access,
              </li>
            </p>
            <p>
              solely for your personal, non-commercial use or internal business
              purpose.
            </p>
            <p>
              Except as set out in this section or elsewhere in our Legal Terms,
              no part of the Services and no Content or Marks may be copied,
              reproduced, aggregated, republished, uploaded, posted, publicly
              displayed, encoded, translated, transmitted, distributed, sold,
              licensed, or otherwise exploited for any commercial purpose
              whatsoever, without our express prior written permission.
            </p>
            <p>
              If you wish to make any use of the Services, Content, or Marks
              other than as set out in this section or elsewhere in our Legal
              Terms, please address your request to: contact@learnshack.com. If
              we ever grant you the permission to post, reproduce, or publicly
              display any part of our Services or Content, you must identify us
              as the owners or licensors of the Services, Content, or Marks and
              ensure that any copyright or proprietary notice appears or is
              visible on posting, reproducing, or displaying our Content.
            </p>
            <p>
              We reserve all rights not expressly granted to you in and to the
              Services, Content, and Marks.
            </p>
            <p>
              Any breach of these Intellectual Property Rights will constitute a
              material breach of our Legal Terms and your right to use our
              Services will terminate immediately.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Your submissions
            </span>
            <p>
              Please review this section and the{" "}
              <span
                className="text-system-info-600 cursor-pointer"
                onClick={() => scrollToSection("section5")}
              >
                "PROHIBITED ACTIVITIES"
              </span>{" "}
              section carefully prior to using our Services to understand the
              (a) rights you give us and (b) obligations you have when you post
              or upload any content through the Services.
            </p>
            <p>
              Submissions: By directly sending us any question, comment,
              suggestion, idea, feedback, or other information about the
              Services ("Submissions"), you agree to assign to us all
              intellectual property rights in such Submission. You agree that we
              shall own this Submission and be entitled to its unrestricted use
              and dissemination for any lawful purpose, commercial or otherwise,
              without acknowledgment or compensation to you.
            </p>
            <p>
              You are responsible for what you post or upload: By sending us
              Submissions through any part of the Services you:
            </p>
            <p>
              <li>
                confirm that you have read and agree with our{" "}
                <span
                  className="text-system-info-600 cursor-pointer"
                  onClick={() => scrollToSection("section5")}
                >
                  "PROHIBITED ACTIVITIES"
                </span>{" "}
                and will not post, send, publish, upload, or transmit through
                the Services any Submission that is illegal, harassing, hateful,
                harmful, defamatory, obscene, bullying, abusive, discriminatory,
                threatening to any person or group, sexually explicit, false,
                inaccurate, deceitful, or misleading;
              </li>
              <li>
                to the extent permissible by applicable law, waive any and all
                moral rights to any such Submission;
              </li>
              <li>
                warrant that any such Submission are original to you or that you
                have the necessary rights and licenses to submit such
                Submissions and that you have full authority to grant us the
                above-mentioned rights in relation to your Submissions; and
              </li>
              <li>
                warrant and represent that your Submissions do not constitute
                confidential information.
              </li>
            </p>
            <p>
              You are solely responsible for your Submissions and you expressly
              agree to reimburse us for any and all losses that we may suffer
              because of your breach of (a) this section, (b) any third party's
              intellectual property rights, or (c) applicable law.
            </p>
          </div>
          <div
            ref={sectionRefs.section3}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              3. USER REPRESENTATIONS
            </span>
            <p>
              By using the Services, you represent and warrant that: (1) all
              registration information you submit will be true, accurate,
              current, and complete; (2) you will maintain the accuracy of such
              information and promptly update such registration information as
              necessary; (3) you have the legal capacity and you agree to comply
              with these Legal Terms; (4) you are not a minor in the
              jurisdiction in which you reside, or if a minor, you have received
              parental permission to use the Services; (5) you will not access
              the Services through automated or non-human means, whether through
              a bot, script or otherwise; (6) you will not use the Services for
              any illegal or unauthorized purpose; and (7) your use of the
              Services will not violate any applicable law or regulation.
            </p>
            <p>
              If you provide any information that is untrue, inaccurate, not
              current, or incomplete, we have the right to suspend or terminate
              your account and refuse any and all current or future use of the
              Services (or any portion thereof).
            </p>
          </div>
          <div
            ref={sectionRefs.section4}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              4. USER REGISTRATION
            </span>
            <p>
              You may be required to register to use the Services. You agree to
              keep your password confidential and will be responsible for all
              use of your account and password. We reserve the right to remove,
              reclaim, or change a username you select if we determine, in our
              sole discretion, that such username is inappropriate, obscene, or
              otherwise objectionable.
            </p>
          </div>
          <div
            ref={sectionRefs.section5}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              5. PROHIBITED ACTIVITIES
            </span>
            <p>
              You may not access or use the Services for any purpose other than
              that for which we make the Services available. The Services may
              not be used in connection with any commercial endeavors except
              those that are specifically endorsed or approved by us.
            </p>
            <p>As a user of the Services, you agree not to:</p>
            <p>
              <li>
                Systematically retrieve data or other content from the Services
                to create or compile, directly or indirectly, a collection,
                compilation, database, or directory without written permission
                from us.
              </li>
              <li>
                Trick, defraud, or mislead us and other users, especially in any
                attempt to learn sensitive account information such as user
                passwords.
              </li>
              <li>
                Circumvent, disable, or otherwise interfere with
                security-related features of the Services, including features
                that prevent or restrict the use or copying of any Content or
                enforce limitations on the use of the Services and/or the
                Content contained therein.
              </li>
              <li>
                Disparage, tarnish, or otherwise harm, in our opinion, us and/or
                the Services.
              </li>
              <li>
                Use any information obtained from the Services in order to
                harass, abuse, or harm another person.
              </li>
              <li>
                Make improper use of our support services or submit false
                reports of abuse or misconduct.
              </li>
              <li>
                Use the Services in a manner inconsistent with any applicable
                laws or regulations.
              </li>
              <li>
                Engage in unauthorized framing of or linking to the Services.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit)
                viruses, Trojan horses, or other material, including excessive
                use of capital letters and spamming (continuous posting of
                repetitive text), that interferes with any party's uninterrupted
                use and enjoyment of the Services or modifies, impairs,
                disrupts, alters, or interferes with the use, features,
                functions, operation, or maintenance of the Services.
              </li>
              <li>
                Engage in any automated use of the system, such as using scripts
                to send comments or messages, or using any data mining, robots,
                or similar data gathering and extraction tools.
              </li>
              <li>
                Delete the copyright or other proprietary rights notice from any
                Content.
              </li>
              <li>
                Attempt to impersonate another user or person or use the
                username of another user.
              </li>
              <li>
                Upload or transmit (or attempt to upload or to transmit) any
                material that acts as a passive or active information collection
                or transmission mechanism, including without limitation, clear
                graphics interchange formats ("gifs"), 1×1 pixels, web bugs,
                cookies, or other similar devices (sometimes referred to as
                "spyware" or "passive collection mechanisms" or "pcms").
              </li>
              <li>
                Interfere with, disrupt, or create an undue burden on the
                Services or the networks or services connected to the Services.
              </li>
              <li>
                Harass, annoy, intimidate, or threaten any of our employees or
                agents engaged in providing any portion of the Services to you.
              </li>
              <li>
                Attempt to bypass any measures of the Services designed to
                prevent or restrict access to the Services, or any portion of
                the Services.
              </li>
            </p>
            <p>
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </div>
          <div
            ref={sectionRefs.section6}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              6. USER GENERATED CONTRIBUTIONS
            </span>
            <p>
              The Services does not offer users to submit or post content. We
              may provide you with the opportunity to create, submit, post,
              display, transmit, perform, publish, distribute, or broadcast
              content and materials to us or on the Services, including but not
              limited to text, writings, video, audio, photographs, graphics,
              comments, suggestions, or personal information or other material
              (collectively, "Contributions"). Contributions may be viewable by
              other users of the Services and through third-party websites. As
              such, any Contributions you transmit may be treated in accordance
              with the Services' Privacy Policy. When you create or make
              available any Contributions, you thereby represent and warrant
              that:
            </p>
            <p>
              <li>
                The creation, distribution, transmission, public display, or
                performance, and the accessing, downloading, or copying of your
                Contributions do not and will not infringe the proprietary
                rights, including but not limited to the copyright, patent,
                trademark, trade secret, or moral rights of any third party.
              </li>
              <li>
                You are the creator and owner of or have the necessary licenses,
                rights, consents, releases, and permissions to use and to
                authorize us, the Services, and other users of the Services to
                use your Contributions in any manner contemplated by the
                Services and these Legal Terms.
              </li>
              <li>
                You have the written consent, release, and/or permission of each
                and every identifiable individual person in your Contributions
                to use the name or likeness of each and every such identifiable
                individual person to enable inclusion and use of your
                Contributions in any manner contemplated by the Services and
                these Legal Terms.
              </li>
              <li>
                Your Contributions are not false, inaccurate, or misleading.
              </li>
              <li>
                Your Contributions are not unsolicited or unauthorized
                advertising, promotional materials, pyramid schemes, chain
                letters, spam, mass mailings, or other forms of solicitation.
              </li>
              <li>
                Your Contributions are not obscene, lewd, lascivious, filthy,
                violent, harassing, libelous, slanderous, or otherwise
                objectionable (as determined by us).
              </li>
              <li>
                Your Contributions do not ridicule, mock, disparage, intimidate,
                or abuse anyone.
              </li>
              <li>
                Your Contributions are not used to harass or threaten (in the
                legal sense of those terms) any other person and to promote
                violence against a specific person or class of people.
              </li>
              <li>
                Your Contributions do not violate any applicable law,
                regulation, or rule.
              </li>
              <li>
                Your Contributions do not violate the privacy or publicity
                rights of any third party.
              </li>
              <li>
                Your Contributions do not violate any applicable law concerning
                child pornography, or otherwise intended to protect the health
                or well-being of minors.
              </li>
              <li>
                Your Contributions do not include any offensive comments that
                are connected to race, national origin, gender, sexual
                preference, or physical handicap.
              </li>
              <li>
                Your Contributions do not otherwise violate, or link to material
                that violates, any provision of these Legal Terms, or any
                applicable law or regulation.
              </li>
            </p>
            <p>
              Any use of the Services in violation of the foregoing violates
              these Legal Terms and may result in, among other things,
              termination or suspension of your rights to use the Services.
            </p>
          </div>

          <div
            ref={sectionRefs.section7}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              7. CONTRIBUTION LICENSE
            </span>
            <p>
              You and Services agree that we may access, store, process, and use
              any information and personal data that you provide following the
              terms of the Privacy Policy and your choices (including settings).
            </p>
            <p>
              By submitting suggestions or other feedback regarding the
              Services, you agree that we can use and share such feedback for
              any purpose without compensation to you.
            </p>
            <p>
              We do not assert any ownership over your Contributions. You retain
              full ownership of all of your Contributions and any intellectual
              property rights or other proprietary rights associated with your
              Contributions. We are not liable for any statements or
              representations in your Contributions provided by you in any area
              on the Services. You are solely responsible for your Contributions
              to the Services and you expressly agree to exonerate us from any
              and all responsibility and to refrain from any legal action
              against us regarding your Contributions.
            </p>
          </div>

          <div
            ref={sectionRefs.section8}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              8. THIRD-PARTY WEBSITES AND CONTENT
            </span>
            <p>
              The Services may contain (or you may be sent via the Site) links
              to other websites ("Third-Party Websites") as well as articles,
              photographs, text, graphics, pictures, designs, music, sound,
              video, information, applications, software, and other content or
              items belonging to or originating from third parties ("Third-Party
              Content"). Such Third-Party Websites and Third-Party Content are
              not investigated, monitored, or checked for accuracy,
              appropriateness, or completeness by us, and we are not responsible
              for any Third-Party Websites accessed through the Services or any
              Third-Party Content posted on, available through, or installed
              from the Services, including the content, accuracy, offensiveness,
              opinions, reliability, privacy practices, or other policies of or
              contained in the Third-Party Websites or the Third-Party Content.
              Inclusion of, linking to, or permitting the use or installation of
              any Third-Party Websites or any Third-Party Content does not imply
              approval or endorsement thereof by us. If you decide to leave the
              Services and access the Third-Party Websites or to use or install
              any Third-Party Content, you do so at your own risk, and you
              should be aware these Legal Terms no longer govern. You should
              review the applicable terms and policies, including privacy and
              data gathering practices, of any website to which you navigate
              from the Services or relating to any applications you use or
              install from the Services. Any purchases you make through
              Third-Party Websites will be through other websites and from other
              companies, and we take no responsibility whatsoever in relation to
              such purchases which are exclusively between you and the
              applicable third party. You agree and acknowledge that we do not
              endorse the products or services offered on Third-Party Websites
              and you shall hold us blameless from any harm caused by your
              purchase of such products or services. Additionally, you shall
              hold us blameless from any losses sustained by you or harm caused
              to you relating to or resulting in any way from any Third-Party
              Content or any contact with Third-Party Websites.
            </p>
          </div>

          <div
            ref={sectionRefs.section9}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              9. SERVICES MANAGEMENT
            </span>
            <p>
              We reserve the right, but not the obligation, to: (1) monitor the
              Services for violations of these Legal Terms; (2) take appropriate
              legal action against anyone who, in our sole discretion, violates
              the law or these Legal Terms, including without limitation,
              reporting such user to law enforcement authorities; (3) in our
              sole discretion and without limitation, refuse, restrict access
              to, limit the availability of, or disable (to the extent
              technologically feasible) any of your Contributions or any portion
              thereof; (4) in our sole discretion and without limitation,
              notice, or liability, to remove from the Services or otherwise
              disable all files and content that are excessive in size or are in
              any way burdensome to our systems; and (5) otherwise manage the
              Services in a manner designed to protect our rights and property
              and to facilitate the proper functioning of the Services.
            </p>
          </div>

          <div
            ref={sectionRefs.section10}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              10. PRIVACY POLICY
            </span>
            <p>
              We care about data privacy and security. Please review our Privacy
              Policy:{" "}
              <a
                href="http://learnshackedu.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-system-info-600"
              >
                http://learnshackedu.com/privacy-policy
              </a>
              . By using the Services, you agree to be bound by our Privacy
              Policy, which is incorporated into these Legal Terms. Please be
              advised the Services are hosted in India. If you access the
              Services from any other region of the world with laws or other
              requirements governing personal data collection, use, or
              disclosure that differ from applicable laws in India, then through
              your continued use of the Services, you are transferring your data
              to India, and you expressly consent to have your data transferred
              to and processed in India.
            </p>
          </div>

          <div
            ref={sectionRefs.section11}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              11. TERM AND TERMINATION
            </span>
            <p>
              These Legal Terms shall remain in full force and effect while you
              use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE
              LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND
              WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE
              SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON
              FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR
              BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN
              THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY
              TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE YOUR
              ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY
              TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.
            </p>
            <p>
              If we terminate or suspend your account for any reason, you are
              prohibited from registering and creating a new account under your
              name, a fake or borrowed name, or the name of any third party,
              even if you may be acting on behalf of the third party. In
              addition to terminating or suspending your account, we reserve the
              right to take appropriate legal action, including without
              limitation pursuing civil, criminal, and injunctive redress.
            </p>
          </div>

          <div
            ref={sectionRefs.section12}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              12. MODIFICATIONS AND INTERRUPTIONS
            </span>
            <p>
              We reserve the right to change, modify, or remove the contents of
              the Services at any time or for any reason at our sole discretion
              without notice. However, we have no obligation to update any
              information on our Services. We will not be liable to you or any
              third party for any modification, price change, suspension, or
              discontinuance of the Services.
            </p>
            <p>
              We cannot guarantee the Services will be available at all times.
              We may experience hardware, software, or other problems or need to
              perform maintenance related to the Services, resulting in
              interruptions, delays, or errors. We reserve the right to change,
              revise, update, suspend, discontinue, or otherwise modify the
              Services at any time or for any reason without notice to you. You
              agree that we have no liability whatsoever for any loss, damage,
              or inconvenience caused by your inability to access or use the
              Services during any downtime or discontinuance of the Services.
              Nothing in these Legal Terms will be construed to obligate us to
              maintain and support the Services or to supply any corrections,
              updates, or releases in connection therewith.
            </p>
          </div>

          <div
            ref={sectionRefs.section13}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              13. GOVERNING LAW
            </span>
            <p>
              These Legal Terms shall be governed by and defined following the
              laws of India. Learnshack Private Limited and yourself irrevocably
              consent that the courts of India shall have exclusive jurisdiction
              to resolve any dispute which may arise in connection with these
              Legal Terms.
            </p>
          </div>

          <div
            ref={sectionRefs.section14}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              14. DISPUTE RESOLUTION
            </span>
            <span className="text-body-xl font-semibold text-neutral-800">
              Binding Arbitration
            </span>
            <p>
              Any dispute arising out of or in connection with these Legal
              Terms, including any question regarding its existence, validity,
              or termination, shall be referred to and finally resolved by the
              International Commercial Arbitration Court under the European
              Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)
              according to the Rules of this ICAC, which, as a result of
              referring to it, is considered as the part of this clause. The
              number of arbitrators shall be three (3). The seat, or legal
              place, or arbitration shall be Noida, India. The language of the
              proceedings shall be English. The governing law of these Legal
              Terms shall be substantive law of India.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Restrictions
            </span>
            <p>
              The Parties agree that any arbitration shall be limited to the
              Dispute between the Parties individually. To the full extent
              permitted by law, (a) no arbitration shall be joined with any
              other proceeding; (b) there is no right or authority for any
              Dispute to be arbitrated on a class-action basis or to utilize
              class action procedures; and (c) there is no right or authority
              for any Dispute to be brought in a purported representative
              capacity on behalf of the general public or any other persons.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Exceptions to Arbitration
            </span>
            <p>
              The Parties agree that the following Disputes are not subject to
              the above provisions concerning binding arbitration: (a) any
              Disputes seeking to enforce or protect, or concerning the validity
              of, any of the intellectual property rights of a Party; (b) any
              Dispute related to, or arising from, allegations of theft, piracy,
              invasion of privacy, or unauthorized use; and (c) any claim for
              injunctive relief. If this provision is found to be illegal or
              unenforceable, then neither Party will elect to arbitrate any
              Dispute falling within that portion of this provision found to be
              illegal or unenforceable and such Dispute shall be decided by a
              court of competent jurisdiction within the courts listed for
              jurisdiction above, and the Parties agree to submit to the
              personal jurisdiction of that court.
            </p>
          </div>

          <div
            ref={sectionRefs.section15}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              15. CORRECTIONS
            </span>
            <p>
              There may be information on the Services that contains
              typographical errors, inaccuracies, or omissions, including
              descriptions, pricing, availability, and various other
              information. We reserve the right to correct any errors,
              inaccuracies, or omissions and to change or update the information
              on the Services at any time, without prior notice.
            </p>
          </div>

          <div
            ref={sectionRefs.section16}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              16. DISCLAIMER
            </span>
            <p>
              THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU
              AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO
              THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES,
              EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE
              THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND
              NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT
              THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE
              CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE
              SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY
              (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS,
              (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
              RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY
              UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND
              ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED
              THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR
              FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE
              LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY
              THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
              MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A
              RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE
              MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE,
              GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE
              ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY
              HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED
              IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO
              OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION
              BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.
              AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR
              IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE
              CAUTION WHERE APPROPRIATE.
            </p>
          </div>

          <div
            ref={sectionRefs.section17}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              17. LIMITATIONS OF LIABILITY
            </span>
            <p>
              IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE
              LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT,
              CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE
              DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR
              OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE
              HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
            </p>
          </div>

          <div
            ref={sectionRefs.section18}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              18. INDEMNIFICATION
            </span>
            <p>
              You agree to defend, indemnify, and hold us harmless, including
              our subsidiaries, affiliates, and all of our respective officers,
              agents, partners, and employees, from and against any loss,
              damage, liability, claim, or demand, including reasonable
              attorneys' fees and expenses, made by any third party due to or
              arising out of: (1) your use of the Services; (2) breach of these
              Legal Terms; (3) any breach of your representations and warranties
              set forth in these Legal Terms; (4) your violation of the rights
              of a third party, including but not limited to intellectual
              property rights; or (5) any overt harmful act toward any other
              user of the Services with whom you connected via the Services.
              Notwithstanding the foregoing, we reserve the right, at your
              expense, to assume the exclusive defense and control of any matter
              for which you are required to indemnify us, and you agree to
              cooperate, at your expense, with our defense of such claims. We
              will use reasonable efforts to notify you of any such claim,
              action, or proceeding which is subject to this indemnification
              upon becoming aware of it.
            </p>
          </div>

          <div
            ref={sectionRefs.section19}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              19. USER DATA
            </span>
            <p>
              We will maintain certain data that you transmit to the Services
              for the purpose of managing the performance of the Services, as
              well as data relating to your use of the Services. Although we
              perform regular routine backups of data, you are solely
              responsible for all data that you transmit or that relates to any
              activity you have undertaken using the Services. You agree that we
              shall have no liability to you for any loss or corruption of any
              such data, and you hereby waive any right of action against us
              arising from any such loss or corruption of such data.
            </p>
          </div>

          <div
            ref={sectionRefs.section20}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES
            </span>
            <p>
              Visiting the Services, sending us emails, and completing online
              forms constitute electronic communications. You consent to receive
              electronic communications, and you agree that all agreements,
              notices, disclosures, and other communications we provide to you
              electronically, via email and on the Services, satisfy any legal
              requirement that such communication be in writing. YOU HEREBY
              AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND
              OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES,
              AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA
              THE SERVICES. You hereby waive any rights or requirements under
              any statutes, regulations, rules, ordinances, or other laws in any
              jurisdiction which require an original signature or delivery or
              retention of non-electronic records, or to payments or the
              granting of credits by any means other than electronic means.
            </p>
          </div>

          <div
            ref={sectionRefs.section21}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              21. SMS TEXT MESSAGING
            </span>
            <span className="text-body-xl font-semibold text-neutral-800">
              Opting Out
            </span>
            <p>
              If at any time you wish to stop receiving SMS messages from us,
              please call us at +91 81787 59588.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Message and Data Rates
            </span>
            <p>
              Please be aware that message and data rates may apply to any SMS
              messages sent or received. The rates are determined by your
              carrier and the specifics of your mobile plan.
            </p>
            <span className="text-body-xl font-semibold text-neutral-800">
              Support
            </span>
            <p>
              If you have any questions or need assistance regarding our SMS
              communications, please email us at contact@learnshack.com or call
              at +91 81787 59588.
            </p>
          </div>

          <div
            ref={sectionRefs.section22}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              22. MISCELLANEOUS
            </span>
            <p>
              These Legal Terms and any policies or operating rules posted by us
              on the Services or in respect to the Services constitute the
              entire agreement and understanding between you and us. Our failure
              to exercise or enforce any right or provision of these Legal Terms
              shall not operate as a waiver of such right or provision. These
              Legal Terms operate to the fullest extent permissible by law. We
              may assign any or all of our rights and obligations to others at
              any time. We shall not be responsible or liable for any loss,
              damage, delay, or failure to act caused by any cause beyond our
              reasonable control. If any provision or part of a provision of
              these Legal Terms is determined to be unlawful, void, or
              unenforceable, that provision or part of the provision is deemed
              severable from these Legal Terms and does not affect the validity
              and enforceability of any remaining provisions. There is no joint
              venture, partnership, employment or agency relationship created
              between you and us as a result of these Legal Terms or use of the
              Services. You agree that these Legal Terms will not be construed
              against us by virtue of having drafted them. You hereby waive any
              and all defenses you may have based on the electronic form of
              these Legal Terms and the lack of signing by the parties hereto to
              execute these Legal Terms.
            </p>
          </div>

          <div
            ref={sectionRefs.section23}
            className="flex flex-col gap-4 text-neutral-700 text-body-lg justify-self-center max-w-[800px]"
          >
            <span className="text-body-2xl pl-1 font-semibold text-neutral-800">
              23. CONTACT US
            </span>
            <p>
              In order to resolve a complaint regarding the Services or to
              receive further information regarding use of the Services, please
              contact us at:
            </p>
            <p>
              Learnshack Private Limited
              <br />
              ALTF plot no. 21, 21A, Sector 142, Gautam Budh Nagar, Uttar
              Pradesh 201304
              <br />
              India
              <br />
              Phone: +91 81787 59588
              <br />
              contact@learnshack.com
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
