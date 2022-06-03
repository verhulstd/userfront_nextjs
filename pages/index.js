import Userfront from "@userfront/react";
import { useUser } from "../helpers";

export default function Home() {
  //controle op client-side pagelevel or componentLevel
  const user = useUser(Userfront); // geeft userinfo
  return (
    <main>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      {user && <p>AANGEMELD!</p>}
      {!user && <p>NIET AANGEMELD!</p>}
    </main>
  );
}
