
import { useForm } from 'react-hook-form';
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";
import Head from "next/head";
import styles from "@/styles/Login.module.css";
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { Button } from 'antd';
const LoginPage = () => {
   const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data)=>console.log(data)
  return (
    <div>
      <Head>
        <title>SignUp</title>
      </Head>
      <div className={styles.form}>
        <h3>SIGNUP</h3>
        {/* <div className={styles.social_icons}>
          <GoogleOutlined onClick={()=>signIn("google",{
            callbackUrl:"http://localhost:3000/"
          })} />
          <GithubOutlined onClick={()=>signIn("github",{
            callbackUrl:"http://localhost:3000/"
          })} />
        </div> */}
        <hr />
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="">Your Email</label>
          <input {...register('email', { required: true })} type="email" />
          <label htmlFor="">Your Password</label>
          <input {...register('passwword', { required: true })} type="password" />
          <button type="submit">SIGNUP</button><br></br>
          <p>All Ready Have an Account?</p> <Link href="login" type='link'>LOGIN</Link>
        </form>
      </div>
      <Link href="/">
        <Button>Back To Home</Button>
      </Link>
    </div>
  );
};


export default LoginPage;
