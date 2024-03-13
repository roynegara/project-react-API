import React, { useState } from "react";

const ErrorNotification = ({ errorMessage }) => {
  return <div className="error-notification">{errorMessage}</div>;
};

const AlertLogin = () => {
  const [error, setError] = useState(null);

  const handleLinkClick = () => {
    setError("Maaf, terjadi kesalahan saat mencoba mengakses link.");
  };

  return (
    <div className="app">
      {error && <ErrorNotification errorMessage={error} />}

      <a href="/login" onClick={handleLinkClick}>
        Klik Disini
      </a>
    </div>
  );
};

export default AlertLogin;
