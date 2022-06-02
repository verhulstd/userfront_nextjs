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
  const token = cookies[`access.${process.env.NEXT_PUBLIC_USERFRONTID}`];
  if (!token) {
    res.status(401).send({ error: "Unauthorized access (1)" });
  }
  const publicKey = process.env.CERTIFICATE;
  const verifiedPayload = jwt.verify(token, publicKey, {
    algorithms: ["RS256"],
  });
  if (!verifiedPayload) {
    res.status(401).send({ error: "Unauthorized access (2)" });
  } else {
    return verifiedPayload;
  }
};

function redirectToLogin(ctx) {
  const { res } = ctx;
  res.setHeader("location", "/auth/login");
  res.statusCode = 302;
  res.end();
}
