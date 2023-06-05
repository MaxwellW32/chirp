import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { api } from "~/utils/api";
import { SignIn, SignUp,  SignInButton, SignOutButton, UserButton, useUser} from "@clerk/nextjs";
import styles from "./page.module.css"
import Moment from 'react-moment';
// import 'moment-timezone';

const Home: NextPage = () => {

  const {data} = api.posts.getAll.useQuery()
 
  const user = useUser()

  return (
    <div className={styles.mainDiv}>
      <Head>
        <title>Max Twit</title>
        <meta name="description" content="Emoji Twitter Test" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.sideBar}>sidebar</div>
      <main className={styles.mainBar}>
        <h2>Welcome to Emoji Twitter</h2>
        <div>
          {data?.map((post) => (
            <div key={post.id}>
              {post.content} <Moment fromNow>{post.createdAt.toDateString()}</Moment>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;
