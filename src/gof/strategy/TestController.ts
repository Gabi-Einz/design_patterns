import express, { Request, Response } from 'express';
import GoToSchoolContext from './GoToSchoolContext';
import CarStrategy from './CarStrategy';
const router = express.Router();

router.get('/strategy', (req: Request, res: Response) => {

    const context: GoToSchoolContext = new GoToSchoolContext();
    context.setStrategy(new CarStrategy());
    const result: string = context.executeStrategy();

    res.status(200).json({
        "message": result
    })
})

export default router;