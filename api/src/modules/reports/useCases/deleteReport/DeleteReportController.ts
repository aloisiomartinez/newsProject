import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteReportUseCase } from "./DeleteReportUseCase";

class EditReportController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteReportUseCase = container.resolve(DeleteReportUseCase);
    
   await deleteReportUseCase.execute(id)

    return response.status(201).json({ message: "Deleted!"});
  }
}

export { EditReportController };
