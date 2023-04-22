import AbstractHandler from "./AbstractHandler";

export default class FourthHandler extends AbstractHandler{
    public handle(req: string): void|null {
        console.info(`fourth handler executed ${req}`);
        super.handle(req);
    }
}