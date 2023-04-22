export default interface IHandler {
    setNext(handler: IHandler): IHandler;
    handle(req: string): void;

}