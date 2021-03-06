import { Request, Response } from "express";
import { container } from "tsyringe";

import { EditReportUseCase } from "./EditReportUseCase";

class EditReportController {
  async handle(request: Request, response: Response): Promise<Response> {

    const { id } = request.params;
    const {
      author_name,
      title,
      description,
    } = request.body;

    const editReportUseCase = container.resolve(EditReportUseCase);
    
    const report = await editReportUseCase.execute({
      report_id: id,
      author_name,
      title,
      description,
    });

    return response.status(201).json({ message: "Updated!", report});
  }
}

export { EditReportController };
