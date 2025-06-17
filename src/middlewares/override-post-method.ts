import { Request } from "express";

export default function overridePostMethod(req: Request) {
  if (req.body && req.body._method) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}
