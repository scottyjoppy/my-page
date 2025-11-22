import { Terminal } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

interface Messages {
  message: string;
}

export function CustomAlert({ message }: Messages) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{message}</AlertTitle>
    </Alert>
  );
}
