import IGoToSchoolStategy from "./IGoToSchoolStategy";

export default class DefaultStrategy implements IGoToSchoolStategy {
    public execute(): string {
        return 'i am going to school in a default';
    }
}