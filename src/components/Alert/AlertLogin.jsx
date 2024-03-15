

import React, { useState } from "react";
import alertHandler from "./alertHandler";

const ErrorNotification = ({ errorMessage }) => {
  return <div className="error-notification">{errorMessage}</div>;
};

const AlertLogin = () => {
  const [error, setError] = useState(null);

  const handleLinkClick = () => {
    setError(alertHandler.alertProtectedLogin());
  };

  return (
    <div className="app">
      {error && <ErrorNotification errorMessage={error} />}

      <a href="/register" className="btn-home" onClick={handleLinkClick}>
        Gabung
      </a>
    </div>
  );
};

export default AlertLogin;


// import React, { useState } from "react";
// import alertHandler from "./alertHandler";

// const ErrorNotification = ({ errorMessage }) => {
//   return <div className="error-notification">{errorMessage}</div>;
// };

// const AlertLogin = () => {
//   const [error, setError] = useState(null);

//   const handleLinkClick = () => {
//     setError(alertHandler.alertProtectedLogin());
//   };

//   return (
//     <div className="app">
//       {error && <ErrorNotification errorMessage={error} />}

//       <a href="/register" className="btn-home" onClick={handleLinkClick}>
//         Gabung
//       </a>
//     </div>
//   );
// };

// export default AlertLogin;
