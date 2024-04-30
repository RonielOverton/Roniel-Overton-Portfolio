import React, { useRef, useEffect, useState } from "react";

function Dialog({ title, onClose, onOk, children }) {
  const dialogRef = useRef(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    if (showDialog && dialogRef.current) {
      dialogRef.current.showModal();
    } else if (dialogRef.current) {
      dialogRef.current.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    setShowDialog(false);
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  return (
    <>
      {showDialog && (
        <dialog
          ref={dialogRef}
          className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10 rounded-xl backdrop:bg-gray-800/50"
        >
          <div className="w-[500px] max-w-full bg-gray-200 flex flex-col">
            <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-[#5651e5]">
              <h1 className="text-2xl text-white">{title}</h1>
              <button
                onClick={closeDialog}
                className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
              >
                x
              </button>
            </div>
            <div className="px-5 pb-6">{children}</div>
            <div className="flex flex-row justify-end mt-2">
              <button
                onClick={clickOk}
                className="bg-green-500 py-1 px-2 rounded border-none"
              >
                OK
              </button>
            </div>
          </div>
        </dialog>
      )}
    </>
  );
}

export default Dialog;
