import Image from "next/image";
import { InstagramIcon } from "lucide-react";

import { TypographySmall, TypographyH3 } from "@/components/ui/typography";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-4">
      <Image
        src="/img/photo2.jpg"
        alt="Image 1"
        width={70}
        height={70}
        className="rounded-full"
      />
      <TypographySmall>سلام، من سامانم 👋</TypographySmall>
      <TypographyH3 className="text-center">
        دانشجو کارشناسی رشته برق قدرت
      </TypographyH3>
      <a href="https://www.instagram.com/saman__8__/">
        <InstagramIcon className="w-8" />
      </a>
    </main>
  );
}
