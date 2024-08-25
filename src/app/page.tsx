/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";

import { db } from "~/server/db";


export const dynamic = "force-dynamic";





export default async function HomePage() {

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...images, ...images,].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48 flex flex-col">
            <img src={image.url} alt="images" />
            <div>{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
