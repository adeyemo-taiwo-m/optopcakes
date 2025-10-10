import React, { useEffect, useRef } from "react";

function useOutsideClick(handleClose) {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      if (modalRef?.current && !modalRef?.current?.contains(e?.target)) {
        handleClose();
      }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClose]);

  return modalRef;
}

export default useOutsideClick;
