"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import React, { useEffect, useRef } from "react";
import { MdCircle } from "react-icons/md";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

gsap.registerPlugin(ScrollTrigger)

/**
 * Props for `ScrollList`.
 */
export type ScrollListProps = SliceComponentProps<Content.ScrollListSlice>;

/**
 * Component for "ScrollList" Slices.
 */
const ScrollList = ({ slice }: ScrollListProps): JSX.Element => {

const component = useRef(null)

useEffect (()=>{
  let ctx = gsap.context(()=>{
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: component.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 5,

      },
    });

    tl.fromTo(
      ".scroll-row", 
      {
        x: (index) => {
          return index % 2 === 0 
          ? gsap.utils.random(501, 499) 
          : gsap.utils.random(-501, -499);
        },
      }, 
      {
        x: (index) => {
          return index % 2 === 0
          ? gsap.utils.random(-501, -499) 
          : gsap.utils.random(501, 499);
        },
        ease: "power1.inOut",
      });
    }, component);
  return () => ctx.revert(); //cleanup
}, []);


  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="wrapper overflow-hidden"
      ref={component}
    >
    <Bounded as="div">
      <Heading size="xl" className="mb-8" as="h2">
        {slice.primary.heading}
      </Heading>
    </Bounded>

    {slice.items.map(({scroll_color, scroll_name}, index)=>(
      <div key={index} className="scroll-row mb-8 flex items-center justify-center gap-4 text-red-900" aria-label={scroll_name || undefined}>
        {Array.from({length: 15}, (_, index) => (
          <React.Fragment key={index}>
            <span className="scroll-item text-8xl font-extrabold uppsercase tracking-tighter"
            style={{
              color: index === 7 && scroll_color ? scroll_color : "inherit"
            }}>
              {scroll_name} 
            </span>
            {/* <span className="text-lg">
              <MdCircle />
            </span> */}
          </React.Fragment>        
        ))}
      </div>
    ))}
    </section>
  );
};

export default ScrollList;
