import IGoToSchoolStategy from "./IGoToSchoolStategy";

export default class BusStrategy implements IGoToSchoolStategy {
    execute(): string {
        return 'i am going to school in a bus';
    }
}