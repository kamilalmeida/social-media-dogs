import React from "react";
import { Route, Routes } from "react-router-dom";

import { UserHeader } from "./UserHeader";
import { Feed } from "../feed/Feed";
import { PhotoPost } from "../photopost/PhotoPost";
import { Stats } from "../stats/Stats";
import * as C from "./styles";

export function User() {
  return (
    <C.UserNavigation className="containerglobal">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </C.UserNavigation>
  );
}
