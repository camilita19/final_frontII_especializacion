import ContainerModal from './ContainerModal';
import { ContenedorTexto, DescripcionModal, ImagenModal, TituloModal } from '../../styled';
import { IModalNoticia } from '../../types';

/**
 * Modal que contiene la información de la noticia
 * @param {Function} onClose función que se ejecutará para cerrar el modal
 * @param {Object} noticia info de la noticia
 * @returns {JSX.Element} componente Modal
 */
const ModalNoticia = ({ onClose, noticia }: IModalNoticia) => {
  return (
    <ContainerModal onClose={onClose}>
      <ImagenModal src={noticia?.imagen} alt={'news-image'} />
      <ContenedorTexto>
        <TituloModal>{noticia?.titulo}</TituloModal>
        <DescripcionModal>{noticia?.descripcion}</DescripcionModal>
      </ContenedorTexto>
    </ContainerModal>
  );
};

export default ModalNoticia;
