import Link from "next/link";
import Container from "../components/Container";

export default function Home() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          Hey, I’m Tanmay Gujar
        </h1>
        <h2 className="prose text-gray-600 dark:text-gray-400 mb-16">
          I’m a MS CS student at UC San Diego. You’ve found my personal slice of
          the internet.
        </h2>
      </div>
    </Container>
  );
}
