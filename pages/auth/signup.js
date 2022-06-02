import Userfront from "@userfront/react";

const SignupForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UISIGNUPID,
});

function Signup() {
  return <SignupForm />;
}

export default Signup;
