import { type NextApiRequest, type NextApiResponse } from "next";

import { prisma } from "../../server/db/client";

const examples = async (req: NextApiRequest, res: NextApiResponse) => {
  res.json({
    email: "gg",
    body: "gg",
    id: 552,

    created_by: {
      id: "      ",
      subscribed: false,
      name: null,
      email: " ",
      image: null,
      emailVerified: new Date("1995-12-17T03:24:00"),
    },
  });
};

export default examples;
