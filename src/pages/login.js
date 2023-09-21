import { Button } from "antd";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import RootLayout from "@/components/Layouts/RootLayout";
import { signIn } from "next-auth/react";
import Link from "next/link";
const LoginPage = () => {
  return (
    <div>
      <Head>
        <title>W-NP Login</title>
      </Head>
      <div className={styles.form}>
        <h3>LOGIN</h3>
        <div className={styles.social_icons}>
          <GoogleOutlined onClick={()=>signIn("google",{
             callbackUrl:"http://localhost:3000/"
          })}/>
          <GithubOutlined  onClick={()=>signIn("github",{
            callbackUrl:"http://localhost:3000/"
          })}/>
        </div>
        <hr />
        <form>
          <label htmlFor="">Your Email</label>
          <input type="email" />
          <label htmlFor="">Your Password</label>
          <input type="password" />
          <Button>Login</Button><br></br>
          <Link href="/signup">Create a new Account!</Link>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;


LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

