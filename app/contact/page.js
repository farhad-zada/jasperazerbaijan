"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import FAQ from "@components/FaqSection";

const Page = () => {
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

    // Simulated API request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Submitted:", data);
    setLoading(false);
    setSuccess(true);
    reset();

    setTimeout(() => setSuccess(false), 2000); // Success state clears after 2s
  };

  return (
    <div className="w-screen bg-black text-white">
      <div className="w-11/12 mx-auto text-center">
        <h1 className="font-semibold tracking-[5px] header_text">
          Contact <span className="text-purple">Us</span>
        </h1>
        <p className=" w-full lg:w-2/5 mx-auto mt-4">
          Have questions or need help? Fill out the form below, and we'll get
          back to you promptly. We're here to assist you!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-4 p-6 rounded-2xl w-full lg:w-6/12 mx-auto bg-darkGray shadow-lg"
        >
          <div className="text-left">
            <label className="block mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm py-1 mt-2 pl-2">
                {errors.name.message}
              </p>
            )}
          </div>

          <div className="text-left">
            <label htmlFor="phone" className="block mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              {...register("phone", {
                required: "Phone number is required",
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
              <p className="text-red-500 text-sm py-1 mt-2 pl-2">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="text-left">
            <label className="block mb-1">Telegram username</label>
            <input
              {...register("telegramAdress", {
                required: "Telegram username is required",
              })}
              className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="Enter your Telegram username"
            />
            {errors.name && (
              <p className="text-red-500 text-sm py-1 mt-2 pl-2">
                {errors.telegramAdress.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="text-left">
            <label className="block mb-1">Email</label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email" },
              })}
              className="w-full placeholder:text-[#D9D9D9] px-4 py-2 bg-[#BBBBBB]/15 rounded-lg border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm py-1 mt-2 pl-2">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Message Field */}
          <div className="text-left">
            <label className="block mb-1">Message</label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full h-40 placeholder:text-[#D9D9D9] px-4 py-2 bg-[#BBBBBB]/15 rounded-lg border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>

          {/* Submit Button with Animation */}
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

        <div className="mt-40">
          <FAQ />
        </div>
        <div className="w-full h-40 bg-black"></div>
      </div>
    </div>
  );
};

export default Page;
