"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

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

  return (
    <div className="">
      {navLinks.map((link) => {
        const isActive = pathname.startsWith(link.href);
        return <Link href={link.href} className={isActive?"font-bold mr-4":"text-blue-500 mr-4"}>{link.name}</Link>;
      })}
      <h2>Inner Layout</h2>
      {children}
    </div>
  );
}
