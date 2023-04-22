import AbstractHandler from "./AbstractHandler";

export default class FirstHandler extends AbstractHandler{
    public handle(req: string): void|null {
        console.info(`first handler executed ${req}`);
        return super.handle(req);
    }
}