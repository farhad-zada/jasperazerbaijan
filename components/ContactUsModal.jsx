"use client";

import useStore from "@store/useStore";
import { useEffect } from "react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
const ShowModalLogic = () => {
  const { init, showModal, setShowModalFalse } = useStore();

  useEffect(() => {
    init();
  }, []);

  return (
    <div>{showModal && <ContactUsModal closeModal={setShowModalFalse} />}</div>
  );
};

const ContactUsModal = ({ closeModal }) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === "modal-container") {
      closeModal();
    }
  };

  return (
    <div
      id="modal-container"
      onClick={handleOutsideClick}
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90 z-50 w-11/12 mx-auto lg:w-full"
    >
      <div className="bg-darkGray p-6 rounded-lg shadow-lg w-full max-w-lg relative">
        <button
          onClick={closeModal}
          className="absolute top-5.5 right-4  size-9 bg-purple rounded-full"
        >
          ✕
        </button>

        <h2 className="text-3xl text-center font-bold mb-4 text-purple">
          Contact Us
        </h2>
        <ContactForm />
      </div>
    </div>
  );
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccess(false);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Submitted:", data);
    setLoading(false);
    setSuccess(true);
    reset();

    setTimeout(() => setSuccess(false), 2000);
  };
  return (
    <form
      className="space-y-4 rounded-2xl  bg-darkGray text-white"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="text-left">
        <label className="block mb-1 ">
          Name <span className="text-purple">*</span>
        </label>

        <motion.input
          {...register("name", { required: "Name is required" })}
          className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
          placeholder="Enter your name"
          initial={{ x: -5 }}
          animate={errors.name ? { x: [-50, 50, -50, 50, 0] } : {}}
          transition={{ duration: 0.5, repeat: 1 }}
        />
      </div>

      <div className="text-left">
        <label htmlFor="phone" className="block mb-1">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone", {
            pattern: {
              value:
                /^[+]?[0-9]{1,3}?[-. ]?(\(?\d{1,4}?\))?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
              message: "Invalid phone number format",
            },
          })}
          className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
          placeholder="+1 (123) 456-7980"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm py-1 mt-1 pl-2">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div className="text-left">
        <label className="block mb-1">Telegram username</label>
        <input
          {...register("telegramAdress", {})}
          className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
          placeholder="Enter your Telegram username"
        />
        {errors.telegramAdress && (
          <p className="text-red-500 text-sm py-1 mt-2 pl-2">
            {errors.telegramAdress.message}
          </p>
        )}
      </div>

      <div className="text-left">
        <label className="block mb-1 ">
          Email <span className="text-purple">*</span>
        </label>
        <motion.input
          {...register("email", {
            required: "Email is required",
            pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
          })}
          className="w-full placeholder:text-[#D9D9D9] px-4 py-2 bg-[#BBBBBB]/15 rounded-lg border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
          initial={{ x: -5 }}
          animate={errors.email ? { x: [-50, 50, -50, 50, 0] } : {}}
          transition={{ duration: 0.5, repeat: 1 }}
          placeholder="Enter your email"
        />
        {errors.email && (
          <p className="text-red-500 text-sm py-1 mt-1 pl-2">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="text-left">
        <label className="block mb-1 ">
          Message <span className="text-purple">*</span>
        </label>
        <motion.textarea
          {...register("message", { required: "Message cannot be empty" })}
          className="w-full h-40 placeholder:text-[#D9D9D9] px-4 py-2 bg-[#BBBBBB]/15 rounded-lg border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
          placeholder="Write your message..."
          initial={{ x: -5 }}
          animate={errors.message ? { x: [-50, 50, -50, 50, 0] } : {}}
        ></motion.textarea>
      </div>
      <motion.button
        type="submit"
        disabled={loading}
        className={`w-full py-2 rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
          success ? "bg-purple" : "bg-purple hover:bg-purple"
        }`}
        whileTap={{ scale: 0.95 }}
      >
        {loading ? (
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          >
            <Loader2 className="animate-spin" size={20} />
          </motion.div>
        ) : success ? (
          <CheckCircle size={20} />
        ) : (
          "Submit"
        )}
      </motion.button>
    </form>
  );
};

export default ShowModalLogic;
