import { useEffect, useState } from "react";
import "./BackToTop.scss";
import { FaChevronUp } from "react-icons/fa";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showButton && (
        <div className="containerBackToTop">
          <button onClick={scrollUp} className="BackToTopButton">
            <FaChevronUp />
          </button>
        </div>
      )}
    </>
  );
}
