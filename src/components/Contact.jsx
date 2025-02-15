/* eslint-disable no-unused-vars */
import { useState } from "react";
import { PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    if (!name && !email && !message) {
      e.preventDefault();
      setError('All fields are required');
      setTimeout(() => {
        setError('');
      }, 2000);
      return;
    }
  };
  
  return (
    <section id="Contact" className="bg-newbBlue">
      <div className="max-w-custom mx-auto px-5 py-28">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="mb-16 text-center text-white"
        >
          <h2 className="font-semibold text-4xl mb-3">Contact Me</h2>
          <p>Get in Touch</p>
        </motion.article>
        <div className="flex flex-wrap">
          <div className="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 text-white">
            <h2 className="mb-6 text-xl font-n">Connect with me:</h2>
            <section className="grid grid-cols-1 space-y-10 mb-10 md:mb-0">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="w-full shrink-0 grow-0 basis-auto"
              >
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-newYellow p-4 text-white">
                      <EnvelopeIcon className="w-8" />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="mb-2 font-bold">Email</p>
                    <p>ertmigot@gmail.com</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="w-full shrink-0 grow-0 basis-auto"
              >
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-newYellow p-4 text-white">
                      <PhoneIcon className="w-8" />
                    </div>
                  </div>
                  <div className="ml-2">
                    <p className="mb-2 font-bold">Phone</p>
                    <p>+254 723 154 804</p>
                  </div>
                </div>
              </motion.div>
            </section>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12"
          >
            <h2 className="mb-6 text-xl text-white">
              Let’s make magic together
            </h2>
            <form
              action="https://formspree.io/f/xzbqorbk"
              onSubmit={handleSubmit}
              method="post"
            >
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none"
                  id="exampleInput90"
                  placeholder="Name"
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-2 px-3 leading-[1.6] outline-none"
                  id="exampleInput91"
                  placeholder="Email address"
                />
              </div>
              <div className="relative mb-6" data-te-input-wrapper-init>
                <textarea
                  className="peer block min-h-[auto] w-full rounded-lg border-0 bg-white py-[0.32rem] px-3 leading-[1.6] outline-none"
                  id="exampleFormControlTextarea1"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows="5"
                  placeholder="Your message"
                ></textarea>
                {error && <p className="messages mt-3 text-red-600">{error}</p>}
              </div>
              <button
                type="submit"
                className="btn float-right border-0 p-3 px-6 text-white font-bold bg-newYellow rounded-md hover:bg-white hover:text-newDarkGray"
              >
                Email me
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
