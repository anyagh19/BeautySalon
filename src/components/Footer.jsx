export default function Footer() {
  return (
    <footer className="bg-white text-black py-10 mt-20">
      <div className="max-w-6xl mx-auto px-6">
       
        {/* Logo */}
        <div className="text-center text-3xl font-semibold mb-8">
          <span className="text-5xl font-cursive text-black">Nelson</span>
        </div>

        {/* Bottom Nav */}
        <div className="flex justify-center gap-6 text-sm mb-4">
          {["Home", "Services", "About us", "Features", "News", "Shop", "Contacts"].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-400 text-lg">
              {item}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-center text-gray-400 text-sm">
          ThemeREX © 2025. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
