import Userfront from "@userfront/react";

const PasswordResetForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UIRESETID,
});

const reset = () => {
  return <PasswordResetForm />;
};

export default reset;
