"use client";

import { motion } from "framer-motion";

type UserModalProps = {
  user: any;
  onClose: () => void;
};

const UserModal = ({ user, onClose }: UserModalProps) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6 max-w-md w-full"
      >
        <h2 className="text-xl font-bold mb-2 text-gray-600">{user.name}</h2>
        <p className="text-gray-600">📧 {user.email}</p>
        <p className="text-gray-600">📞 {user.phone}</p>
        <p className="text-gray-600">🌐 {user.website}</p>
        <p className="text-gray-600">🏢 {user.company.name}</p>
        <p className="text-gray-600">
          📍 {user.address.street}, {user.address.city}
        </p>

        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 cursor-pointer"
        >
          Close
        </button>
      </motion.div>
    </div>
  );
};

export default UserModal;
