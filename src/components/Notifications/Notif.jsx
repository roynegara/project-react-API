import React, { useState } from "react";
import "./notif.css"; // import your CSS file

function Toast({ type, icon, title, text, removeToast }) {
  // State to manage timeout for auto-dismissal
  const [timeoutId, setTimeoutId] = useState(null);

  // Function to remove the toast
  const remove = () => {
    clearTimeout(timeoutId); // Clear the timeout when manually removing the toast
    removeToast();
  };

  // Set timeout for auto-dismissal when the component mounts
  useState(() => {
    const id = setTimeout(remove, 5000);
    setTimeoutId(id);
    return () => clearTimeout(id); // Clear timeout on unmount
  }, []);

  return (
    <div className={`toast ${type}`}>
      <i className={icon}></i>
      <div className="content">
        <div className="title">{title}</div>
        <span>{text}</span>
      </div>
      <i className="close fa-solid fa-xmark" onClick={remove}></i>
    </div>
  );
}

function Notif() {
  // State to manage toast notifications
  const [toasts, setToasts] = useState([]);

  // Function to add a new toast notification
  const createToast = (type, icon, title, text) => {
    const newToast = { type, icon, title, text };
    setToasts((prevToasts) => [...prevToasts, newToast]);
  };



  return (
    <div className="notifications">
      {/* Render toast notifications */}
      {toasts.map((toast, index) => (
        <Toast
          key={index}
          {...toast}
          removeToast={() => setToasts((prevToasts) => prevToasts.filter((_, i) => i !== index))}
        />
      ))}

      {/* Buttons to trigger different toast notifications */}
      <button onClick={() => createToast("success", "fa-solid fa-circle-check", "Success", "This is a success toast.")}>
        Success
      </button>
      <button
        onClick={() => createToast("error", "fa-solid fa-circle-exclamation", "Error", "This is an error toast.")}>
        Error
      </button>
      <button
        onClick={() =>
          createToast("warning", "fa-solid fa-triangle-exclamation", "Warning", "This is a warning toast.")
        }>
        Warning
      </button>
      <button onClick={() => createToast("info", "fa-solid fa-circle-info", "Info", "This is an info toast.")}>
        Info
      </button>
    </div>
  );
}

export default Notif;
