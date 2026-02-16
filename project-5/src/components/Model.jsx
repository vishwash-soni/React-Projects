import { IoClose } from "react-icons/io5";
import { createPortal } from "react-dom";

const Model = ({ onClose, isOpen, children }) => {

  if (!isOpen) return null;

  return createPortal(
    <>
      {/* Modal Box */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="relative bg-red-700 min-h-[200px] w-[80%] p-4 rounded-md">
          <div className="flex justify-end">
            <IoClose 
              onClick={onClose} 
              className="text-4xl cursor-pointer"
            />
          </div>

          {children}
        </div>
      </div>

      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 backdrop-blur-sm bg-black/40 z-40"
      />
    </>,
    document.getElementById("modal-root")
  );
};

export default Model;
