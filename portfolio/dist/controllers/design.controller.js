import { DService } from "../service/design.service.js";
import createHttpError from "http-errors";
export const createDesign = async (req, res, next) => {
    try {
        const design = await DService.SCreateDesign(req, req.body, next);
        if (!design) {
            return next(createHttpError(400, "Design Creation Failed"));
        }
        res.status(201).json({ message: "Design created successfully", design });
    }
    catch (error) {
        next(error);
    }
};
export const getDesigns = async (req, res, next) => {
    try {
        const designs = await DService.SGetDesigns();
        if (designs.length === 0) {
            return next(createHttpError(400, "No design available"));
        }
        res.status(201).json({ message: "Design fetched successfully", designs });
    }
    catch (error) {
        next(error);
    }
};
export const getDesign = async (req, res, next) => {
    try {
        const design = await DService.SGetDesign(req.params.id);
        if (!design) {
            return next(createHttpError(400, "Design not available"));
        }
        res.status(201).json({ message: "Design fetched successfully", design });
    }
    catch (error) {
        next(error);
    }
};
export const deleteDesign = async (req, res, next) => {
    try {
        const design = await DService.SDeleteDesign(req.params.id, next);
        if (!design) {
            return next(createHttpError(400, "Design deletion failed"));
        }
        res.status(201).json({ message: "Design deleted successfully" });
    }
    catch (error) {
        next(error);
    }
};
//# sourceMappingURL=design.controller.js.map