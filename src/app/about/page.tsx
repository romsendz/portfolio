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
