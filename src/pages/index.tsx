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
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[4rem]">
          <span className="text-orange-700">Portfolio</span>
        </h1>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="Verbal-Agent"
            description="A variety of agents for different tasks powered by GPT-3 "
            documentation="https://ninja1337.com/"
          />
             <TechnologyCard
            name="SunSpot"
            description="A beach booking app--In Progress--"
            documentation="https://sunspot-bay.vercel.app/"
          />
          <TechnologyCard
            name="Pay Trends"
            description="Payment data for diferent job positions around the world"
            documentation="https://trend-teal.vercel.app/"
          />
          <TechnologyCard
            name="Stripe Shop"
            description="A template for an e-shop with shopping cart using react and Stripe"
            documentation="https://with-stripe-typescript-dun.vercel.app/"
          />
          <TechnologyCard
            name="SouvlaSwap"
            description="Currently Down due to Kovan network Discontinuation-- Polygon Deployment Underway -- "
            documentation="https://souvlaswap-interface.vercel.app/"
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

