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
        <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">

                <div>
                <h2 className="text-lg text-gray-700">{name}</h2>

                <p className="text-sm text-gray-600">{description}</p>
                </div>

        </section>
        </Link>


            );
};
 export default TechnologyCard;
