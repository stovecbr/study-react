import { useEffect } from "react";

export const useBgLightPink = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "lightpink";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);
};