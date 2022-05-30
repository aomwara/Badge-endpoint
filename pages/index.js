import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Text, Button, Spinner, Flex } from "@chakra-ui/react";
import { FaGoogle, FaSignOutAlt, FaRocket } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/client";

export default function Home() {
  const [session, loading] = useSession();
  return (
    <div className={styles.container}>
      <Head>
        <title>Badge Endpoint!</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h3 className={styles.title}>
          <Text fontSize="5xl">Customize Your Skills</Text>
        </h3>
        <Text pt={3} fontSize="xl">
          GitHub Profile Badge Endpoint
        </Text>

        {loading && <Spinner mt={5} />}

        {!session && !loading && (
          <>
            <Button
              style={{
                background:
                  "linear-gradient(-120deg, #4285f4, #34a853, #fbbc05, #ea4335)",
              }}
              color="white"
              size="sm"
              mt={5}
              onClick={() =>
                signIn("google", { callbackUrl: process.env.NEXTAUTH_URL })
              }
            >
              <FaGoogle />
              <Text pl={2}>Sign in with Google</Text>
            </Button>
          </>
        )}
        {session && (
          <>
            <Text pt={3} color="linkedin.100">
              <small> Signed in as {session.user.name}</small>
            </Text>

            <Flex>
              <Button colorScheme={"teal"} size="sm" mt={5}>
                <FaRocket />
                <Text ml={1}>Launch App!</Text>
              </Button>
              <Button
                variant="outline"
                ml={4}
                onClick={() => signOut()}
                color="white"
                size="sm"
                mt={5}
              >
                <FaSignOutAlt />
                <Text ml={1}>Sign out</Text>
              </Button>
            </Flex>
          </>
        )}
      </main>
    </div>
  );
}
