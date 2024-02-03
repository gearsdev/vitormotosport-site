export function formatKilometers(kilometers: number | string) {

  if (typeof kilometers === 'string') {
    kilometers = Number(kilometers.replace(/\D/g, ''));
  }

  const formattedKilometers = new Intl.NumberFormat('pt-BR').format(Math.floor(kilometers));

  return formattedKilometers;
}
