import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import TechnologyCard from "../components/TechnologyCard";
const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-fit flex-col items-center justify-center p-2">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          <span className="text-orange-300">About</span>
        </h1>
        <p className="text-2xl text-blue-300">
          Some of the things I am passionate about:
        </p>

        <div className="mt-3 grid gap-2 pt-3 text-center md:grid-cols-2 ">
          <TechnologyCard
            name="FullStack Development"
            description="FullStack Development is an exciting and rewarding field that allows me to use my creativity and technical skills to build innovative and impactful web applications. It requires a constant willingness to learn and adapt to new technologies"
            documentation=""
          />
          <TechnologyCard
            name="Web3 Dapp Development"
            description="
            Love creating decentralized applications that are built on top of blockchain technology, enabling peer-to-peer interactions without the need for an intermediary.
            Also following almost every ethereum developer out there on Github"
            documentation=""
          />
        </div>
      </main>
    </>
  );
};

export default Home;

const AuthShowcase: React.FC = () => {
  const { data: secretMessage } = trpc.auth.getSecretMessage2.useQuery();

  const { data: sessionData } = useSession();

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      {secretMessage && (
        <>
          <Link className="text-2xl text-blue-900" href="/stripe">
            Become a Paid Member
          </Link>
        </>
      )}
    </div>
  );
};
