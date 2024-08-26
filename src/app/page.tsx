/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";


export const dynamic = "force-dynamic";


async function Images() {

  const images = await getMyImages();

  return (
    <div className="flex flex-wrap gap-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} alt="images" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
  )
} 


export default async function HomePage() {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl text-center">Please sign in above 👆</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
