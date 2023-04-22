import IGoToSchoolStategy from "./IGoToSchoolStategy";

export default class CarStrategy implements IGoToSchoolStategy {
    public execute(): string {
        return 'i am going to school in a car';
    }
}