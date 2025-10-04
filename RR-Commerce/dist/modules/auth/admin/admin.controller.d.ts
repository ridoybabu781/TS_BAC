import type { NextFunction, Request, Response } from "express";
export declare const createAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const approveVendor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const rejectVendor: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const blockUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const unBlockUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const deleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export declare const unDeleteUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
//# sourceMappingURL=admin.controller.d.ts.map