import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { CheckIcon } from "lucide-react";

export default function Pricing() {
  return (
    <div id="pricing" className="lg:min-h-screen">
      <div className="flex justify-center">
        <div className="mt-[100px] mb-[100px] lg:mt-[200px]">
          <h1 className="text-center text-zinc-100 font-semibold text-3xl sm:text-6xl mb-4">
            <span>Worry about your content,</span>
            <br />
            <span>not your bill.</span>
          </h1>

          <h1 className="mt-11 text-xl text-center dark:text-zinc-500">
            <span>We wanted pricing to be as simple as possible.</span>
            <br />
            <span>No calculator needed.</span>
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5  gap-8 lg:gap-4">
        <div className="col-start-2">
          <Card className="p-4 bg-transparent">
            <CardHeader>
              <CardTitle>100 GB App</CardTitle>
              <CardDescription>For those with some content.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-2xl font-bold">$45</span>{" "}
                <span className="text-zinc-300">/ month</span>
              </p>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">100 GB of storage</p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">
                  Unlimited uploads and downloads
                </p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">24/7 support</p>
              </div>
            </CardContent>
            <CardFooter>
                <a href="mailto:contact@zustack.com" 
                className="w-full"
                target="_blank">
                  <Button className="w-full font-semibold">Book a meeting</Button>
                </a>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="p-4 bg-transparent">
            <CardHeader>
              <CardTitle>300 GB App</CardTitle>
              <CardDescription>For those with some content.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-2xl font-bold">$90</span>{" "}
                <span className="text-zinc-300">/ month</span>
              </p>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">300 GB of storage</p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">
                  Unlimited uploads and downloads
                </p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">24/7 support</p>
              </div>
            </CardContent>
            <CardFooter>
                <a href="mailto:contact@zustack.com" 
                className="w-full"
                target="_blank">
                  <Button className="w-full font-semibold">Book a meeting</Button>
                </a>
            </CardFooter>
          </Card>
        </div>

        <div>
          <Card className="p-4 bg-transparent">
            <CardHeader>
              <CardTitle>Unlimited App</CardTitle>
              <CardDescription>Need more gigs?</CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                <span className="text-2xl font-bold">Custom</span>
              </p>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">Usage based pricing</p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">Unlimited storage</p>
              </div>

              <div className="mt-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0">
                <CheckIcon className="h-4 w-4 text-green-500" />
                <p className="font-medium leading-none">24/7 support</p>
              </div>
            </CardContent>
            <CardFooter>
                <a href="mailto:contact@zustack.com" 
                className="w-full"
                target="_blank">
                  <Button className="w-full font-semibold">Book a meeting</Button>
                </a>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
