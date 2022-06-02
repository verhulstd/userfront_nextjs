import { secureApi } from "../../../helpers";
export default function handler(req, res) {
  if (req.method === "GET") {
    const user = secureApi(req, res);
    if (user.userId === parseInt(req.query.userId)) {
      res.send("secured");
    } else {
      res.status(401).send({ error: "Unauthorized access" });
    }
  }
}
