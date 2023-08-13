import { BsArrowRight } from "react-icons/bs"
import { fadeIn } from "../../variants"
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_0mjhfd4',
        'template_d1xgt25',
        {
          from_name: form.name,
          to_name: "Jaivik Goswami",
          from_email: form.email,
          to_email: "jaivikgoswami780@gmail.com",
          subject: form.subject,
          message: form.message
        },
        'hunks9_AF5CTazeLo'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
            subject: ""
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };
  return <div className=" h-full bg-primary/30">
    <div className=" container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
      <div className="flex flex-col w-full max-w-[700px]">
        <motion.h2
          variants={fadeIn('down', 0.2)}
          initial='hidden'
          animate='show'
          exit='hidden'
          className="h2 text-center mb-12"
        >
          Let&apos;s <span className="text-accent">connect.</span>
        </motion.h2>
        <motion.form
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          animate='show'
          exit='hidden'
          ref={formRef}
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-x-6 w-full">
            <input type="text" name="name" placeholder="Name" className="input"
              value={form.name}
              onChange={handleChange}
            />
            <input type="email" name='email' placeholder="Email" className="input"
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <input type="text" name="subject" onChange={handleChange} placeholder="subject" value={form.subject} className="input" />
          <textarea name='message' placeholder="Message" className="textarea"
            value={form.message}
            onChange={handleChange}
          />
          <button type="submit" className="btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group">
            <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500">
              {loading ? "Sending..." : "Let's talk"}
            </span>
            <BsArrowRight className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
          </button>
        </motion.form>
      </div>
    </div>
  </div>;
};

export default Contact;
