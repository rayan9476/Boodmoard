import useRouteChangeStairsAnimation from "../components/hooks/useRouteChangeStairsAnimation";
import { useEffect } from "react";

function RouteChangeStairs({ children }) {
  //  stairanimation start here
  const { stairsContainerRef2, appRef } = useRouteChangeStairsAnimation();
  //  stairanimation ends here

  useEffect(() => {
    if (!appRef.current) return;
  }, [children, appRef]);
  return (
    <>
      <div
        ref={stairsContainerRef2}
        className={`stairs_container stairs_content_2 ${stairsContainerRef2 ? "is-stairs-2-open" : ""} opacity-0   transform-gpu  h-screen w-full pointer-events-none  fixed left-0 top-0 z-30  overflow-hidden `}
      >
        <div className="stairs_content    pointer-events-none  w-full text-[0px] h-full flex gap-0 ">
          <div className="stairs flex-1 mr-[-1px]   bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
          <div className="stairs flex-1 mr-[-1px]  bg-black"></div>
        </div>
      </div>

      <div>
        <div className="app-ref-1" ref={appRef}>
          {children}
        </div>
      </div>
    </>
  );
}

export default RouteChangeStairs;

// import useRouteChangeStairsAnimation from "../components/hooks/useRouteChangeStairsAnimation";
// import { useEffect } from "react";

// function RouteChangeStairs({ children }) {
//   // const { stairsContainerRef2, stairsContainerRef3, appRef } =
//   //   useRouteChangeStairsAnimation();

//   const { stairsContainerRef2, stairsContainerRef3, appRef } =
//     useRouteChangeStairsAnimation();

//   useEffect(() => {
//     if (!appRef.current) return;
//   }, [children, appRef]);

//   return (
//     <>
//       {/* First stairs layer — same as original */}
//       <div
//         ref={stairsContainerRef2}
//         className="stairs_container stairs_content_2 is-stairs-2-open opacity-0 transform-gpu h-screen w-full pointer-events-none fixed left-0 top-0 z-[400] overflow-hidden"
//       >
//         <div className="stairs_content pointer-events-none w-full text-[0px] h-full flex gap-0">
//           <div className="stairs flex-1 mr-[-1px] bg-black"></div>
//           <div className="stairs flex-1 mr-[-1px] bg-black"></div>
//           <div className="stairs flex-1 mr-[-1px] bg-black"></div>
//           <div className="stairs flex-1 mr-[-1px] bg-black"></div>
//           <div className="stairs flex-1 mr-[-1px] bg-black"></div>
//         </div>
//       </div>

//       {/* Second stairs layer — follows first, same direction */}
//       {/* <div
//         ref={stairsContainerRef3}
//         className="stairs_container opacity-0 transform-gpu h-screen w-full pointer-events-none fixed left-0 top-0 z-[600] overflow-hidden"
//       >
//         <div className="stairs_content pointer-events-none w-full text-[0px] h-full flex gap-0">
//           <div className="stairs-2 flex-1 mr-[-1px] bg-[#4CAF4F]"></div>
//           <div className="stairs-2 flex-1 mr-[-1px] bg-[#4CAF4F]"></div>
//           <div className="stairs-2 flex-1 mr-[-1px] bg-[#4CAF4F]"></div>
//           <div className="stairs-2 flex-1 mr-[-1px] bg-[#4CAF4F]"></div>
//           <div className="stairs-2 flex-1 mr-[-1px] bg-[#4CAF4F]"></div>
//         </div>
//       </div> */}

//       <div>
//         <div className="app-ref-1 relative " ref={appRef}>
//           {/* <div className="app-ref-1"> */}

//           {children}
//         </div>
//       </div>
//     </>
//   );
// }

// export default RouteChangeStairs;
