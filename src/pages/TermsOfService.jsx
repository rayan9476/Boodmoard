// import { useEffect } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/nexlify-logo-transparent-cropped.png";
// import { ArrowLeft } from "lucide-react";

// export default function TermsOfService() {
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

//       <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
//         {/* Header */}
//         <div className="mb-12">
//           <p className="uppercase tracking-[5px] text-[#4CAF4F] text-xs xl:text-[14px] 3xl:text-base font-semibold mb-4">
//             Legal
//           </p>
//           <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
//             Terms of Service
//           </h1>
//           <p className="text-zinc-500 text-sm  xl:text-base 3xl:text-lg">
//             Last updated: July 2026
//           </p>
//           <div className="w-full h-px bg-white/10 mt-8" />
//         </div>

//         {/* Content */}
//         <div className="flex flex-col gap-10 text-zinc-400 leading-8">
//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               1. Agreement to Terms
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               By accessing our website or engaging our services, you agree to be
//               bound by these Terms of Service. If you do not agree with any part
//               of these terms, please do not use our services.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               2. Our Services
//             </h2>
//             <p className="mb-4  xl:text-base 3xl:text-lg">
//               Nexlify Creative Studio provides the following services:
//             </p>
//             <ul className="flex flex-col gap-2 ml-4">
//               {[
//                 "Web Development (React, Next.js, and related technologies)",
//                 "UI/UX Design",
//                 "Brand Identity & Logo Design",
//                 "Mobile App Development",
//                 "E-Commerce Development",
//                 "SEO & Digital Marketing",
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
//               3. Project Terms
//             </h2>
//             <ul className="flex flex-col gap-3 ml-4">
//               {[
//                 "All projects begin with a discovery call to align on scope, timeline, and pricing.",
//                 "A deposit (typically 50%) is required before work begins.",
//                 "Final payment is due before final deliverables are handed over.",
//                 "Project timelines are estimates and may vary based on client feedback and revisions.",
//                 "Scope changes may affect timeline and cost.",
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
//               4. Intellectual Property
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               Upon receipt of full payment, all custom work created by Nexlify
//               for your project becomes your property. We retain the right to
//               showcase the work in our portfolio unless you request otherwise in
//               writing.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               5. Revisions
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               Each project includes a set number of revision rounds as agreed
//               upon in the project proposal. Additional revisions beyond the
//               agreed scope will be billed at our standard hourly rate.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               6. Cancellations & Refunds
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               If a project is cancelled by the client after work has begun, the
//               deposit is non-refundable. Any work completed beyond the deposit
//               value will be billed proportionally. If we are unable to deliver
//               the agreed work, a full refund will be issued.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               7. Limitation of Liability
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               Nexlify Creative Studio is not liable for any indirect,
//               incidental, or consequential damages arising from the use of our
//               services or deliverables. Our total liability shall not exceed the
//               amount paid for the specific project in question.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               8. Changes to Terms
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               We reserve the right to update these Terms of Service at any time.
//               Changes will be posted on this page with an updated date.
//               Continued use of our services after changes constitutes acceptance
//               of the new terms.
//             </p>
//           </div>

//           <div>
//             <h2 className="text-white text-xl xl:text-2xl 3xl:text-3xl font-semibold mb-3">
//               9. Contact
//             </h2>
//             <p className=" xl:text-base 3xl:text-lg">
//               For any questions about these terms, contact us at{" "}
//               <a
//                 href="mailto:hello@boodmoard.com"
//                 className="text-[#4CAF4F] hover:underline  xl:text-base 3xl:text-lg"
//               >
//                 hello@nexlify.com
//               </a>
//             </p>
//           </div>

//           <div className="w-full h-px bg-white/10" />

//           <p className="text-zinc-600 text-sm  xl:text-base 3xl:text-lg">
//             These terms are governed by the laws of Pakistan. Any disputes will
//             be resolved through mutual negotiation before any legal action is
//             taken.
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
import logo from "../assets/nexlify-logo-transparent-bg.png";
import { ArrowLeft } from "lucide-react";
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
      delay: 0.5 + index * 0.19,
      ease: [0.25, 0.1, 0.25, 1],
    },
  }),
};

const sections = [
  {
    title: "1. Agreement to Terms",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        By accessing our website or engaging our services, you agree to be bound
        by these Terms of Service. If you do not agree with any part of these
        terms, please do not use our services.
      </p>
    ),
  },
  {
    title: "2. Our Services",
    body: (
      <>
        <p className="mb-4 xl:text-base 3xl:text-lg">
          Nexlify Creative Studio provides the following services:
        </p>
        <ul className="flex flex-col gap-2 ml-4">
          {[
            "Web Development (React, Next.js, and related technologies)",
            "UI/UX Design",
            "Brand Identity & Logo Design",
            "Mobile App Development",
            "E-Commerce Development",
            "SEO & Digital Marketing",
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
    title: "3. Project Terms",
    body: (
      <ul className="flex flex-col gap-3 ml-4">
        {[
          "All projects begin with a discovery call to align on scope, timeline, and pricing.",
          "A deposit (typically 50%) is required before work begins.",
          "Final payment is due before final deliverables are handed over.",
          "Project timelines are estimates and may vary based on client feedback and revisions.",
          "Scope changes may affect timeline and cost.",
        ].map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4CAF4F] flex-shrink-0 mt-3" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "4. Intellectual Property",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Upon receipt of full payment, all custom work created by Nexlify for
        your project becomes your property. We retain the right to showcase the
        work in our portfolio unless you request otherwise in writing.
      </p>
    ),
  },
  {
    title: "5. Revisions",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Each project includes a set number of revision rounds as agreed upon in
        the project proposal. Additional revisions beyond the agreed scope will
        be billed at our standard hourly rate.
      </p>
    ),
  },
  {
    title: "6. Cancellations & Refunds",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        If a project is cancelled by the client after work has begun, the
        deposit is non-refundable. Any work completed beyond the deposit value
        will be billed proportionally. If we are unable to deliver the agreed
        work, a full refund will be issued.
      </p>
    ),
  },
  {
    title: "7. Limitation of Liability",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        Nexlify Creative Studio is not liable for any indirect, incidental, or
        consequential damages arising from the use of our services or
        deliverables. Our total liability shall not exceed the amount paid for
        the specific project in question.
      </p>
    ),
  },
  {
    title: "8. Changes to Terms",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        We reserve the right to update these Terms of Service at any time.
        Changes will be posted on this page with an updated date. Continued use
        of our services after changes constitutes acceptance of the new terms.
      </p>
    ),
  },
  {
    title: "9. Contact",
    body: (
      <p className="xl:text-base 3xl:text-lg">
        For any questions about these terms, contact us at{" "}
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

export default function TermsOfService() {
  useLayoutEffect(() => {
    document.title = "Terms of Service — Nexlify Creative Studio";

    const meta = document.querySelector("meta[name='description']");
    if (meta)
      meta.setAttribute(
        "content",
        "Read Nexlify's Terms of Service to understand the agreement between you and Nexlify Creative Studio when using our web development and design services.",
      );

    let canonical = document.querySelector("link[rel='canonical']");
    if (canonical) canonical.setAttribute("href", "https://nexlify.com/terms");

    // clean up
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
    <div className="bg-black min-h-screen text-white">
      <header className="fixed z-50 w-full flex items-center justify-between px-[var(--section-padding-x)] lg:px-[var(--section-padding-lg)] xl:px-[var(--section-padding-xl)] py-4 bg-black/80 backdrop-blur-md border-b border-white/5">
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
          className="flex items-center justify-center gap-1 group transition-colors duration-200 ease-in cursor-pointer  text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-zinc-400 hover:text-[#4CAF4F]  duration-200"
        >
          <ArrowLeft
            size={22}
            strokeWidth={2}
            className="3xl:w-9 3xl:h-9 group-hover:-translate-x-2 transition-transform duration-200 ease-in"
          />
          Back to Home
        </Link>
      </header>

      <div className="max-w-3xl mx-auto px-6 pt-36 pb-24">
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Terms of Service
          </h1>
          <p className="text-zinc-500 text-sm  xl:text-base 3xl:text-lg">
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
            <p className="text-zinc-600 text-sm  xl:text-base 3xl:text-lg mt-10">
              These terms are governed by the laws of Pakistan. Any disputes
              will be resolved through mutual negotiation before any legal
              action is taken.
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
            className="flex items-center justify-center mt-16 gap-1 group  cursor-pointer  text-sm xl:text-base 2xl:text-lg 3xl:text-3xl text-[#4CAF4F] "
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
