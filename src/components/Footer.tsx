// Footer.tsx
export function Footer() {
  return (
    <footer className="py-8 text-center bg-[#071025]/80 backdrop-blur-xl text-gray-300 border-t border-[#4b9bff]/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-[#4b9bff]/30 to-[#6EE7B7]/30 blur-lg"></div>
      © {new Date().getFullYear()} ResQ — Built for Community Impact.
    </footer>
  );
}
