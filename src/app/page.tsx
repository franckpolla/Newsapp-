import Post from "@/section/Post";
import Hero from "@/section/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container p-8">
      <Hero />
      <Post />
    </main>
  );
}
