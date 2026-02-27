import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // put your custom routes here

  const httpServer = createServer(app);

  return httpServer;
}
