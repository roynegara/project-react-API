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

function NotifHandlerWarning() {
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

      <button
        href="/login"
        onClick={() =>
          createToast("warning", "fa-solid fa-triangle-exclamation", "Warning!!!", "You are Already Login")
        }>
        Warning
      </button>
    </div>
  );
}

export default NotifHandlerWarning;
