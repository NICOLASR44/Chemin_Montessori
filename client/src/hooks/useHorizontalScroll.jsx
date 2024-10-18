import { useEffect } from "react";

function useHorizontalScroll(ref, isEnabled) {
  const containerRef = ref;

  useEffect(() => {
    if (isEnabled && ref.current) {
      const handleWheel = (e) => {
        e.preventDefault();
        containerRef.current.scrollLeft += e.deltaY;
      };

      const currentRef = ref.current;
      currentRef.addEventListener("wheel", handleWheel, { passive: false });

      return () => {
        currentRef.removeEventListener("wheel", handleWheel);
      };
    }
    return () => {};
  }, [isEnabled, ref, containerRef]);
}

export default useHorizontalScroll;
