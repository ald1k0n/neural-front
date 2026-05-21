import { Alert, AlertIcon, Badge, HStack } from "@chakra-ui/react";
import { useStatus } from "../hooks/useStatus.js";

function StatusBadge() {
  const { status, error } = useStatus();

  if (error) {
    return (
      <Alert status="error">
        <AlertIcon />
        Сервер недоступен
      </Alert>
    );
  }

  if (!status) return null;

  return (
    <HStack>
      <Badge colorScheme={status.checkpoint_loaded ? "green" : "red"}>
        {status.checkpoint_loaded ? "Модель загружена" : "Модель не найдена"}
      </Badge>
    </HStack>
  );
}

export default StatusBadge;
