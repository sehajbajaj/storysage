import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

export default function HeroPage() {
  return (
    <div>
      {/* Hero */}
      <div className="relative bg-gradient-to-bl from-primary-foreground via-primary-foreground to-background">
        <div className="container py-24 sm:py-32">
          {/* Grid */}
          <div className="grid items-center md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <p className="inline-block text-sm font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-violet-500 text-transparent dark:from-blue-400 dark:to-violet-400">
                A vision for 2024
              </p>
              {/* Title */}
              <div className="mt-4 md:mb-12 max-w-2xl">
                <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  Cloud Unleashed: Your Future in the Sky
                </h1>
                <p className="text-xl text-muted-foreground">
                  Experience limitless possibilities with our cutting-edge cloud
                  solutions.
                </p>
              </div>
              {/* End Title */}
              {/* Blockquote */}
              <blockquote className="hidden md:block relative max-w-sm">
                <svg
                  className="absolute top-0 start-0 transform -translate-x-6 -translate-y-8 h-16 w-16 text-foreground/10"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    d="M7.39762 10.3C7.39762 11.0733 7.14888 11.7 6.6514 12.18C6.15392 12.6333 5.52552 12.86 4.76621 12.86C3.84979 12.86 3.09047 12.5533 2.48825 11.94C1.91222 11.3266 1.62421 10.4467 1.62421 9.29999C1.62421 8.07332 1.96459 6.87332 2.64535 5.69999C3.35231 4.49999 4.33418 3.55332 5.59098 2.85999L6.4943 4.25999C5.81354 4.73999 5.26369 5.27332 4.84476 5.85999C4.45201 6.44666 4.19017 7.12666 4.05926 7.89999C4.29491 7.79332 4.56983 7.73999 4.88403 7.73999C5.61716 7.73999 6.21938 7.97999 6.69067 8.45999C7.16197 8.93999 7.39762 9.55333 7.39762 10.3ZM14.6242 10.3C14.6242 11.0733 14.3755 11.7 13.878 12.18C13.3805 12.6333 12.7521 12.86 11.9928 12.86C11.0764 12.86 10.3171 12.5533 9.71484 11.94C9.13881 11.3266 8.85079 10.4467 8.85079 9.29999C8.85079 8.07332 9.19117 6.87332 9.87194 5.69999C10.5789 4.49999 11.5608 3.55332 12.8176 2.85999L13.7209 4.25999C13.0401 4.73999 12.4903 5.27332 12.0713 5.85999C11.6786 6.44666 11.4168 7.12666 11.2858 7.89999C11.5215 7.79332 11.7964 7.73999 12.1106 7.73999C12.8437 7.73999 13.446 7.97999 13.9173 8.45999C14.3886 8.93999 14.6242 9.55333 14.6242 10.3Z"
                    fill="currentColor"
                  />
                </svg>
                <div className="relative z-10">
                  <p className="text-xl italic">
                    Amazing people to work with. Very fast and professional
                    partner.
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <img
                        className="h-8 w-8 rounded-full"
                        src="https://placehold.co/100x100"
                        alt="Image Description"
                      />
                    </div>
                    <div className="grow ms-4">
                      <div className="font-semibold">Emily Torres</div>
                      <div className="text-xs text-muted-foreground">
                        Chief Technology Officer | Skyward SaaS
                      </div>
                    </div>
                  </div>
                </footer>
              </blockquote>
              {/* End Blockquote */}
            </div>
            {/* End Col */}
            <div>
              {/* Form */}
              <form>
                <div className="lg:max-w-lg lg:mx-auto lg:me-0 ms-auto">
                  {/* Card */}
                  <Card>
                    <CardHeader className="text-center">
                      <h2 className="text-2xl font-semibold leading-none tracking-tight">
                        Start your free trial
                      </h2>
                      <CardDescription>
                        Already have an account?{" "}
                        <a
                          className="text-primary hover:underline underline-offset-4"
                          href="#"
                        >
                          Sign in here
                        </a>
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant={"outline"}>
                        <svg
                          className="w-4 h-auto mr-2"
                          width={46}
                          height={47}
                          viewBox="0 0 46 47"
                          fill="none"
                        >
                          <path
                            d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                            fill="#34A853"
                          />
                          <path
                            d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                            fill="#FBBC05"
                          />
                          <path
                            d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                            fill="#EB4335"
                          />
                        </svg>
                        Sign up with Google
                      </Button>
                      <div className="relative">
                        <Separator asChild className="my-3 bg-background">
                          <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t before:border-gray-200 before:me-6 after:flex-[1_1_0%] after:border-t after:border-gray-200 after:ms-6 dark:before:border-gray-700 dark:after:border-gray-700">
                            Or
                          </div>
                        </Separator>
                      </div>
                      <div className="mt-5">
                        {/* Grid */}
                        <div className="grid grid-cols-2 gap-4">
                          <Input placeholder="First name" />
                          <Input placeholder="Last name" />
                          <Input placeholder="Email" />
                          <Input placeholder="Company name" />
                          <Input
                            className="col-span-2"
                            placeholder="New password"
                          />
                          <Input
                            className="col-span-2"
                            placeholder="Current password"
                          />
                          <div className="flex items-center space-x-2 mt-3 col-span-2">
                            <Checkbox id="terms" />
                            <Label htmlFor="terms">
                              Accept terms and conditions
                            </Label>
                          </div>
                          <Button className="mt-3 col-span-2">
                            Get started
                          </Button>
                        </div>
                        {/* Grid End */}
                      </div>
                    </CardContent>
                  </Card>
                  {/* End Card */}
                </div>
              </form>
              {/* End Form */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
        {/* End Clients Section */}
      </div>
      {/* End Hero */}
    </div>
  );
}
