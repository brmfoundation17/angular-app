export class Mileage{
    cellOrchestration: string;
    cellCoordinate: number;
    lowerBound: number;
    upperBound: number;
    matrixType: string;
    isMb: boolean;
    constructor(cellOrchestration: string, cellCoordinate: number, lowerBound: number, upperBound: number,
        matrixType: string, isMb: boolean){
        this.cellOrchestration = cellOrchestration;
        this.cellCoordinate = cellCoordinate;
        this.lowerBound = lowerBound;
        this.upperBound = upperBound;
        this.matrixType = matrixType;
    }
}