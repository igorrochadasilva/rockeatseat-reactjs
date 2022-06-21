import { Flex, Box, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Igor Rocha</Text>
          <Text color="gray.300" fontSize="small">
            igor082011@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Igor Rocha"
        src="https://github.com/igorrochadasilva/"
      />
    </Flex>
  );
}
