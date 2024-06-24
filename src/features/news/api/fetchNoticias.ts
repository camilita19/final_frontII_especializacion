import { obtenerNoticias } from '../fakeRest';
import { capitalize, getMinutosTranscurridos } from '../../../app/utils';
import { INoticiasNormalizadas } from '../types';

/**
 * Función que maneja el fetch de noticias
 * @returns array de noticias normalizadas
 */
export const obtenerInformacion = async (): Promise<INoticiasNormalizadas[]> => {
  const respuesta = await obtenerNoticias();

  const data = respuesta.map((noticia) => {
    const titulo = capitalize(noticia.titulo);
    const fechaActual = getMinutosTranscurridos(noticia.fecha);
    const descripcionCorta = noticia.descripcion.substring(0, 100);

    return {
      id: noticia.id,
      titulo,
      descripcion: noticia.descripcion,
      fecha: fechaActual,
      esPremium: noticia.esPremium,
      imagen: noticia.imagen,
      descripcionCorta,
    };
  });
  return data;
};
