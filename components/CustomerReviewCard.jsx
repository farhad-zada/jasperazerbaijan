import React from "react";
import Image from "@node_modules/next/image";
import { motion } from "framer-motion";

const CustomerReviewCard = ({ image, name, comment }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className=" bg-darkGray text-white p-6 rounded-lg flex flex-col space-y-4 w-full"
    >
      <div className="flex items-center gap-4">
        <Image
          src={image}
          width={48}
          height={48}
          className="rounded-full"
          alt={`${name} photos`}
        />
        <h3>{name}</h3>
      </div>
      <p className="">{comment}</p>
    </motion.div>
  );
};

export default CustomerReviewCard;
