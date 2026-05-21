import { useEffect, useState } from "react";
import { fetchStatus } from "../api/ferApi.js";

export function useStatus() {
  const [status, setStatus] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchStatus()
      .then((data) => setStatus(data))
      .catch(() => setError(true));
  }, []);

  return { status, error };
}
