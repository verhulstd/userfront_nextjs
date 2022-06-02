import Userfront from "@userfront/react";

const LogoutButton = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UILOGOUTID,
});

const logout = () => {
  return <LogoutButton />;
};

export default logout;
