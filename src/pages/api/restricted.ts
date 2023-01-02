import { type NextApiRequest, type NextApiResponse } from "next";
import { prisma } from "../../server/db/client";

import { getServerAuthSession } from "../../server/common/get-server-auth-session";

const restricted = async (req: NextApiRequest, res: NextApiResponse) => {
  // const session = await getServerAuthSession({ req, res });
  // const user = session?.user;
  // await prisma.guestbook.create({
  //   data: { email: "ggggdsadasg", body: "gasg", id: 525 },
  // });
  // res.json({
  //   email: "ggggdsadasg",
  //   body: "gasg",
  //   id: 525,
  //   created_by: user,
  // });
};

export default restricted;
