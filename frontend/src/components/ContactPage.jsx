import React, { useState } from "react";
import Container from "../components/container";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <Container className="pt-24 pb-12">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-6 text-left text-zinc-900"
        >
          Contact
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-2xl text-zinc-700 mb-12 max-w-2xl text-left"
        >
          Get in touch with our Uganda-based branding experts to discuss your challenge.
        </motion.p>

        {/* Contact Details */}
        <div className="relative z-10 border-t border-gray-300 text-left">
          <div>
            <button
              className="w-full text-left py-6 text-2xl font-medium text-zinc-900 border-b border-gray-300 flex justify-between items-center"
              onClick={() => setIsOpen(!isOpen)}
            >
              Uganda
              <span className="text-xl">{isOpen ? "−" : "+"}</span>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  key="ugandaDetails"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 py-8">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      <h4 className="text-2xl font-semibold text-zinc-900 mb-3 text-left">Address</h4>
                      <p className="text-xl text-zinc-700 leading-relaxed text-left">
                        6th Floor, Victorial Building<br />
                        Jinja Road, Kampala<br />
                        Uganda
                      </p>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                      className="space-y-6"
                    >
                      <div>
                        <h4 className="text-2xl font-semibold text-zinc-900 mb-2 text-left">Business Development</h4>
                        <p className="text-xl text-zinc-700 text-left">business@smarigroup.com</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-zinc-900 mb-2 text-left">Human Resources</h4>
                        <p className="text-xl text-zinc-700 text-left">jobs@smarigroup.com</p>
                        <p className="text-xl text-zinc-700 text-left">+256 700 123 456</p>
                      </div>
                      <div>
                        <h4 className="text-2xl font-semibold text-zinc-900 mb-2 text-left">Corporate Communications</h4>
                        <p className="text-xl text-zinc-700 text-left">media@smarigroup.com</p>
                        <p className="text-xl text-zinc-700 text-left">+256 772 654 321</p>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>

    </>
  );
};

export default ContactPage;
