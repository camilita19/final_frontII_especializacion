import {
  BotonLectura,
  DescripcionTarjetaNoticia,
  FechaTarjetaNoticia,
  ImagenTarjetaNoticia,
  TarjetaNoticia,
  TituloTarjetaNoticia,
} from '../styled';
import { INoticiasNormalizadas } from '../types';

interface Props {
  data: INoticiasNormalizadas;
  onClick: () => void;
}

/**
 * @param {Object} data info de la noticia
 * @param {Function} onClick funcion onClick del botón "Ver más"
 * @returns  {JSX.Element} componente Noticia
 */
const Noticia = ({ data, onClick }: Props) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={data.imagen} />
      <TituloTarjetaNoticia>{data.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{data.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>{data.descripcionCorta}</DescripcionTarjetaNoticia>
      <BotonLectura onClick={onClick}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default Noticia;
