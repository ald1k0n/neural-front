import { useState } from "react";
import {
  Alert,
  AlertIcon,
  Container,
  Heading,
  Stack,
} from "@chakra-ui/react";
import StatusBadge from "./components/StatusBadge.jsx";
import FileUpload from "./components/FileUpload.jsx";
import PredictionResult from "./components/PredictionResult.jsx";
import { predictImage } from "./api/ferApi.js";

function App() {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleFileChange(e) {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
    setPreview(URL.createObjectURL(selected));
    setResult(null);
    setError("");
  }

  function handleSubmit() {
    if (!file) return;
    setLoading(true);
    setError("");
    predictImage(file)
      .then((data) => {
        setResult(data);
        setLoading(false);
      })
      .catch((err) => {
        const msg = err.response && err.response.data && err.response.data.detail;
        setError(msg || "Ошибка при отправке запроса");
        setLoading(false);
      });
  }

  return (
    <Container maxW="container.md" py={8}>
      <Stack spacing={6}>
        <Heading size="lg">Распознавание эмоций по фото</Heading>

        <StatusBadge />

        <FileUpload
          preview={preview}
          onFileChange={handleFileChange}
          onSubmit={handleSubmit}
          isLoading={loading}
          hasFile={!!file}
        />

        {error && (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        )}

        {result && <PredictionResult result={result} />}
      </Stack>
    </Container>
  );
}

export default App;
