export function Footer() {
  return (
    <footer className="flex items-center justify-between bg-black px-[26px] py-[14px] font-serif text-[13px] text-[#e9e9e9]">
      <div className="flex gap-[10px]">
        <a href="#" className="inline-flex min-h-[44px] items-center pr-3 opacity-85 hover:opacity-100">Terms &amp; Support</a>
        <a href="#" className="inline-flex min-h-[44px] items-center px-3 opacity-85 hover:opacity-100">Privacy Policy</a>
      </div>
      <div className="opacity-85">
        Designed with <span className="text-[#c85a6a]">&#9829;</span>
      </div>
    </footer>
  );
}
