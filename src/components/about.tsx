import { ChartLine, FileVideo, ShieldAlert } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

export default function About() {
  const [image, setImage] = useState(1);

  return (
    <>
      <div id="about" className="mb-[100px]" />
      <div className="min-h-screen px-4 py-8 sm:px-6 lg:px-8">
        <section className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
            <div className="w-full">
              <h1 className="text-zinc-100 font-semibold text-3xl sm:text-6xl mb-4">
                How does it work?
              </h1>
              <p className="mb-8 md:text-xl text-zinc-400">
                We adapt a desktop aplication to protect your content. You just
                need to follow these simple steps:
              </p>

              <div className="flex-col space-y-4">
                {[
                  {
                    icon: <FileVideo />,
                    title: "Upload your content",
                    description: "Upload your content in your app.",
                  },
                  {
                    icon: <ShieldAlert />,
                    title: "Add your forbidden apps",
                    description:
                      "Add the applications that should be blocked while your app is running. This will prevent your customers from using these apps. Examples include OBS, Xbox Game Bar, QuickTime Player, and others",
                  },
                  {
                    icon: <ChartLine />,
                    title: "Distribute your custom app",
                    description:
                      "Distribute your custom app to your customers and protect your content.",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setImage(index + 1)}
                    className={`${
                      image === index + 1
                        ? "bg-zinc-700/50"
                        : "hover:bg-zinc-700/50 transition-colors duration-300"
                    } rounded-lg cursor-pointer`}
                  >
                    <div className="flex items-center gap-4 p-4">
                      <div className="border border-zinc-500 rounded-lg p-3 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-white font-semibold block mb-1">
                          {item.title}
                        </span>
                        <span className="text-zinc-300 text-sm">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-center lg:justify-start">
                <a href="mailto:contact@zustack.com" target="_blank">
                  <Button className="mt-8 font-semibold">Book a meeting</Button>
                </a>
              </div>
            </div>

            <div className="w-full mt-8 lg:mt-0">
              <img
                className="rounded-md w-full h-auto object-cover"
                src="/video-file.svg"
                alt="Meeting illustration"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
