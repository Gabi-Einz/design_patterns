import express, { Request, Response } from 'express';
import FirstHandler from './FirstHandler';
import SecondHandler from './SecondHandler';
import ThirdHandler from './ThirdHandler';
import FourthHandler from './FourthHandler';
const router = express.Router();

router.get('/cor', (req: Request, res: Response) => {
    const result: string = 'asd';
    const firstHandler: FirstHandler = new FirstHandler();
    const secondHandler: SecondHandler = new SecondHandler();
    const thirdHandler: ThirdHandler = new ThirdHandler();
    const fourthHandler: FourthHandler = new FourthHandler();

    firstHandler
        .setNext(secondHandler)
        .setNext(thirdHandler)
        .setNext(fourthHandler);
        
    firstHandler.handle('remolacha');

    res.status(200).json({
        "message": result
    })
})

export default router;