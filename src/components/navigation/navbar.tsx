"use client";

import Link from "next/link";
import { useState } from "react";
import Icons from "../global/icons";
import { buttonVariants } from "../ui/button";
import { Menu, X } from "lucide-react";
import { UserButton, useUser } from "@clerk/nextjs";

const Navbar = () => {
  const user = useUser();
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="px-4 h-14 fixed top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50">
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href={"/"} className="flex items-center gap-2">
            <Icons.logo className="size-8" />
            <span className="text-lg font-medium">Astra</span>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"#"}>Pricing</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"#"}>About</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"#"}>Features</Link>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <Link href={"#"}>Blog</Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {user.isSignedIn ? (
            <UserButton />
          ) : (
            <>
              <Link
                className={buttonVariants({ size: "sm", variant: "ghost" })}
                href={"/sign-in"}
              >
                Login
              </Link>
              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "hidden md:flex",
                })}
                href={"/sign-up"}
              >
                Start free trial
              </Link>
            </>
          )}

          <div className="flex md:hidden">
            {!isOpen ? (
              <Menu
                className="size-5 cursor-pointer hover:text-foreground/80"
                onClick={handleMenu}
              />
            ) : (
              <X
                className="size-5 cursor-pointer hover:text-foreground/80"
                onClick={handleMenu}
              />
            )}
          </div>
        </div>

        {isOpen && (
          <nav className="fixed top-[100%] h-[calc(100vh-56px)] right-0 w-[300px] p-4   bg-background/95 backdrop-blur-lg border-t border-border z-50">
            <ul className="flex flex-col items-start gap-8">
              <li className="hover:text-foreground/80 text-sm">
                <Link href={"#"}>Pricing</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href={"#"}>About</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href={"#"}>Features</Link>
              </li>
              <li className="hover:text-foreground/80 text-sm">
                <Link href={"#"}>Blog</Link>
              </li>

              {!user.isSignedIn && (
                <div className="flex items-center gap-4">
                  <Link
                    className={buttonVariants({
                      size: "sm",
                      className: "flex",
                    })}
                    href={"/sign-up"}
                  >
                    Start free trial
                  </Link>
                </div>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
