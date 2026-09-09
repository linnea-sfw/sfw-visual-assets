import { createFileRoute, redirect } from "@tanstack/react-router";

// This project is a single-page asset catalogue. Root sends you straight there.
export const Route = createFileRoute("/")({
  beforeLoad: () => {
    throw redirect({ to: "/library" });
  },
});
