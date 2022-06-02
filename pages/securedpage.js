import React from "react";
import { securePage } from "../helpers";

const securedpage = ({ user }) => {
  return (
    <div>
      <h1>securedpage</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  );
};

export default securedpage;

export const getServerSideProps = async (context) => {
  const user = securePage(context);
  return {
    props: {
      user,
    },
  };
};
