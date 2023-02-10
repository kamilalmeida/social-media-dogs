import React from "react";
import { Route, Routes } from "react-router-dom";
import * as Comp from "./styles";
import { UserHeader } from "./UserHeader";
import { Feed } from "../feed/Feed";
import { PhotoPost } from "../photopost/PhotoPost";
import { Stats } from "../stats/Stats";


export function User() {
  return (
    <Comp.Container>
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<PhotoPost />} />
        <Route path="estatisticas" element={<Stats />} />
      </Routes>
    </Comp.Container>
  );
}
