import { useForm } from "react-hook-form";
import styles from "../styles/Create.module.css";
import Link from "next/link";
import { Button } from "antd";
import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";

const CreateNews = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    fetch("/api/news", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("News Successfully Created");
        }
      });
  };
  return (
    <>
    <Head>
        <title>W_NP-Contact Us</title>
        <meta
          name="description"
          content="This is news portal of programming hero made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <div>
      <h1 
      style={{
        textAlign:"center",
        marginTop:"5px"
      }}
      >Create News!</h1>
      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        name="form_item_path"
        layout="vertical"
        style={{
          width: "50%",
          margin: "50px auto",
        }}
      >
        <input
          {...register("id")}
          placeholder="Id"
          style={{ marginBottom: "10px" }}
        />
        <input {...register("title")} placeholder="Title" />

        <input
          {...register("description")}
          placeholder="Description"
          style={{ margin: "10px 0px" }}
        />

        <input {...register("author")} placeholder="Author" />
        <input
          {...register("release_date")}
          placeholder="Release Date"
          type="date"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("category")} placeholder="Category" />
        <input
          {...register("comment_count")}
          placeholder="Number of Comments"
          type="number"
          style={{ margin: "10px 0px" }}
        />
        <input {...register("image_url")} placeholder="Image URL" />
        <input
          type="submit"
          value="Create News"
          style={{ margin: "10px 0px", width: "100%" }}
        />
      </form>
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
    </>
    
  );
};

export default CreateNews;

CreateNews.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
