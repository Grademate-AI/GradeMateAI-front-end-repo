import React from "react";

export function Footer() {
  return (
    <footer className="py-6 text-center bg-primary border-t border-secondary/20 text-gray-400">
      © {new Date().getFullYear()} ResQ — Built for Community Impact.
    </footer>
  );
}
