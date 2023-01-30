import profilePic from "@/public/static/images/avatar.jpg";
import Image from "next/image";

export default function ProjectCard({ img, title, highlights, href }) {
  return (
    <div className="w-full flex flex-row space-x-4 items-start">
      {img ? (
        <Image alt={title} height={44} width={44} sizes="20vw" src={img} />
      ) : (
        <div className="h-14 w-14 box-border p-4">&nbsp;</div>
      )}
      <div className="flex flex-col">
        <h4 className="w-full text-lg font-medium text-gray-900 md:text-xl dark:text-gray-100">
          {href ? (
            <a
              className="text-white hover:text-gray-500 transition no-underline cursor-pointer"
              target="_blank"
              rel="noopener noreferrer"
              href={href}
            >
              {title}
            </a>
          ) : (
            <>{title}</>
          )}
        </h4>
        <div className="text-gray-600 dark:text-gray-400">
          <ul class="list-disc ml-0 pl-0">
            {highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
