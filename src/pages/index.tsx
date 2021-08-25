import React from "react";
import { NextPage } from "next";
import Layout from "../components/Layout";
import SpotDisplay from "../components/SpotDisplay";

const AccountPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <div className="flex">
      < SpotDisplay />
    </div>
  </Layout>
);

export default AccountPage;