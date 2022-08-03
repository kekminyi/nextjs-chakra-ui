import { Flex, Link, Icon, Text } from "@chakra-ui/react";

export default function IconLink({ iconName, href, text, mt }) {
  return (
    <Flex className="sidebar-items" mt={mt}>
      <Link href={href}>
        <Icon as={iconName} fontSize="2xl" className="sidebar-icon"></Icon>
      </Link>
      <Link href={href} _hover={{ textDecor: "none" }}>
        <Text className="sidebar-icon-text">{text}</Text>
      </Link>
    </Flex>
  );
}
