import { useState } from "react";
import Userfront from "@userfront/react";
Userfront.init(process.env.NEXT_PUBLIC_USERFRONTID);

const Login_magiclink = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const sendMagicLink = (e) => {
    Userfront.signup({
      method: "passwordless",
      email,
      name,
      data: {
        type: 2,
      },
    });
  };
  return (
    <main>
      <label>
        e-mail:{" "}
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </label>
      <label>
        name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </label>

      <button onClick={sendMagicLink}>send magicLink</button>
    </main>
  );
};

export default Login_magiclink;
