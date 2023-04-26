import  Link  from "next/link";
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


        <Link href={documentation}>
        <section className="flex min-h-full flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">

            
                <h2 className="text-lg text-white-700">{name}</h2>

                <p className="text-sm text-gray-400">{description}</p>
           

        </section>
        </Link>


            );
};
 export default TechnologyCard;
