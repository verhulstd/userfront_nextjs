import nookies, { parseCookies } from "nookies";
const jwt = require("jsonwebtoken");
import { useState, useEffect } from "react";

export const parse = (mysqlData) => JSON.parse(JSON.stringify(mysqlData));

export const useUser = (UserFront) => {
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(UserFront.user);
  }, [UserFront.user]);
  return user;
};

//voor in serversideprops
export const securePage = (ctx) => {
  const cookies = nookies.get(ctx);
  const token = cookies[`access.${process.env.NEXT_PUBLIC_USERFRONTID}`];

  //if token does not exist
  if (!token) {
    redirectToLogin(ctx);
  }
  const publicKey = process.env.CERTIFICATE;
  const verifiedPayload = jwt.verify(token, publicKey, {
    algorithms: ["RS256"],
  });
  //if token is invalid
  if (!verifiedPayload) {
    redirectToLogin(ctx);
  } else {
    return verifiedPayload;
  }
};

export const secureApi = (req, res) => {
  const cookies = parseCookies({ req });
  //token in cookies or in header?
  const token =
    cookies[`access.${process.env.NEXT_PUBLIC_USERFRONTID}`] ||
    req.headers.authorization?.split(" ")[1];
  if (token) {
    try {
      const verifiedPayload = jwt.verify(token, process.env.CERTIFICATE, {
        algorithms: ["RS256"],
      });
      return verifiedPayload;
    } catch (error) {
      res.status(401).send({ error: "Unauthorized access" });
    }
  } else {
    res.status(401).send({ error: "Unauthorized access" });
  }
};

function redirectToLogin(ctx) {
  const { res } = ctx;
  res.setHeader("location", "/auth/login");
  res.statusCode = 302;
  res.end();
}
