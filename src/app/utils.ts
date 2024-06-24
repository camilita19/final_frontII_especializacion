export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const getMinutosTranscurridos = (date: Date): string => {
  const minutosTranscurridos = Math.floor((Date.now() - date.getTime()) / 60000);
  return `Hace ${minutosTranscurridos} minutos`;
};
