import Head from "next/head";
import RootLayout from "@/components/Layouts/RootLayout";
// import Banner from "@/components/UI/Banner";
import AllNews from "@/components/UI/AllNews";
import { useGetNewsesQuery } from "@/redux/api/api";
import dynamic from 'next/dynamic'


const HomePage = ({allNews}) => {
  
  const {data,isLoading,isError,error} = useGetNewsesQuery();
  const DynamikBanner = dynamic(() => import('@/components/UI/Banner'),
  {
    loading:()=><h1 className="text-center font-4xl">Loading...</h1>
  }
  )
 
  // console.log(data)
  return (
    <>
      <Head>
        <title>World-News Portal</title>
        <meta
          name="description"
          content="This is world news portal Website made by next-js"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DynamikBanner />
      <AllNews allNews={allNews} />
    </>
  );
};
export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};

export const  getServerSideProps = async () =>{
  const res = await fetch("http://localhost:3000/api/news")
  const data = await res.json()
  console.log(data)

  return{
  props:{
    allNews:data.data
  },

  };
};


