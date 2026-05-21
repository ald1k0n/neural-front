import { Box, HStack, Progress, Stack, Text } from "@chakra-ui/react";

function ScoreList({ scores }) {
  const items = Object.keys(scores).map((name) => ({
    name: name,
    value: scores[name],
  }));
  items.sort((a, b) => b.value - a.value);

  return (
    <Stack spacing={3}>
      {items.map((item) => (
        <Box key={item.name}>
          <HStack justify="space-between" mb={1}>
            <Text>{item.name}</Text>
            <Text>{(item.value * 100).toFixed(2)}%</Text>
          </HStack>
          <Progress value={item.value * 100} colorScheme="blue" />
        </Box>
      ))}
    </Stack>
  );
}

export default ScoreList;
