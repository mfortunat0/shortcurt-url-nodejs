import { Request, Response } from "express";
import shortid from "shortid";
import { UrlModel } from "../database/model/Url";

export class UrlController {
  async shorten(request: Request, response: Response) {
    const { originUrl } = request.body;

    const url = await UrlModel.findOne({ originUrl });
    if (url) {
      response.json(url);
    }

    const hash = shortid.generate();
    const shortUrl = `${process.env.API_URL}/${hash}`;

    const newUrl = UrlModel.create({
      originUrl,
      hash,
      shortUrl,
    });

    response.json({
      originUrl,
      hash,
      shortUrl,
    });
  }

  async redirect(request: Request, response: Response) {
    const { hash } = request.params;
    const url = await UrlModel.findOne({ hash });
    if (url) {
      response.redirect(url.originUrl);
    }

    response.status(400).json({
      error: "Hash invalid",
    });
  }
}
