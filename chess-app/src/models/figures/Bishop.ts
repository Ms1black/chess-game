import { Figure, FigureNames } from "./Figure";
import { Colors } from "../Colors";
import { Cell } from "../Cell";
import blackLogo from '../../assets/chess-figure/black-bishop.png';
import whiteLogo from '../../assets/chess-figure/white-bishop.png';

export class Bishop extends Figure {
    constructor (color: Colors, cell: Cell){
        super(color, cell);
        this.logo = color === Colors.BLACK ? blackLogo : whiteLogo;
        this.name = FigureNames.BISHOP;
    }
}