import { secureApi } from "../../helpers";

const handler = (req, res) => {
  if (req.method === "GET") {
    const user = secureApi(req, res);
    res.send(user);
  }
};

export default handler;
