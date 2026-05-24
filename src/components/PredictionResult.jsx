import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import { emotionLabel } from "../emotions.js";
import ScoreList from "./ScoreList.jsx";

function PredictionResult({ result }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Stack spacing={4}>
        <Box>
          <Text fontSize="sm" color="gray.500">
            Результат:
          </Text>
          <Heading size="md">{emotionLabel(result.label)}</Heading>
          <Text mt={1}>
            Уверенность: {(result.confidence * 100).toFixed(2)}%
          </Text>
        </Box>

        <Box>
          <Text fontSize="sm" color="gray.500" mb={2}>
            Вероятности по всем классам:
          </Text>
          <ScoreList scores={result.scores} />
        </Box>
      </Stack>
    </Box>
  );
}

export default PredictionResult;
