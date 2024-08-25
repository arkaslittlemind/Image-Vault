/* eslint-disable @next/next/no-img-element */
// import Link from "next/link";

import { db } from "~/server/db";


export const dynamic = "force-dynamic";


const mockUrls = [
    "https://utfs.io/f/018e8d53-c051-4a94-8af3-2d20b0ddd2af-c3f9ah.jpg",
    "https://utfs.io/f/9520f926-d581-4223-abf4-63614c675440-hgx74m.jpg",
    "https://utfs.io/f/e5bfec04-4716-4be8-a94a-f719040e402f-hj0smb.jpg",
    "https://utfs.io/f/220b4fb8-4ac9-4b9d-8b6c-f6f02c5e3fbd-jfkdqo.jpg",          
]

const mockImages = mockUrls.map((url, index) => ({
    id: index + 1,
    url,
}));


export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} alt="images" />
          </div>
        ))}
      </div>
    </main>
  );
}
