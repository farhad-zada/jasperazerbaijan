"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import HeaderTitle from "@components/HeaderTitle";

const formCategories = [
  { id: 1, inner: "Mobile App Development" },
  { id: 2, inner: "Blockchain Solutions" },
  { id: 3, inner: "Web Solutions" },
  { id: 4, inner: "Hosting Solutions" },
  { id: 5, inner: "AI solution" },
];

// test
const apiUrl = "http://localhost:8181/api/v1/apply";

// Real api
("https://api.jasperazerbaijan.com/api/v1/apply");

const ContactUs = () => {
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

    // Simulate a delay before making the request
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Submitted:", data);
    console.log(
      "Selected Categories:",
      selected.map((index) => formCategories[index - 1].inner)
    );

    // Determine the API endpoint based on the environment
    const apiUrl =
      window.location.hostname === "localhost"
        ? "http://localhost:8181/api/v1/apply"
        : "https://api.jasperazerbaijan.com/api/v1/apply";

    // Prepare the data to send
    const requestData = {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      tgHandle: data.telegramAdress || "", // If no Telegram handle is provided, send an empty string
      tags: selected.map((index) => formCategories[index - 1].inner), // Extracting selected categories
    };

    // Send the POST request to the API
    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit data");
      } else {
        console.log("Data submitted successfully");
      }

      // On success, handle success state and reset form
      setLoading(false);
      setSuccess(true);
      reset();

      setTimeout(() => setSuccess(false), 2000);
    } catch (error) {
      console.error("Error submitting the form:", error);
      setLoading(false);
      setSuccess(false);
    }
  };

  const [selected, setSelected] = useState([]);
  const handleSelect = (index) => {
    setSelected((prev) => {
      if (prev.includes(index)) {
        return prev.filter((item) => item !== index);
      }
      return [...prev, index];
    });
  };
  return (
    <div className="w-full bg-black text-white">
      <div className=" text-center" id="form">
        <HeaderTitle text={"Contact Us"} highlight={["Us"]} />

        <p className=" w-full lg:w-2/5 mx-auto mt-4">
          Have questions or need help? Fill out the form below, and we'll get
          back to you promptly. We're here to assist you!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-8 space-y-4 p-6 rounded-2xl w-full lg:w-6/12 mx-auto bg-darkGray shadow-lg"
        >
          <div className="text-left">
            <label className="block mb-1 ">
              Name <span className="text-purple">*</span>
            </label>
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
                pattern: {
                  value:
                    /^[+]?[0-9]{1,3}?[-. ]?(\(?\d{1,4}?\))?[-. ]?\d{1,4}[-. ]?\d{1,4}[-. ]?\d{1,9}$/,
                  message: "Invalid phone number format",
                },
              })}
              className="w-full px-4 py-2 bg-[#BBBBBB]/15 rounded-lg placeholder:text-[#D9D9D9] border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="+994 070 777-77-"
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

          <div className="text-left">
            <label className="block mb-1 ">
              Message <span className="text-purple">*</span>
            </label>
            <textarea
              {...register("message", { required: "Message cannot be empty" })}
              className="w-full h-40 placeholder:text-[#D9D9D9] px-4 py-2 bg-[#BBBBBB]/15 rounded-lg border border-gray-700 focus:border-purple focus:ring-1 focus:ring-purple outline-none transition-all duration-200"
              placeholder="Write your message..."
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <div className="w-full h-auto flex flex-wrap justify-start gap-3 items-center mt-5">
            {formCategories.map((data) => (
              <button
                key={data.id}
                type="button"
                onClick={() => handleSelect(data.id)}
                className={`${
                  selected.includes(data.id)
                    ? "bg-purple text-white"
                    : "bg-darkGray"
                } rounded-lg px-3 py-1 border transition-all delay-200 h-full cursor-pointer`}
              >
                {data.inner}
              </button>
            ))}
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            className={`w-full py-2 h-full rounded-xl font-semibold transition-all duration-200 flex items-center justify-center gap-2 ${
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

        <div className="w-full h-40 bg-black"></div>
      </div>
    </div>
  );
};

export default ContactUs;
