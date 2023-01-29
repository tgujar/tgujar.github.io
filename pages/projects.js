import Image from "next/image";
import profilePic from "../public/static/images/avatar.jpg";
import Container from "@/components/Container";
import ExternalLink from "@/components/ExternalLink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faGithub,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Projects() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Work
            </h1>
          </div>
          <div className="relative mb-8 sm:mb-0 mr-auto">
            <div className="flex flex-col space-y-2 ">
              <ExternalLink href="https://twitter.com/_tgujar">
                <FontAwesomeIcon icon={faTwitter} className="mr-1" />
                twitter.com/_tgujar
              </ExternalLink>
              <ExternalLink href="https://github.com/tgujar">
                <FontAwesomeIcon icon={faGithub} className="mr-1" />
                github.com/tgujar
              </ExternalLink>
              <ExternalLink href="https://github.com/tgujar">
                <FontAwesomeIcon icon={faLinkedinIn} className="mr-1" />
                linkedin.com/in/tanmay-gujar-3014b3ba
              </ExternalLink>
            </div>
            <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 mt-5 rounded inline-flex items-center">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>One page Resume</span>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}
