/**
 * Main HTTP server entry point for auto-proposal backend
 *
 * Initializes Trigger.dev SDK and sets up Hono HTTP router with all
 * API routes for proposal processing and backtesting workflows.
 *
 * @module index
 */

import "dotenv/config";
import { serve } from "@hono/node-server";
import { Hono } from "hono";
import { configure } from "@trigger.dev/sdk/v3";
import health from "./routes/health";
import { test } from "./routes/test";
import clientTask from "./routes/client-task";
import orchestratorTask from "./routes/orchestrator-task";
import baselineTest from "./routes/baseline-test.route";
import backtestClientRoute from "./routes/backtest-client.route";
import backtestAggregateRoute from "./routes/backtest-aggregate.route";

// Configure Trigger.dev with secret key from environment
configure({
  secretKey: process.env.TRIGGER_SECRET_KEY,
});

const app = new Hono();

// Register HTTP routes
app.route("/", health);
app.route("/test", test);
app.route("/client-task", clientTask);
app.route("/orchestrator-task", orchestratorTask);
app.route("/baseline-test", baselineTest);
app.route("/backtest-client", backtestClientRoute);
app.route("/backtest/aggregate", backtestAggregateRoute);

// Start HTTP server on port 3000
serve(
  {
    fetch: app.fetch,
    port: 3000,
  },
  (info) => {
    console.log(`Server is running on http://localhost:${info.port}`);
  }
);
