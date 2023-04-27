import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Switch, useTheme } from '@nextui-org/react'
import { trpc } from "../utils/trpc";
import { useTheme as useNextTheme } from 'next-themes'
import TechnologyCard from "../components/TechnologyCard";
const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const {setTheme, theme}   = useNextTheme();
 


  return (
    <>

<>It is {theme}</>
      <main className="container mx-auto flex min-h-fit flex-col items-center justify-center p-1">
        <h2 className="text-3xl font-extrabold leading-normal text-gray-700 md:text-[3rem]">
          <span className={theme=="dark" ? "text-orange-700" : "text-orange-400"}>About</span>
        </h2>
       
        <p className="text-2xl text-blue-300 md:text-[19px]">
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
