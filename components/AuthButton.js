import { Button } from "@chakra-ui/react";
import { FaGoogle, FaSignOutAlt } from "react-icons/fa";
import { signIn, signOut, useSession } from "next-auth/client";

const AuthButton = () => {
  const [session] = useSession();

  return session ? (
    <>
      <Button
        style={{ backgroundColor: "#6D04B4", borderRadius: "18px" }}
        display={{ base: "none", md: "flex" }}
        ml={2}
        onClick={() => signOut()}
      >
        <FaSignOutAlt style={{ marginRight: 10 }} /> Sign Out
      </Button>

      <Button
        style={{ backgroundColor: "#6D04B4" }}
        display={{ base: "flex", md: "none", sm: "flex" }}
        ml={10}
        p={7}
        position="fixed"
        right={0}
        bottom={0}
        w="100%"
        onClick={() => signOut()}
      >
        <FaSignOutAlt style={{ marginRight: 10 }} />
        Sign Out
      </Button>
    </>
  ) : (
    <>
      <Button
        style={{ backgroundColor: "#6D04B4", borderRadius: "18px" }}
        display={{ base: "none", md: "flex" }}
        ml={10}
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
      >
        <FaGoogle style={{ marginRight: 10 }} />
        Sign in
      </Button>

      <Button
        onClick={() =>
          signIn("google", { callbackUrl: "http://localhost:3000/" })
        }
        style={{ backgroundColor: "#6D04B4" }}
        display={{ base: "flex", md: "none", sm: "flex" }}
        ml={10}
        p={7}
        position="fixed"
        right={0}
        bottom={0}
        w="100%"
      >
        <FaGoogle style={{ marginRight: 10 }} />
        Sign in
      </Button>
    </>
  );
};

export default AuthButton;
