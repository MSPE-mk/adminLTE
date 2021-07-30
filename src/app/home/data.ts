let today = new Date();
let actual_year = today.getFullYear();
let str = '' + actual_year;
let res = str.substring(2, 4);

export var tauxPcInfecte = [
  {
    name: 'Nombre des Réclamation Non résolues',
    series: [
      {
        name: 'Jan/' + res,
        value: 0.05,
      },
      {
        name: 'Feb/' + res,
        value: 0.05,
      },
      {
        name: 'Marz/' + res,
        value: 0.05,
      },
      {
        name: 'Apr/' + res,
        value: 0.05,
      },
      {
        name: 'Mai/' + res,
        value: 0.05,
      },
      {
        name: 'Jun/' + res,
        value: 0.05,
      },
      {
        name: 'Jul/' + res,
        value: 0.05,
      },
      {
        name: 'Aug/' + res,
        value: 0.05,
      },
      {
        name: 'Sep/' + res,
        value: 0.05,
      },
      {
        name: 'Okt/' + res,
        value: 0.05,
      },
      {
        name: 'Nou/' + res,
        value: 0.05,
      },
      {
        name: 'Dez/20',
        value: 0.05,
      },
    ],
  },

  {
    name: 'objectifs',
    series: [
      {
        name: 'Jan/' + res,
        value: 0,
      },
      {
        name: 'Feb/' + res,
        value: 0,
      },
      {
        name: 'Marz/' + res,
        value: 0,
      },
      {
        name: 'Apr/' + res,
        value: 0,
      },
      {
        name: 'Mai/' + res,
        value: 0,
      },
      {
        name: 'Jun/' + res,
        value: 0,
      },
      {
        name: 'Jul/' + res,
        value: 0,
      },
      {
        name: 'Aug/' + res,
        value: 0,
      },
      {
        name: 'Sep/' + res,
        value: 0,
      },
      {
        name: 'Okt/' + res,
        value: 0,
      },
      {
        name: 'Nou/' + res,
        value: 0,
      },
      {
        name: 'Dez/' + res,
        value: 0,
      },
    ],
  },
  {
    name: 'max',
    series: [
      {
        name: 'Jan/' + res,
        value: 5,
      },
      {
        name: 'Feb/' + res,
        value: 5,
      },
      {
        name: 'Marz/' + res,
        value: 5,
      },
      {
        name: 'Apr/' + res,
        value: 5,
      },
      {
        name: 'Mai/' + res,
        value: 5,
      },
      {
        name: 'Jun/' + res,
        value: 5,
      },
      {
        name: 'Jul/' + res,
        value: 5,
      },
      {
        name: 'Aug/' + res,
        value: 5,
      },
      {
        name: 'Sep/' + res,
        value: 5,
      },
      {
        name: 'Okt/' + res,
        value: 5,
      },
      {
        name: 'Nou/' + res,
        value: 5,
      },
      {
        name: 'Dez/' + res,
        value: 5,
      },
    ],
  },
];

export var lineChartData = [
  {
    name: 'Nombre des Réclamation Non résolues',
    series: [
      {
        name: 'Jan/' + res,
        value: 0,
      },
      {
        name: 'Feb/' + res,
        value: 0,
      },
      {
        name: 'Marz/' + res,
        value: 0,
      },
      {
        name: 'Apr/' + res,
        value: 0,
      },
      {
        name: 'Mai/' + res,
        value: 0,
      },
      {
        name: 'Jun/' + res,
        value: 0,
      },
      {
        name: 'Jul/' + res,
        value: 0,
      },
      {
        name: 'Aug/' + res,
        value: 0,
      },
      {
        name: 'Sep/' + res,
        value: 0,
      },
      {
        name: 'Okt/' + res,
        value: 0,
      },
      {
        name: 'Nou/' + res,
        value: 0,
      },
      {
        name: 'Dez/' + res,
        value: 0,
      },
    ],
  },

  {
    name: 'objectifs',
    series: [
      {
        name: 'Jan/' + res,
        value: 0,
      },
      {
        name: 'Feb/' + res,
        value: 0,
      },
      {
        name: 'Marz/' + res,
        value: 0,
      },
      {
        name: 'Apr/' + res,
        value: 0,
      },
      {
        name: 'Mai/' + res,
        value: 0,
      },
      {
        name: 'Jun/' + res,
        value: 0,
      },
      {
        name: 'Jul/' + res,
        value: 0,
      },
      {
        name: 'Aug/' + res,
        value: 0,
      },
      {
        name: 'Sep/' + res,
        value: 0,
      },
      {
        name: 'Okt/' + res,
        value: 0,
      },
      {
        name: 'Nou/' + res,
        value: 0,
      },
      {
        name: 'Dez/' + res,
        value: 0,
      },
    ],
  },
];

export var tableHeaders = [
  'rowName',
  'Janvier',
  'Fevrier',
  'Mars',
  'Avril',
  'Mai',
  'Juin',
  'Juillet',
  'Aout',
  'Septembre',
  'Octobre',
  'Novembre',
  'Decembre',
];
export var dataTable = [
  {
    rowName: 'Nombre de postes infectés',
    Janvier: '0',
    Fevrier: '0',
    Mars: '0',
    Avril: '0',
    Mai: '0',
    Juin: '0',
    Juillet: '0',
    Aout: '0',
    Septembre: '0',
    Octobre: '0',
    Novembre: '0',
    Decembre: '0',
  },
  {
    rowName: 'Nombre de Pc',
    Janvier: '92',
    Fevrier: '92',
    Mars: '92',
    Avril: '92',
    Mai: '93',
    Juin: '95',
    Juillet: '98',
    Aout: '101',
    Septembre: '101',
    Octobre: '101',
    Novembre: '101',
    Decembre: '101',
  },
  {
    classType: 'bg-primary',
    rowName: 'Taux nbre de PC infectées %',
    Janvier: '0,00',
    Fevrier: '0,00',
    Mars: '0,00',
    Avril: '0,00',
    Mai: '0,00',
    Juin: '0,00',
    Juillet: '0,00',
    Aout: '0,00',
    Septembre: '0,00',
    Octobre: '0,00',
    Novembre: '0,00',
    Decembre: '0,00',
  },
  {
    classType: 'bg-danger',
    rowName: 'Objectifs',
    Janvier: '0',
    Fevrier: '0',
    Mars: '0',
    Avril: '0',
    Mai: '0',
    Juin: '0',
    Juillet: '0',
    Aout: '0',
    Septembre: '0',
    Octobre: '0',
    Novembre: '0',
    Decembre: '0',
  },
];
