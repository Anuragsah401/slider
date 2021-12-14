import { useEffect, useState } from "react";

export const MID_DEVICE_SIZE = 1024;
export const TABLET_DEVICE_SIZE = 768;
export const MOBILE_DEVICE_SIZE = 480;

const useMediaQuery = (size) => {
  const [width, setWidth] = useState(window.innerWidth);

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return width <= size;
};

export const useIsMobile = () => useMediaQuery(MOBILE_DEVICE_SIZE);
export const useMidDevice = () => useMediaQuery(MID_DEVICE_SIZE);
export const useIsTablet = () => useMediaQuery(TABLET_DEVICE_SIZE);

export default useMediaQuery;
