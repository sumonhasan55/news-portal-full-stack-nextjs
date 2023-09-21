import { Button } from "antd";
import Link from "next/link";
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const AllNewsPage = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "25%",
      }}
    >
      <Head>
        <title>W_NP-AllNews </title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Developer is sleeping....! AllNewsPage page coming soon....!</h1>
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};

export default AllNewsPage;

AllNewsPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};