// import { useEffect } from "react";
// import { useScrollTo } from "../components/hooks/useScrollTo";
// import { Link } from "react-router-dom";
// import logo from "../assets/nexlify-logo-transparent-cropped.png";
// import { ArrowLeft } from "lucide-react";
// import { motion } from "framer-motion";

// const fadeUp = {
//   hidden: { opacity: 0, y: 40 },
//   show: ({ index = 0, delay = 0 }) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.7,
//       delay: delay + index * 0.19,
//       ease: [0.25, 0.1, 0.25, 1],
//     },
//   }),
// };

// export default function PrivacyPolicy() {
//   // scroll to top on mount
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <div className="bg-black min-h-screen text-white">
//       <header className="fixed z-50 w-full flex items-center justify-between px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)] py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
//         <Link
//           to="/"
//           className="w-[160px] xl:w-[200px]  3xl:w-[350px] flex items-center"
//         >
//           <img
//             className="w-full h-full object-contain"
//             src={logo}
//             alt="Boodmoard logo"
//           />
//         </Link>
//         <Link
//           to="/"
//           className="flex items-center justify-center gap-1 group transition-colors duration-200 ease-in cursor-pointer  text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-zinc-400 hover:text-[#4CAF4F]  duration-200"
//         >
//           <ArrowLeft
//             size={22}
//             strokeWidth={2}
//             className="3xl:w-9 3xl:h-9 group-hover:-translate-x-2 transition-transform duration-200 ease-in"
//           />
//           Back to Home
//         </Link>
//       </header>

//       <div className="max-w-3xl 3xl:max-w-6xl mx-auto px-6 pt-36 pb-24">
//         {/* Header */}
//           <motion.div
//           variants={fadeUp}
//           initial="hidden"
//           animate="show"
//           custom={{ index: 0 }}

//         className="mb-12">
//           <p className="uppercase tracking-[5px] text-[#4CAF4F] text-xs xl:text-[14px] 3xl:text-base font-semibold mb-4">
//             Legal
//           </p>
//           <h1 className="text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-white mb-4">
//             Privacy Policy
//           </h1>
//           <p className="text-zinc-500 text-sm xl:text-base 3xl:text-lg">
//             Last updated: July 2026
//           </p>
//           <div className="w-full h-px bg-white/10 mt-8" />
//         </motion.div>

//         {/* Content */}
//         <div className="flex flex-col gap-10 text-zinc-400 leading-8">
//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               1. Who We Are
//             </h2>
//             <p className="xl:text-base 3xl:text-lg">
//               Nexlify Creative Studio ("we", "our", "us") is a digital agency
//               based in Karachi, Pakistan. We provide web development, UI/UX
//               design, brand identity, and digital marketing services. This
//               Privacy Policy explains how we collect, use, and protect your
//               information when you visit our website or contact us.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               2. Information We Collect
//             </h2>
//             <p className="mb-4 xl:text-base 3xl:text-lg">
//               When you fill out our contact form, we collect the following
//               information:
//             </p>
//             <ul className="flex flex-col gap-2 ml-4">
//               {[
//                 "Full name",
//                 "Email address",
//                 "Phone number (optional)",
//                 "Service you're interested in",
//                 "Project budget range",
//                 "Project details and description",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               3. How We Use Your Information
//             </h2>
//             <p className="mb-4 xl:text-base 3xl:text-lg">
//               We use the information you provide to:
//             </p>
//             <ul className="flex flex-col gap-2 ml-4">
//               {[
//                 "Respond to your project inquiry",
//                 "Discuss your project requirements",
//                 "Send you quotes or proposals",
//                 "Follow up on our previous conversations",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//             <p className="mt-4 xl:text-base 3xl:text-lg">
//               We do not sell, rent, or share your personal information with
//               third parties for marketing purposes.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               4. Data Storage
//             </h2>
//             <p className="xl:text-base 3xl:text-lg">
//               Contact form submissions are stored securely in Google Sheets,
//               accessible only to our team. We retain your information for as
//               long as necessary to fulfill your project or respond to your
//               inquiry. You can request deletion of your data at any time by
//               emailing us.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl font-semibold mb-3">
//               5. Cookies
//             </h2>
//             <p className="xl:text-base 3xl:text-lg">
//               Our website does not use tracking cookies or third-party analytics
//               tools. We do not track your browsing behaviour across other
//               websites.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl font-semibold mb-3">
//               6. Your Rights
//             </h2>
//             <p className="mb-4">You have the right to:</p>
//             <ul className="flex flex-col gap-2 ml-4">
//               {[
//                 "Request access to the personal data we hold about you",
//                 "Request correction of inaccurate data",
//                 "Request deletion of your data",
//                 "Withdraw consent at any time",
//               ].map((item) => (
//                 <li key={item} className="flex items-start gap-3">
//                   <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               7. Contact Us
//             </h2>
//             <p className="xl:text-base 3xl:text-lg">
//               If you have any questions about this Privacy Policy or how we
//               handle your data, please contact us at{" "}
//               <a
//                 href="mailto:hello@boodmoard.com"
//                 className="text-[#4CAF4F] hover:underline xl:text-base 3xl:text-lg"
//               >
//                 hello@nexlify.com
//               </a>
//             </p>
//           </div>

//           <div className="w-full h-px bg-white/10" />

//           <p className="text-zinc-600 text-sm xl:text-base 3xl:text-lg">
//             By using our website and submitting our contact form, you agree to
//             this Privacy Policy.
//           </p>
//         </div>

//         {/* Back button */}

//         <Link
//           to="/"
//           className="flex items-center justify-center mt-16 gap-1 group  cursor-pointer  text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-[#4CAF4F] "
//         >
//           <ArrowLeft
//             size={22}
//             strokeWidth={2}
//             className="3xl:w-9 3xl:h-9 group-hover:-translate-x-2 transition-transform duration-200 ease-in"
//           />
//           Back to Home
//         </Link>
//       </div>
//     </div>
//   );
// }

import { useEffect, useLayoutEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import logo from "../assets/nexlify-logo-transparent-bg.png";
import { useLoader } from "../components/context/LoaderContext";
import { useRouteChangeStairs } from "../components/context/RouteChangeStairsContext";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 40,
  },

  show: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),

  routeShow: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.5 + index * 0.19, // extra delay only on route change
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const sections = [
  {
    title: "1. Who We Are",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Nexlify Creative Studio ("we", "our", "us") is a digital agency based in
        Karachi, Pakistan. We provide web development, UI/UX design, brand
        identity, and digital marketing services. This Privacy Policy explains
        how we collect, use, and protect your information when you visit our
        website or contact us.
      </p>
    ),
  },
  {
    title: "2. Information We Collect",
    body: (
      <>
        <p className="mb-4 xl:text-base 3xl:text-lg">
          When you fill out our contact form, we collect the following
          information:
        </p>
        <ul className="flex flex-col gap-2 ml-4">
          {[
            "Full name",
            "Email address",
            "Phone number (optional)",
            "Service you're interested in",
            "Project budget range",
            "Project details and description",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "3. How We Use Your Information",
    body: (
      <>
        <p className="mb-4 xl:text-base 3xl:text-lg">
          We use the information you provide to:
        </p>
        <ul className="flex flex-col gap-2 ml-4">
          {[
            "Respond to your project inquiry",
            "Discuss your project requirements",
            "Send you quotes or proposals",
            "Follow up on our previous conversations",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 xl:text-base 3xl:text-lg">
          We do not sell, rent, or share your personal information with third
          parties for marketing purposes.
        </p>
      </>
    ),
  },
  {
    title: "4. Data Storage",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Contact form submissions are stored securely in Google Sheets,
        accessible only to our team. We retain your information for as long as
        necessary to fulfill your project or respond to your inquiry. You can
        request deletion of your data at any time by emailing us.
      </p>
    ),
  },
  {
    title: "5. Cookies",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Our website does not use tracking cookies or third-party analytics
        tools. We do not track your browsing behaviour across other websites.
      </p>
    ),
  },
  {
    title: "6. Your Rights",
    body: (
      <>
        <p className="mb-4">You have the right to:</p>
        <ul className="flex flex-col gap-2 ml-4">
          {[
            "Request access to the personal data we hold about you",
            "Request correction of inaccurate data",
            "Request deletion of your data",
            "Withdraw consent at any time",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
              {item}
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    title: "7. Contact Us",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        If you have any questions about this Privacy Policy or how we handle
        your data, please contact us at{" "}
        <a
          href="mailto:hello@nexlify.com"
          className="text-[#4CAF4F] hover:underline xl:text-base 3xl:text-lg"
        >
          hello@nexlify.com
        </a>
      </p>
    ),
  },
];

export default function PrivacyPolicy() {
  useLayoutEffect(() => {
    document.title = "Privacy Policy — Nexlify Creative Studio";

    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Read Nexlify's Privacy Policy to understand how we collect, use, and protect your personal information when you contact us or use our services.",
      );

    let canonical = document.querySelector("link[rel='canonical']");
    if (canonical)
      canonical.setAttribute("href", "https://nexlify.com/privacy");

    // cleanup
    return () => {
      document.title = "Nexlify — Creative Digital Agency";
      if (meta)
        meta.setAttribute(
          "content",
          "Nexlify is a creative digital agency building modern websites, bold brand identities, and high-converting digital products. Based in Karachi, Pakistan.",
        );
      if (canonical) canonical.setAttribute("href", "https://nexlify.com/");
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { loaded } = useLoader();

  const { isLoaded, isRouteChanging } = useRouteChangeStairs();

  return (
    <div className="bg-black min-h-screen text-white   ">
      <header className="fixed z-50 w-full   flex items-center justify-between px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)] py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
        <Link
          to="/"
          className="w-[140px] xl:w-[160px]  3xl:w-[220px] flex items-center"
        >
          <img
            className="w-full h-full object-contain"
            src={logo}
            alt="Boodmoard logo"
          />
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center gap-1 group transition-colors duration-200 ease-in cursor-pointer text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-zinc-400 hover:text-[#4CAF4F] duration-200"
        >
          <ArrowLeft
            size={22}
            strokeWidth={2}
            className="3xl:w-9 3xl:h-9 group-hover:-translate-x-2 transition-transform duration-200 ease-in"
          />
          Back to Home
        </Link>
      </header>

      <div className="max-w-3xl  3xl:max-w-6xl mx-auto px-6 pt-36 pb-24">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isLoaded ? "routeShow" : loaded ? "show" : "hidden"}
          custom={0}
          className="mb-12"
        >
          <p className="uppercase tracking-[5px] text-[#4CAF4F] text-xs xl:text-[14px] 3xl:text-base font-semibold mb-4">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl xl:text-6xl 3xl:text-7xl font-bold text-white mb-4">
            Privacy Policy
          </h1>
          <p className="text-zinc-500 text-sm xl:text-base 3xl:text-lg">
            Last updated: July 2026
          </p>
          <div className="w-full h-px bg-white/10 mt-8" />
        </motion.div>

        {/* Content */}
        <div className="flex flex-col gap-10 text-zinc-400 leading-8">
          {sections.map((section, i) => (
            <motion.div
              key={section.title}
              variants={fadeUp}
              initial="hidden"
              animate={isLoaded ? "routeShow" : loaded ? "show" : "hidden"}
              custom={i + 1}
            >
              <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
                {section.title}
              </h2>
              {section.body}
            </motion.div>
          ))}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isLoaded ? "routeShow" : loaded ? "show" : "hidden"}
            custom={sections.length + 1}
          >
            <div className="w-full h-px bg-white/10" />
            <p className="text-zinc-600 text-sm xl:text-base 3xl:text-lg mt-10">
              By using our website and submitting our contact form, you agree to
              this Privacy Policy.
            </p>
          </motion.div>
        </div>

        {/* Back button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isLoaded ? "routeShow" : loaded ? "show" : "hidden"}
          custom={sections.length + 2}
        >
          <Link
            to="/"
            className="flex items-center justify-center mt-16 gap-1 group cursor-pointer text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-[#4CAF4F]"
          >
            <ArrowLeft
              size={22}
              strokeWidth={2}
              className="3xl:w-9 3xl:h-9 group-hover:-translate-x-2 transition-transform duration-200 ease-in"
            />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
