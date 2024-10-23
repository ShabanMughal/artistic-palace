import React from "react";

interface LoaderProps {
  text?: string;    // Optional text to display
  color?: string;   // Optional color for spinner
  bgColor?: string; // Optional background color
}

export const Loader: React.FC<LoaderProps> = ({ 
  text = "Loading...", 
  color = "#ffffff", 
  bgColor = "rgba(0, 0, 0, 0.8)" 
}) => {
  return (
    <div className="fixed z-50 inset-0 flex flex-col items-center justify-center" style={{ backgroundColor: bgColor }}>
      {/* Spinner */}
      <div 
        className="loader-spinner mb-5" 
        style={{ borderColor: color, borderTopColor: "transparent" }}
      ></div>

      {/* Loading Text */}
      <span className="text-lg font-semibold" style={{ color }}>
        {text}
      </span>

      <style jsx>{`
        .loader-spinner {
          width: 80px;
          height: 80px;
          border: 8px solid;
          border-radius: 50%;
          animation: spin 1.2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
};
