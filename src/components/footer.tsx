import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function Footer() {
  return (
    <footer className="mt-[270px]">
      <Separator />
      <div className="p-4 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://iron-stream.zustack.com" className="flex items-center">
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
                Iron Stream
                </span>
              </a>
              <p className="flex gap-1 text-sm mt-4 text-zinc-400">
                <span>Iron Stream is develop and mantained by </span>
                <a
                  href="https://zustack.com"
                  target="_blank"
                  className="hover:underline"
                >
                  Zustack
                </a>
              </p>

              <a href="mailto:contact@zustack.com" target="_blank">
                <Button className="mt-4 font-semibold">Book a meeting</Button>
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
              <div>
                <h2 className="mb-6 text-sm font-semibold uppercase text-zinc-200">
                  SITEMAP
                </h2>
                <ul className="text-zinc-400">
                  <li className="mb-4">
                    <a href="#home" className="hover:underline">
                      Home
                    </a>
                  </li>
                  <li className="mb-4">
                    <a href="#about" className="hover:underline">
                      About
                    </a>
                  </li>

                  <li className="mb-4">
                    <a href="#pricing" className="hover:underline">
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <Separator className="my-6" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm sm:text-center text-zinc-500">
              © 2024{" "}
              <a href="https://iron-stream.zustack.com" className="hover:underline">
                  Iron Stream
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
