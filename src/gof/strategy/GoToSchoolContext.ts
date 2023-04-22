import CarStrategy from "./CarStrategy";
import DefaultStrategy from "./DefaultStretegy";
import IGoToSchoolStategy from "./IGoToSchoolStategy";

export default class GoToSchoolContext {
    strategy: IGoToSchoolStategy;

    constructor() {
        this.strategy = new DefaultStrategy();
    }
    public setStrategy(strategy: IGoToSchoolStategy): void {
        this.strategy = strategy;
    }
    public executeStrategy(): string {
        return this.strategy.execute();
    }
}