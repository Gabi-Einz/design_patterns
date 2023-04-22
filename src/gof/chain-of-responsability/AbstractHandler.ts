import IHandler from "./IHandler";

export default abstract class AbstractHandler implements IHandler{

    private nextHandler?: IHandler;
    
    constructor(nextHandler?: IHandler) {
        this.nextHandler = nextHandler;
    }
    public setNext(nextHandler: IHandler): IHandler {
        this.nextHandler = nextHandler;
        return this.nextHandler;
    }

    public handle(req: string): void|null {
        if(this.nextHandler) {
            this.nextHandler.handle(req);
        }
        return null;
    }
}