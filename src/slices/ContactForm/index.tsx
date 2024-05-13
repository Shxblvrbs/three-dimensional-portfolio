import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import MessageForm from "@/components/Form/MessageForm";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */


const ContactForm = ({ slice }: ContactFormProps): JSX.Element => {
  
  return (
    <section
    data-slice-type={slice.slice_type}
    data-slice-variation={slice.variation}
    >
      <MessageForm />
    </section>
  );
};

export default ContactForm;
