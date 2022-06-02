import Userfront from "@userfront/react";
import { useUser } from "../helpers";

export default function Home() {
  const user = useUser(Userfront);
  return (
    <main>
      <h1>Home</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </main>
  );
}
