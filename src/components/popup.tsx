import React, { useEffect } from "react";

interface PopupProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

const Popup: React.FC<PopupProps> = ({ message, type, isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div
        className={`${
          type === "success"
            ? "bg-green-50 text-green-800 border-green-400"
            : "bg-red-50 text-red-800 border-red-400"
        } px-4 py-3 rounded-lg shadow-lg border flex items-center gap-2 min-w-[320px]`}
        role="alert"
      >
        <div className="flex-shrink-0">
          {type === "success" ? (
            <svg
              className="h-5 w-5 text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5 text-red-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
        <span className="flex-1">{message}</span>
      </div>
    </div>
  );
};

// 创建一个全局状态管理器
type PopupState = {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
};

let showPopup: (message: string, type: "success" | "error") => void = () => {};

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [popupState, setPopupState] = React.useState<PopupState>({
    message: "",
    type: "success",
    isVisible: false,
  });

  showPopup = (message: string, type: "success" | "error") => {
    setPopupState({ message, type, isVisible: true });
  };

  const handleClose = () => {
    setPopupState((prev) => ({ ...prev, isVisible: false }));
  };

  return (
    <>
      {children}
      <Popup {...popupState} onClose={handleClose} />
    </>
  );
}

export const usePopup = () => {
  return {
    showSuccess: (message: string) => showPopup(message, "success"),
    showError: (message: string) => showPopup(message, "error"),
  };
};
