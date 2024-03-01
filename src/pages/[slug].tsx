import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from 'next/router'
 
const Home: NextPage = () => {
  const router = useRouter()
  const visit=(url:string)=>{
    window.location.href = url;
  }
  switch (router.query.slug) {
    case 'flash-cards':
      setTimeout(()=>{visit("https://flashcard-pearl.vercel.app/")}, 3000)
      break;
    case 'verbal-agent':
      setTimeout(()=>{visit("https://ai-chatgpt-ninja-1337.vercel.app/")}, 3000)
      break;
    case 'hack-the-box':
      setTimeout(()=>{visit("https://paldeck.pro/")}, 3000)
      break;
    default:
      console.log(`Sorry, we are out of`);
  }

  
  return (
    <>
      <Head>
        <title>Redirect</title>
        <meta name="red" content="red" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto flex min-h-fit flex-col items-center justify-center mt-64 p-2">
        <h1 className="text-5xl font-extrabold leading-normal text-gray-700 md:text-[5rem]">
          <span className="text-orange-300">Redirecting to  {router.query.slug} in 2 seconds</span>
        </h1>
      
       
      </main>
    </>
  );
};

export default Home;
