import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import NavBar from "../components/NavBar";
import { trpc } from "../utils/trpc";

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
          <span className="text-orange-300">Portfolio</span>
        </h1>
        <div className="mt-3 grid gap-3 pt-3 text-center md:grid-cols-3 lg:w-2/3">
          <TechnologyCard
            name="Verbal-Agent"
            description="A variety of agents for different tasks powered by GPT-3 "
            documentation="https://ninja1337.com/"
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
            documentation="https://souvlaswap.com/"
          />

          <TechnologyCard
            name="Busy Card"
            description="A business email signature generator "
            documentation="https://busy-card-ninja-1337.vercel.app"
          />

          <TechnologyCard
            name="SunSpot"
            description="A beach booking app--In Progress--"
            documentation="/"
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

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const TechnologyCard = ({
  name,
  description,
  documentation,
}: TechnologyCardProps) => {
  return (
    <section className="flex flex-col justify-center rounded border-2 border-gray-500 p-6 shadow-xl duration-500 motion-safe:hover:scale-105">
      <h2 className="text-lg text-gray-700">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
      <Link
        className="m-auto mt-3 w-fit text-sm text-violet-500 underline decoration-dotted underline-offset-2"
        href={documentation}
        target="_blank"
        rel="noreferrer"
      >
        Link
      </Link>
    </section>
  );
};
