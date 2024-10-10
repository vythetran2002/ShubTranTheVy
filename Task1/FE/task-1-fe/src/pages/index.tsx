import DataTable from "./components/dataTable/dataTable";
import { Layout } from "./components/layout/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chi tiết doanh thu</title>
      </Head>
      <Layout>
        <DataTable />
      </Layout>
    </>
  );
}
