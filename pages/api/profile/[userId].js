import { secureApi } from "../../../helpers";
export default function handler(req, res) {
  if (req.method === "GET") {
    //token check
    const { userId } = secureApi(req, res);
    //extra owner check
    if (userId === parseInt(req.query.userId)) {
      res.send("secured");
    } else {
      res.status(401).send({ error: "Unauthorized access" });
    }
  }
}
