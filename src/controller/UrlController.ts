import { Request, Response } from "express";
import shortid from "shortid";

export class UrlController {
  async shorten(request: Request, response: Response) {
    const { originalUrl } = request.body;
    const hash = shortid.generate();
    const shortUrl = `${process.env.API_URL}/${hash}`;
    response.json({
      originalUrl,
      hash,
      shortUrl,
    });
  }

  async redirect(request: Request, response: Response) {
    const { hash } = request.params;

    // response.redirect(url.originalUrl)
  }
}
