import { client } from "./client.js";

export function fetchStatus() {
  return client.get("/").then((r) => r.data);
}

export function predictImage(file) {
  const formData = new FormData();
  formData.append("file", file);
  return client.post("/predict", formData).then((r) => r.data);
}
