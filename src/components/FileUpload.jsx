import { Box, Button, Image, Input, Stack, Text } from "@chakra-ui/react";

function FileUpload({ preview, onFileChange, onSubmit, isLoading, hasFile }) {
  return (
    <Box borderWidth="1px" borderRadius="md" p={4}>
      <Stack spacing={4}>
        <Box>
          <Text mb={2}>Выберите изображение:</Text>
          <Input
            type="file"
            accept="image/*"
            onChange={onFileChange}
            p={1}
          />
        </Box>

        {preview && (
          <Image
            src={preview}
            alt="preview"
            maxH="300px"
            borderRadius="md"
          />
        )}

        <Button
          colorScheme="blue"
          onClick={onSubmit}
          isLoading={isLoading}
          loadingText="Обработка..."
          isDisabled={!hasFile}
        >
          Распознать
        </Button>
      </Stack>
    </Box>
  );
}

export default FileUpload;
