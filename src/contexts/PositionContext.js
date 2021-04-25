import React, { useContext, createContext, useState } from "react";

const PostitonContext = createContext();

export const PositionProvider = ({ children }) => {
  const [x, setX] = useState(3);
  const [y, setY] = useState(5);
  const [angle, setAngle] = useState("0deg");
  
  return (
    <PostitonContext.Provider value={{ x, setX, y, setY, angle, setAngle }}>
      {children}
    </PostitonContext.Provider>
  );
};

export const usePosition = () => useContext(PostitonContext);
