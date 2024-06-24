export interface INoticias {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: Date;
  esPremium: boolean;
  imagen: string;
}

export interface INoticiasNormalizadas {
  id: number;
  titulo: string;
  descripcion: string;
  fecha: number | string;
  esPremium: boolean;
  imagen: string;
  descripcionCorta?: string;
}

export interface Modal {
  onClose: () => void;
}

export interface IModalSubscribe extends Modal {
  onSubscribe: () => void;
}

export interface IModalNoticia extends Modal {
  noticia: INoticiasNormalizadas | null;
}
