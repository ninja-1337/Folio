import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { useTheme as useNextTheme } from 'next-themes'
import { trpc } from "../utils/trpc";
import TechnologyCard from "../components/TechnologyCard";
const Home: NextPage = () => {
  const hello = trpc.example.hello.useQuery({ text: "from tRPC" });
  const {setTheme, theme}   = useNextTheme();
 
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="About" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-fit flex-col items-center justify-center p-2">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[4rem]">
          <span className={theme=="dark" ? "text-orange-700" : "text-orange-400"}>Portfolio</span>
        </h1>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="Verbal-Agent"
            description="A variety of agents for different tasks powered by GPT-3 "
            documentation="https://ai-chatgpt-ninja-1337.vercel.app/"
          />
          <TechnologyCard
            name="FlashCards"
            description="Memorization tool"
            documentation="https://flashcard-pearl.vercel.app/view"
          />

          <TechnologyCard
            name="PalDeck"
            description="Palworld Poke-Dex"
            documentation="https://paldeck.pro"
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
          u{" "}
        </>
      )}
    </div>
  );
};

