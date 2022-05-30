import {
  Box,
  Heading,
  Button,
  Container,
  Grid,
  GridItem,
  Flex,
  Text,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import AuthButton from "./AuthButton";
import { FaRocket } from "react-icons/fa";
import { useSession } from "next-auth/client";

const Navbar = () => {
  const [session] = useSession();
  const router = useRouter();
  const activePath = router.pathname;
  const handleChangeMenu = (path) => {
    router.push("/" + path);
  };
  return (
    <>
      <Container pt={3} maxW="100%">
        <Grid templateColumns="repeat(10, 1fr)" gap={3}>
          <GridItem colSpan={{ base: 3 }} style={{ textAlign: "left" }}>
            <Box p="4" display={{ base: "flex", md: "flex" }}>
              <Heading size="md">
                <Flex>
                  <FaRocket
                    style={{ marginRight: 10, marginBottom: 8 }}
                    size={30}
                  />{" "}
                  <Text display={{ base: "none", md: "flex", lg: "flex" }}>
                    Badge Skill
                  </Text>
                </Flex>
              </Heading>
            </Box>
          </GridItem>
          {session ? (
            <GridItem colSpan={{ base: 7, md: 4 }}>
              <Box align="center" p="2">
                <Box
                  style={{
                    border: "5px #02022a solid",
                    borderRadius: "15px",
                  }}
                >
                  <Button
                    borderRadius="10px 0px 0px 10px"
                    w="50%"
                    style={{
                      backgroundColor:
                        activePath == "/" ? "#6d04b4" : "#02022a",
                    }}
                    onClick={() => {
                      handleChangeMenu("");
                    }}
                  >
                    <Text fontSize={{ base: "sm", md: "md" }}> My Skills</Text>
                  </Button>
                  <Button
                    borderRadius="0px 10px 10px 0px"
                    w="50%"
                    style={{
                      backgroundColor:
                        activePath == "/new" ? "#6d04b4" : "#02022a",
                    }}
                    onClick={() => {
                      handleChangeMenu("new");
                    }}
                  >
                    <Text fontSize={{ base: "sm", md: "md" }}> New Skill</Text>
                  </Button>
                </Box>
              </Box>
            </GridItem>
          ) : (
            <GridItem colSpan={{ base: 7, md: 4 }}>
              <Box
                p="4"
                style={{ justifyContent: "flex-end" }}
                display={{ base: "flex", md: "none" }}
              >
                <Heading size="md">
                  <Flex>
                    <Text display={{ base: "flex", md: "none", lg: "none" }}>
                      Badge Skill
                    </Text>
                  </Flex>
                </Heading>
              </Box>
            </GridItem>
          )}

          <GridItem colSpan={{ base: 3, md: 0 }} p={2}>
            <Box w="100%" align="right">
              <AuthButton />
            </Box>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default Navbar;
