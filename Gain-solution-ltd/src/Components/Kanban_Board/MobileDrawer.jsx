import { X } from "lucide-react";

const MobileDrawer = ({ open, onClose, children }) => {
  return (
    <>

      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 transition-all duration-300 bg-black/30 backdrop-blur-sm ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <div className={`fixed top-0 right-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out ${open ? "translate-x-0" : "translate-x-full"}`}>
        <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
          <p className="font-medium">Menu</p>
          <button onClick={onClose} className="p-1 text-gray-600">
            <X size={18} />
          </button>
        </div>
        <div className="p-4 space-y-4">{children}</div>
      </div>
    </>
  );
};

export default MobileDrawer;
