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
import WorkCard from "@/components/WorkCard";
import ProjectCard from "@/components/ProjectCard";

const experience = {
  vmware: [
    "Developed a Slack app in Golang to reduce time taken to trigger builds on Jenkins, fetch job status and view analytics.",
    "Implemented a RabbitMQ based task queue to handle task execution and provide fault tolerance.",
    "Improved maintainability of test framework by offloading tasks from Jenkins Pipeline.",
    "Managed containerization and orchestration of the application using Docker and Kubernetes.",
  ],
  samyak: [
    "Created a microservice in AWS Lambda to create and edit a chatbot reducing chatbot development time by 50%",
    "Designed a live chat feature as a failover for automated chatbot responses using Redis and websockets.",
    "Implemented REST APIs in Flask framework to interact with a chatbot frontend.",
    "Increased user reach by extending the chatbot to work with Facebook Messenger frontend.",
    "Developed a web crawler to scrape data for chatbot knowledge base reducing deployment time by 60%",
  ],
  ta: [
    "Hosted discussions sessions and office hours for 100+ students.",
    "Graded assignments and examinations",
    "Created resouce material and debugged Distributed systems assignments in Golang",
  ],
};

const projects = {
  surfstore: [
    "Implemented a networked file storage application based on the Google file system.",
    "Designed a gRPC interface between the client program and the file storage server.",
    "Implemented RAFT consensus algorithm to provide fault tolerance for the networked storage",
  ],
  lcm: [
    "Designed a system for fast and automated live container migration in cloud environments.",
    "Developed a greedy scheduling algorithm for optimal container management in a VM cluster.",
    "Tested system design and evaluated container migration downtime with AWS EC2 and AWS EFS.",
  ],
  sysperf: [
    "Designed experiments to measure performance of memory, network and file system on an x86 based Linux system.",
    "Improved accuracy by evaluating gcc compiler flags and generated ASM code using GDB",
  ],
  fmm: [
    "Improved performance on CPU by 50× using caching strategies and vectorization using SIMD.",
    "Developed a GPU optimized version of blocked matrix multiply for NVIDIA K80 based on CUTLASS.",
    "Optimized GPU matrix multiply to achieve 0.6× peak computational intensity and 800 GFLOPS for large numbers.",
  ],
  chocopy: [
    "Collaborated with a 30+ member team to create a compiler in TypeScript to compile programs from Python to WASM.",
    "Developed a web playground to write, compile and run Python programs.",
    "Implemented a garbage collector for the compiled program based on Next fit algorithm and Boundary tags.",
  ],
  hpc: [
    "Developed a parallelized version of Aliev-Panfilov cardiac simulation using Open MPI.",
    "Optimized compute to reduce message passing overhead and vectorized compute loop.",
    "Deployed solution on Expanse at the San Diego Supercomputer Center achieving 3 TFLOPS at 256 cores.",
  ],
  indy: [
    "Implemented a ROS2 node to perform localization based on the distance to wall using the LIDAR pointcloud.",
    "Implemented a GPS and LIDAR pointcloud based method to give better estimated of vehicle heading.",
    "Tested the developed nodes on the LGSVL simulator and using ROS2 bags containing actual data from the cars.",
  ],
  eyrc: [
    "Implemented a Convolutional neural network using PyTorch to accurately identify animals and their habitats",
    "Implemented navigation and path traversal for AVR microcontroller based Firebird-V robotics platform.",
  ],
};

export default function Resume() {
  return (
    <Container>
      <div className="flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
        <div className="flex flex-col-reverse sm:flex-row items-start">
          <div className="flex flex-col pr-8">
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Work
            </h1>
            <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
              <WorkCard
                title="Teaching Assistant - Graduate Networked Systems"
                company="University of California, San Diego"
                highlights={experience.ta}
                href="https://cse.ucsd.edu/graduate/degree-programs/"
                img="/static/images/ucsd.jpg"
              />
              <WorkCard
                title="Member of Techinical Staff, Intern"
                company="VMware, Inc."
                highlights={experience.vmware}
                href="https://www.vmware.com/"
                img="/static/images/vmware.jpg"
              />
              <WorkCard
                title="Software Engineer"
                company="Samyak Innovations Pvt. Ltd."
                highlights={experience.samyak}
              />
            </div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Projects
            </h1>
            <div className="mb-8 prose leading-6 text-gray-600 dark:text-gray-400">
              <ProjectCard
                title="Surfstore - Distributed File System"
                highlights={projects.surfstore}
                img="/static/images/raft.jpg"
              />
              <ProjectCard
                title="Live Container Migration for Cloud"
                highlights={projects.lcm}
                href="https://github.com/tgujar/live-migrate"
                img="/static/images/live_migrate.jpg"
              />
              <ProjectCard
                title="sysperf - OS Perfromance Measurement"
                highlights={projects.sysperf}
                href="https://github.com/tgujar/sys-perf"
              />
              <ProjectCard
                title="Fast Matrix Multiply on CPU and GPU"
                highlights={projects.fmm}
              />
              <ProjectCard
                title="Chocopy - Python to WASM Compiler"
                highlights={projects.chocopy}
                href="https://github.com/tgujar/chocopy-wasm-compiler-A"
              />
              <ProjectCard
                title="Aliev-Panfilov HPC Simulation"
                highlights={projects.hpc}
                img="/static/images/hpc.jpg"
              />
              <ProjectCard
                title="Indy Autonomous Challenge 2022"
                highlights={projects.indy}
                img="/static/images/indy.jpg"
              />
              <ProjectCard
                title="eYRC 2018 Robotics Competition"
                highlights={projects.eyrc}
                href="https://gitlab.com/tanmaygujar999/eyantra-2018"
                img="/static/images/eyantra.jpg"
              />
            </div>
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
