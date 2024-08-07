import { Request, Response } from "express";
import { Product, Report, Store } from "../../models";

export default async (_req: Request, res: Response) => {
  try {
    const reportlist: Report[] = await Report.findAll({
      attributes: ["id", "reportText"],
      include: [
        {
          model: Product,
          as: "Product",
          attributes: ["id"],
          include: [{ model: Store, as: "Sell", attributes: ["nick"] }],
        },
      ],
    });

    res.json({ report: reportlist });
  } catch (err) {
    console.error(err);
    res.status(500).json({ result: "fail" });
  }
};
