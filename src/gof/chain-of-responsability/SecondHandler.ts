import AbstractHandler from "./AbstractHandler";

export default class SecondHandler extends AbstractHandler{
    public handle(req: string): void|null {
        console.info(`second handler executed ${req}`);
        return super.handle(req);
    }
}