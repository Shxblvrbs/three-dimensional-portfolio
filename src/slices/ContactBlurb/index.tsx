"use client";

import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ContactBlurb`.
 */
export type ContactBlurbProps = SliceComponentProps<Content.ContactBlurbSlice>;

/**
 * Component for "ContactBlurb" Slices.
 */
const ContactBlurb = ({ slice }: ContactBlurbProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="text-center"
    >
      <Heading as="h2" size="lg">
        {slice.primary.heading}
      </Heading>
      {slice.items.map((item, index) => (
        <div key={index} className="ml-6 mt-5 md:ml-12 md:mt-10">
          <Heading as="h3" size="sm">
            {item.welcome_message}
          </Heading>
        </div>
      ))}
    </Bounded>
  );
};

export default ContactBlurb;
