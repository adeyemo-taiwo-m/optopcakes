import React, { useEffect, useRef } from "react";

function useOutsideClick(handleClose, excludeRef) {
  const modalRef = useRef(null);
  useEffect(() => {
    function handleClick(e) {
      //   if (modalRef?.current?.contains(e?.target)) return;
      if (modalRef?.current && !modalRef?.current?.contains(e?.target)) {
        handleClose();
      }

      //   if (
      //     (excludeRef?.current && excludeRef?.current?.contains(e?.target)) ||
      //     e?.target?.tagName === "LI" ||
      //     e?.target.tagName === "BUTTON"
      //   ) {
      //     handleClose();
      //   }
    }
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [handleClose, excludeRef]);

  return modalRef;
}

export default useOutsideClick;
