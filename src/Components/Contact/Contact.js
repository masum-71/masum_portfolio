import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7337wh",
        "template_khc8rii",
        form.current,
        "iJcZWUyCmFYgmoKva"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Message sent successfully");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div id="contact" className="md:w-1/2 md:m-auto mb-10">
      <h3 className="text-[#CCD6F6] text-2xl mb-10 underline">Contact Me</h3>
      <p className="text-[#8892B0] mb-5 ">
        I would love if you reached out of me. Even if it's just to say "Hi!".
        Don't hesitate! Drop me a line and I will get back to you as soon as
        possible.
      </p>
      <form className="bg-[#112240] w-full p-5" ref={form} onSubmit={sendEmail}>
        <label className="text-[#8892B0] mb-5 w-full">Name</label> <br />
        <input
          className="text-black py-2 px-2 mt-2 rounded-md mb-5 w-full"
          type="text"
          name="user_name"
        />{" "}
        <br />
        <label className="text-[#8892B0] mb-5 w-full">Email</label> <br />
        <input
          className="text-black py-2 px-2 mt-2 rounded-md mb-5 w-full"
          type="email"
          name="user_email"
        />{" "}
        <br />
        <label className="text-[#8892B0] mb-5 w-full">Message</label> <br />
        <textarea
          className="text-black py-2 px-2 mt-2 rounded-md mb-5 w-full"
          name="message"
        />{" "}
        <br />
        <input
          className="px-3 py-1 text-[#64FFDA] border-2 border-[#64FFDA] hover:bg-[#133040]"
          type="submit"
          value="Send"
        />{" "}
        <br />
      </form>
    </div>
  );
};

export default Contact;
