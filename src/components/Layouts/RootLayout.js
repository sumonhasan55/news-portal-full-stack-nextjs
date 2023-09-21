import {
  ProfileOutlined,
  MobileOutlined,
  UserOutlined,
  FacebookFilled,
  LinkedinFilled,
  GoogleSquareFilled,
  TwitterSquareFilled,
  EditOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
const { Header, Content, Footer } = Layout;
import styles from "@/styles/Home.module.css";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"

const RootLayout = ({ children }) => {

  const { data: session } = useSession()
  console.log(session)

  return (
    <Layout>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div className="brand-logo">
          <h1>
            <Link
              href="/"
              style={{
                color: "white",
                backgroundColor: "#404040",
                padding: "5px 10px",
                borderRadius: "3px",
              }}
            >
              WORLD_NEWS PORTAL
            </Link>
          </h1>
        </div>
        <Menu theme="dark" mode="vertical" className={styles.menu_items}>
          <Link href="/allnews">
            <items>
              <ProfileOutlined />
              All News
            </items>
          </Link>
          <Link href="/create">
            <items 
             style={{
              margin: "0px 25px",
            }}
            >
              <EditOutlined />
              Create News
            </items>
          </Link>
          <Link href="/about">
            <items
              style={{
                margin: "0px 25px",
              }}
            >
              <UserOutlined />
              About Us
            </items>
          </Link>
          <Link href="/contact">
            <items>
              <MobileOutlined />
              Contact Us
            </items>
          </Link>
          <Link href="/login">
           {
            session?.user?(
              <items 
              style={{
               margin: "0px 25px",
               color:"red"
             }}
             onClick={() => signOut()}
             >
               <UserOutlined />
               Logout
             </items>
            ):(
              <items 
              style={{
               margin: "0px 25px",
             }}
           

             >
               <UserOutlined />
              login
             </items>
            )
           }
          </Link>
        </Menu>
      </Header>

      <Content
        style={{
          padding: "0 24px",
          minHeight: "100vh",
        }}
      >
        {children}
      </Content>

      <Footer
        style={{
          textAlign: "center",
        }}
      >
        <div className={styles.line}></div>
        <h2
          style={{
            fontSize: "28px",
          }}
        >
          WORLD-NEWS PORTAL
        </h2>
        <p className={styles.social_icons}>
          <Link href="https://www.facebook.com">
            <FacebookFilled />
          </Link>
          <Link href="www.twitter.com">
            <TwitterSquareFilled />
          </Link>
          <Link href="https://mail.google.com/mail/u/0/#inbox">
            <GoogleSquareFilled />
          </Link>
          <Link href="https://www.linkedin.com/in/hm-sumon-hasan/">
            <LinkedinFilled />
          </Link>
        </p>
        News Portal ©2023 Created by Sumon Hasan
      </Footer>
    </Layout>
  );
};
export default RootLayout;
