import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateReportUseCase } from "./CreateReportUseCase";

class CreateCarController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      author_name,
      title,
      description,
    } = request.body;

    const createReportUseCase = container.resolve(CreateReportUseCase);

    const report = await createReportUseCase.execute({
      author_name,
      title,
      description,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
