import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { configure } from "@trigger.dev/sdk/v3";
import health from "./routes/health";
import { test } from "./routes/test";
import clientTask from "./routes/client-task";
import orchestratorTask from "./routes/orchestrator-task";

// Configure Trigger.dev
configure({
  secretKey: process.env.TRIGGER_SECRET_KEY,
});

const app = new Hono();

// Routes
app.route("/", health);
app.route("/test", test);
app.route("/client-task", clientTask);
app.route("/orchestrator-task", orchestratorTask);

// server
serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
