import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { ArrowRight, ExternalLinkIcon, EyeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
const Page = () => {
  return (
    <div className="grid lg:grid-cols-[repeat(4,_1fr)] lg:grid-rows-[repeat(8,_1fr)] gap-4 mx-[10%] w-full h-auto mt-8 mb-8 justify-items-center lg:justify-items-normal">
      <Card className="lg:[grid-area:1_/_1_/_5_/_3] backdrop-blur-xl hover:border-amber-500 dark:hover:border-blue-500 border-2 transition-all text-center lg:text-start">
        <CardHeader className="text-2xl">Hi there!</CardHeader>
        <CardContent>
          <p>
            I am <span className="font-bold">Roman</span>, a software engineer
            with a focus on frontend dev.
          </p>
          <br />
          <p>
            My daily tools of choice include JavaScript / TypeScript, React,
            Next.js, Node.js, and a few more web dev goodies.
          </p>
          <br />
          <p>
            I&apos;m always open to new ideas and offers. I&apos;d love to hear
            from you - whether it&apos;s about potential collaborations or just
            a friendly hello! :)
          </p>
        </CardContent>
      </Card>
      <Card className="lg:[grid-area:1_/_3_/_5_/_4] backdrop-blur-xl hover:border-amber-500 dark:hover:border-blue-500 border-2 transition-all w-fit lg:w-full">
        <Image
          width={250}
          height={250}
          priority
          alt="profile image"
          src={"/profile-image-main.jpg"}
          className="rounded-lg m-auto object-cover mx-4 lg:mx-0 self-center shadow-2xl"
        />
      </Card>
      <Card className="lg:[grid-area:1_/_4_/_9_/_5] backdrop-blur-xl hover:border-amber-500 dark:hover:border-blue-500 border-2 transition-all text-center lg:text-start">
        <CardHeader className="text-2xl">About me</CardHeader>
        <CardContent className="lg:max-h-[600px] overflow-y-auto text-sm">
          <p>If you’re reading this, that officially makes us friends! ❤️</p>
          <br />
          <p>
            This little corner of the internet is where I share a bit about
            myself, my skills, and the projects I&apos;ve poured my heart into.
          </p>
          <br />
          <p>But frankly, there&apos;s more to me than just lines of code.</p>
          <br />
          <p>
            I&apos;m a proud{" "}
            <Link
              href={`https://wikipedia.org/wiki/Zillennials`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-0.5 text-blue-500 hover:text-blue-600 hover:underline"
            >
              zillennial
              <ExternalLinkIcon className="w-3" />
            </Link>
            {""} from{" "}
            <span className="bg-gradient-to-b from-[#005BBB] from-60% to-[#928028] to-40% text-transparent bg-clip-text inline-block">
              Ukraine.
            </span>
            <br />I am an OG soul mixed with a passion for new trends.
          </p>
          <br />
          <p>
            Beyond the tech world, there&apos;s a lot that keeps me inspired.
          </p>
          <br />
          <p>
            Music has always been a huge part of my life. I used to be the
            frontman (vocalist + guitarist), in a band called{" "}
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:underline">
                  Quiet Storm
                  <EyeIcon className="w-4" />.
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Preview</DialogTitle>
                  <DialogDescription>
                    Good times in{" "}
                    <span className="font-bold italic">Quiet Storm</span> band
                    together with my OG buddies.
                  </DialogDescription>
                </DialogHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index} className="self-center">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex justify-center align-middle aspect-square p-0">
                              <Image
                                alt={`Quiet Storm band ${index + 1}`}
                                priority
                                height={200}
                                width={200}
                                className="rounded-lg object-contain w-full"
                                src={`/quiet-storm/${index + 1}.jpg`}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </Carousel>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            <br />
            Whether it&apos;s discovering new sounds or creating my own, music
            keeps my creative energy alive.
          </p>
          <br />
          <p>
            {" "}
            Other than that, you&apos;ll probably find me{" "}
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:underline">
                  hiking through nature
                  <EyeIcon className="w-4" />
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Preview</DialogTitle>
                  <DialogDescription>hiking through nature</DialogDescription>
                </DialogHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 4 }).map((_, index) => (
                      <CarouselItem key={index} className="self-center">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex justify-center align-middle aspect-square p-0">
                              <Image
                                alt={`hiking through nature ${index + 1}`}
                                priority
                                height={200}
                                width={200}
                                className="rounded-lg object-contain w-full"
                                src={`/hiking-through-nature/${index + 1}.jpg`}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </Carousel>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            , chilling in a hammock, dreaming of my next trip, or cheering on my
            favorite teams in e-sports / football.
          </p>
          <br />
          <p>
            <Dialog>
              <DialogTrigger asChild>
                <span className="cursor-pointer inline-flex items-center gap-1 text-blue-500 hover:text-blue-600 hover:underline">
                  Here am I
                  <EyeIcon className="w-4" />
                </span>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Preview</DialogTitle>
                  <DialogDescription>
                    2018 UEFA Champions League final. Kyiv, Ukraine
                  </DialogDescription>
                </DialogHeader>
                <Carousel className="w-full">
                  <CarouselContent>
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem key={index} className="self-center">
                        <div className="p-1">
                          <Card>
                            <CardContent className="flex justify-center align-middle aspect-square p-0">
                              <Image
                                alt={`2018 UEFA Champions League final. Kyiv, Ukraine R S ${
                                  index + 1
                                }`}
                                priority
                                height={200}
                                width={200}
                                className="rounded-lg object-contain w-full"
                                src={`/cl-kyiv-2018/${index + 1}.jpg`}
                              />
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="-left-4" />
                  <CarouselNext className="-right-4" />
                </Carousel>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="button" variant="secondary">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
            , volunteering at 2018 UEFA Champions League final in Kyiv.
          </p>
          <br />
          <p>
            At the heart of it all, I&apos;m always trying to do my best for my
            family, my country, and our planet.
          </p>
          <br />
          <p>
            Thanks for reading - and hey, now that we&apos;re friends,
            let&apos;s <Celebration />
          </p>
        </CardContent>
      </Card>
      <Card className="lg:[grid-area:8_/_3_/_9_/_4] backdrop-blur-xl hover:border-amber-500 dark:hover:border-blue-500 border-2 transition-all relative hover:scale-105 lg:py-0 flex items-center justify-center min-w-1/2">
        <Link
          href={"/about/travel"}
          className="px-2 z-1 flex items-center justify-center text-gray-100 gap-2 w-full h-full"
        >
          <span className="text-xl">Countries I visited</span>
          <ArrowRight />
        </Link>
        <Image
          alt={`planet earth`}
          priority
          height={200}
          width={200}
          src={"/planet-earth.jpg"}
          className="absolute top-0 left-0 w-full h-full object-cover rounded-lg brightness-50 dark:brightness-35"
        />
      </Card>
    </div>
  );
};

export default Page;
