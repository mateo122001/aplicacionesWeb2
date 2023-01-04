

export interface IResAprendizaje{
    aprendizajes: Aprendizaje[];
}

export interface Aprendizaje{
nombre:string;
_id?:string;
id_idioma: string;
id_instructor: string;
fecha?: string;
hora: string;
horas_curso: string;
nivel: string
}