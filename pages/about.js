import Image from "next/image";
import profilePic from "@/public/static/images/avatar.jpg";
import Container from "@/components/Container";

export default function About() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              About Me
            </h1>
            <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
              <p>
                Hey, I’m Tanmay. I'm currently a MS CS student at UC San Diego.
                I am interested in Systems, Web Development and anything close
                to hardware. I am also a Robotics hobbyist and enjoy working on
                small (but cool) projects.
              </p>

              <p>
                I spend my free time reading up on tech blogs, binging on F1 and
                cat videos, and working on side projects.
              </p>
            </div>
          </div>
          <div className="w-[80px] sm:w-[320px] relative mb-8 sm:mb-0 mr-auto">
            <Image
              alt="Tanmay Gujar"
              height={320}
              width={320}
              src={profilePic}
              sizes="30vw"
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
