import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext();

export const useNotification = () => {
  return useContext(NotificationContext);
};

export const NotificationProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([]);

  const addNotification = useCallback((message, author, image) => {
    const id = new Date().getTime(); // Unique ID for each notification
    setNotifications((prev) => [...prev, { id, message, author, image }]);

    // Remove the notification after 10 seconds
    setTimeout(() => {
      setNotifications((prev) => prev.filter((notification) => notification.id !== id));
    }, 8000);
  }, []);

  const removeNotification = useCallback((id) => {
    setNotifications((prev) => prev.filter((notification) => notification.id !== id));
  }, []);

  return (
    <NotificationContext.Provider value={{ addNotification, removeNotification }}>
      {children}
      <div className="notification-container">
        {notifications.map(({ id, message, author, image }) => (
          <div key={id} className="notification">
            {/* {image && <img src={image} alt="Quote" className="notification-image" />} */}
            <p>{message}</p>
            <small>~{author}</small>
            {/* Uncomment the below button if you want a manual removal option */}
            {/* <button onClick={() => removeNotification(id)}>X</button> */}
          </div>
        ))}
      </div>
    </NotificationContext.Provider>
  );
};
