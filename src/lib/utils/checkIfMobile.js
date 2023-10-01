import isMobile from "../stores/isMobile.js";

export function checkIfMobile() {
  if (typeof window !== "undefined") {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    isMobile.set(mediaQuery.matches);

    const handleChange = (event) => {
      isMobile.set(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }
}
