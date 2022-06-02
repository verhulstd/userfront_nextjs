import Userfront from "@userfront/react";

const LoginForm = Userfront.build({
  toolId: process.env.NEXT_PUBLIC_UILOGINID,
});

function App() {
  return <LoginForm />;
}

export default App;
