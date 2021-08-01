import { CloseIcon, ExternalLinkIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box, Button, ButtonGroup, Flex, Heading, Link, Stack, useDisclosure
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useMeQuery } from "../generated/graphql";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ProfileMenu from "./profiles/ProfileMenu";

const Header: React.FC<{}> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const { data, loading } = useMeQuery({ notifyOnNetworkStatusChange: true });

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding={3}
      {...props}
    >
      <Flex align="center" mr={5}>
        <Heading as={RouterLink} to="/" size="lg" letterSpacing={"tighter"}>
          express-react
        </Heading>
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
        {isOpen ? <CloseIcon /> : <HamburgerIcon />}
      </Box>

      <Stack
        direction={{ base: "column", md: "row" }}
        display={{ base: isOpen ? "block" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
        alignItems="center"
        flexGrow={1}
        mt={{ base: 4, md: 0 }}
      >
        <Link href="https://chakra-ui.com" isExternal>
          Chakra Docs <ExternalLinkIcon mx="2px" />
        </Link>
      </Stack>

      <Box
        display={{ base: isOpen ? "block" : "none", md: "block" }}
        mt={{ base: 4, md: 0 }}
      >
        {
          (loading || !data || !data.me) ? (
            <ButtonGroup variant="outline">
              <Button
                as={RouterLink}
                to="/signup"
                onClick={onClose}
              >
                Sign up
              </Button>
              <Button
                as={RouterLink}
                to="/login"
                onClick={onClose}
              >
                Login
              </Button>
              <ColorModeSwitcher />
            </ButtonGroup>
          ) : (
            <ButtonGroup>
              <ColorModeSwitcher />
              <ProfileMenu user={data.me} />
            </ButtonGroup>
          )
        }
      </Box>
    </Flex>
  );
};

export default Header;
