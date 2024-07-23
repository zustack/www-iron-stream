import { Button } from "./ui/button";

export default function Hero() {
  return (
    <div id="home" className="lg:min-h-screen">
      <div className="flex justify-center">
        <div className="mt-[100px] mb-[100px] lg:mt-[200px]">
          <h1 className="text-center lg:text-8xl md:text-5xl text-3xl sm:text-4xl font-semibold">
            <span>We protect your</span>
            <br />
            <span>multimedia content</span>
          </h1>
          <div className="px-11">
            <h1 className="mt-11 text-black md:text-2xl text-center dark:text-zinc-500">
              <span>
                Iron Stream is a software that protects your content from
              </span>
              <br />
              <span>piracy using Digital Rights Management.</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <a href="mailto:contact@zustack.com" target="_blank">
              <Button className="mt-8 font-semibold">Book a meeting</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
