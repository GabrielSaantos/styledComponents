import { UserProps } from "../types/user";
import React from "react";
import Search from "../components/Search";
import { useState } from "react";

const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  return (
    <div>
      <Search />
    </div>
  );
};

export default Home;
