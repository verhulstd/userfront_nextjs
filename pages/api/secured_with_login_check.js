import { secureApi } from "../../helpers";
export default function handler(req, res) {
  //THIS WILL SECURE EVERY METHOD
  //secureApi(req, res);

  //THIS WILL SECURE ONLY THE GET METHOD (secureApi returns the payload from the JWT)
  if (req.method === "GET") {
    const user = secureApi(req, res);
    res.send({
      message: "GET securely",
      user,
    });
  }

  //EVERYONE WILL BE ABLE TO POST
  if (req.method === "POST") {
    res.send("public information");
  }
}
