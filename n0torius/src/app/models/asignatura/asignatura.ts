import { Curso } from "../curso/curso";

export class Asignatura {
    id: number;
    nombre: string;
    descripcion:string;
    idCurso: number;
    cantidadDeExamenes?: number;

    constructor(){}
}
