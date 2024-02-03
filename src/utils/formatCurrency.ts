type CurrencyCode = 'pt-BR' | 'en-US'

export function formatCurrency(value: number | string, currencyCode: CurrencyCode = 'pt-BR'): string {
  if (typeof value === 'number') {
    value = value/100;
  } else
  if (typeof value === 'string') {
    value = Number(value.replace(/\D/g, ''))/100;
  }

  const numberFormat = {
    'pt-BR': {
      currency: 'BRL'
    },
    'en-US': {
      currency: 'USD'
    }
  }

  const currencyFormat = new Intl.NumberFormat((currencyCode as string), {
    style: 'currency',
    currency: numberFormat[currencyCode].currency,
  });

  return currencyFormat.format(value);
}
