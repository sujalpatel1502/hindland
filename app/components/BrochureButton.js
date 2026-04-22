"use client";

import { useState } from "react";
import BrochureModal from "./BrochureModal";

export default function BrochureButton({
  children,
  className,
  source,
  icon = "download",
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {icon ? (
          <span className="material-symbols-outlined text-base">{icon}</span>
        ) : null}
        {children}
      </button>
      <BrochureModal
        open={open}
        onClose={() => setOpen(false)}
        source={source}
      />
    </>
  );
}
