"use client";

import { Button } from "@nextui-org/button";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsBraces } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";

import { FaPlay } from "react-icons/fa6";
import { IoIosCode } from "react-icons/io";
import { IoIosGlobe, IoIosSettings, IoIosShareAlt } from "react-icons/io";
import type { IconType } from "react-icons/lib";
import LanguageSelector from "../components/language_selector";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-dvh bg-gradient-to-b from-background to-default selection:bg-secondary selection:text-white">
      <header className="container mx-auto">
        <Navbar
          className="bg-inherit"
          isBlurred={false}
          maxWidth="full"
          position="static"
        >
          <NavbarBrand>
            <BsBraces className="size-6 text-primary lg:size-8" />
            <span className="text-lg font-bold md:text-3xl">Carai</span>
          </NavbarBrand>
          <NavbarContent justify="end">
            <NavbarItem className="transition-colors duration-500">
              <Link
                className="text-sm hover:text-primary md:text-lg"
                href="#features"
              >
                Features
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="text-sm hover:text-primary md:text-lg"
                href="#demo"
              >
                Demo
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link
                className="text-sm hover:text-primary md:text-lg"
                href="/sandbox"
              >
                Sandbox
              </Link>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
      </header>

      <main className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <section className="mb-16 text-center">
          <motion.h1
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-3xl font-bold md:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Write, Test, and Share Code Online
          </motion.h1>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-8 max-w-prose text-base text-default-500 md:text-xl"
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            An online platform to easily write, test, and share code with
            others. Your all-in-one open-source platform for coding sessions,
            testing, and collaboration.
          </motion.p>
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              className="text-white"
              color="primary"
              endContent={<FaAngleRight size={16} />}
              radius="sm"
              size="lg"
              startContent={<span>Try Sandbox</span>}
              variant="shadow"
              onPress={() => router.push("/sandbox")}
            />
          </motion.div>
        </section>

        <section className="mb-16" id="features">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Features
          </h2>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="cursor-pointer rounded-lg bg-background p-4 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-xl sm:p-6 lg:p-8"
              >
                <feature.icon className="mb-4 text-primary" size={40} />
                <h3 className="mb-2 text-lg font-semibold md:text-xl">
                  {feature.title}
                </h3>
                <p className="text-default-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16" id="demo">
          <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">
            Demo
          </h2>
          <LanguageSelector />
        </section>

        <section className="mb-16 text-center">
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            Ready to get started?
          </h2>
          <div>
            <Button
              className="text-white"
              color="primary"
              endContent={<FaAngleRight size={16} />}
              radius="sm"
              size="lg"
              startContent={<span>Try Sandbox</span>}
              variant="shadow"
              onPress={() => router.push("/sandbox")}
            />
          </div>
        </section>

        <footer className="container mx-auto">
          <Navbar
            className="bg-inherit"
            isBlurred={false}
            maxWidth="full"
            position="static"
          >
            <NavbarBrand>
              <p>Copyright &copy; {new Date().getFullYear()} Carai</p>
            </NavbarBrand>
            <NavbarContent justify="end">
              <NavbarItem>
                <Link
                  className="text-default-500 transition-colors hover:text-primary"
                  href="https://github.com/xosnrdev/carai"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub size={24} />
                </Link>
              </NavbarItem>
            </NavbarContent>
          </Navbar>
        </footer>
      </main>
    </div>
  );
}

type Feature = {
  icon: IconType;
  title: string;
  description: string;
};

const features: Feature[] = [
  {
    icon: IoIosCode,
    title: "Multi-language Support",
    description: "Write code in 44 programming languages.",
  },
  {
    icon: FaPlay,
    title: "Run Code",
    description:
      "The code is executed in a transient docker container without network.",
  },
  {
    icon: IoIosShareAlt,
    title: "Share Easily",
    description:
      "Share your code snippets with others by simply copying the URL.",
  },
  {
    icon: IoIosSettings,
    title: "Key Bindings",
    description: "The editor supports Visual Studio Code key bindings.",
  },
  {
    icon: IoIosGlobe,
    title: "Open Source",
    description:
      "If your favorite language or library is missing you can open an issue or pull request on GitHub to get it added.",
  },
] as const;
