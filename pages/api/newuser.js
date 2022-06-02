// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  console.log(req.headers);
  console.log(req.headers.authorization);
  if (req.method === "POST") {
    if (req.headers.authorization === "Bearer " + process.env.BEARER) {
      //update database and insert external userid (req.body.record.userId)
      // console.log("a new user was added:");
      // console.log(req.body.record.userId);

      //controleer of gebruiker confirmed is
      if (req.body.record.isConfirmed) {
        /* haal de user uit je databank waarvoor de externe_id gelijk is aan de body zijn userid */
        // const userCheck = await db("users")
        //   .select("id")
        //   .where("external_user_id", req.body.record.userId);
        /* als user niet in je DB bestaat */
        if (!userCheck) {
          /* voeg hem toe aan je databank */
          // await db("users").insert("external_user_id", req.body.record.userId);
        }
      }
      //db("users").insert()
      res.send("ok");
    } else {
      console.log("Unauthorized access to newuser endpoint");
      res.send({ error: "Unauthorized access" });
    }
  }
}
