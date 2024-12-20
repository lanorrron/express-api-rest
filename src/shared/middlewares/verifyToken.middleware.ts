import {NextFunction, Request, Response} from "express";
import {verify} from 'jsonwebtoken'
import {sendError, sendSuccess} from "../utils/responseHandlers";

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json(sendError('No token provided', 401));
    }
    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json(sendError('No token provided', 401));
    }

    try {
        (req as any).user = verify(token, process.env.JWT_SECRET || 'default_secret');

        next();
    } catch (err) {
        return res.status(401).json(sendError('Invalid token', 401))
    }
};

 export function verifyMe(req: Request, res: Response){
    return res.status(200).json(sendSuccess('user verified', {user:( req as any).user}))
}