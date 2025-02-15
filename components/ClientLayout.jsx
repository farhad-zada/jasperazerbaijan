"use client";

import { useState, useEffect } from "react";
import useTimerStore from "@/store/useTimerStore";

const ContactModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-semibold mb-4">Bizimle İletişime Geçin</h2>
        <p className="mb-4">Size nasıl yardımcı olabiliriz?</p>
        <input
          type="text"
          placeholder="E-posta adresiniz"
          className="w-full p-2 border rounded mb-2"
        />
        <textarea
          placeholder="Mesajınız..."
          className="w-full p-2 border rounded mb-2"
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Gönder
        </button>
        <button className="mt-2 text-gray-500 w-full" onClick={onClose}>
          Kapat
        </button>
      </div>
    </div>
  );
};

const ClientLayout = () => {
  const [showModal, setShowModal] = useState(false);

  return showModal ? (
    <ContactModal onClose={() => setShowModal(false)} />
  ) : null;
};

export default ClientLayout;
