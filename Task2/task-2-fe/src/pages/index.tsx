import Head from "next/head";
import { Layout } from "./components/layout/Layout";
import Form from "./components/form/Form";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nhập giao dịch</title>
      </Head>
      <Layout>
        <div className="flex w-full items-center ">
          <Form />
        </div>
      </Layout>
    </>
  );
}
