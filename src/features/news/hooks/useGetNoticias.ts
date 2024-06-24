import { INoticiasNormalizadas } from '../types';
import { useState, useEffect } from 'react';
import { obtenerInformacion } from '../api/fetchNoticias';

interface INoticiasGet {
  noticias: INoticiasNormalizadas[];
  isLoading?: boolean;
  error?: Error;
}

const initialState: INoticiasGet = {
  noticias: [],
  isLoading: true,
};

/**
 * Hook para obtener las notiicas
 * @returns {Array} array de noticias
 */
const useGetNoticias = (): INoticiasGet => {
  const [noticiasData, setNoticiasData] = useState<INoticiasGet>(initialState);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setNoticiasData((prevState) => ({
          ...prevState,
          isLoading: true,
        }));

        const data: INoticiasNormalizadas[] = await obtenerInformacion();

        setNoticiasData((prevState) => ({
          ...prevState,
          noticias: data,
          isLoading: false,
        }));
      } catch (error: any) {
        setNoticiasData((prevState) => ({
          ...prevState,
          isLoading: false,
          error: error,
        }));
      }
    };

    fetchData();
  }, []);
  return noticiasData;
};

export default useGetNoticias;
