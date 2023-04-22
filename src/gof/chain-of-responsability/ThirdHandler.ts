import AbstractHandler from "./AbstractHandler";

export default class ThirdHandler extends AbstractHandler{
    public handle(req: string): void|null {
        console.info(`third handler executed ${req}`);
        super.handle(req);
    }
}