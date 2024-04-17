"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navLinks = [
    { name: "register", href: "/register" },
    { name: "login", href: "/login" },
    { name: "forgot-password", href: "/forgot-password" },
  ];
  const pathname = usePathname();
  const [input, setInput] = useState("");

  return (
    <div className="">
      <div className="text-black">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return (
          <Link
            href={link.href}
            className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}
          >
            {link.name}
          </Link>
        );
      })}
      <h2>Inner Layout</h2>
      {children}
    </div>
  );
}
