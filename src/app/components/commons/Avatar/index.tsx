"use client";
import React, { useState } from "react";

interface AvatarProps {
  name: string;
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = ({ name, className, onClick }) => {
  const initials = name.toUpperCase();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative">
      <div
        onClick={openModal}
        className={`${
          className ? className : "w-16 h-16 text-2xl"
        }  bg-blue-500 hover:bg-blue-800 rounded-full flex items-center justify-center text-white cursor-pointer`}
      >
        {initials}
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
          onClick={closeModal}
        >
          <div className="bg-white p-4 rounded-lg shadow-lg animate-scaleIn">
            <button
              className="block mb-2 text-blue-500 hover:text-blue-800"
              onClick={onClick}
            >
              Go to Profile
            </button>
            <button
              className="block text-blue-500 hover:text-blue-800"
              onClick={() => {
                // Add logic for logout
              }}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Avatar;
