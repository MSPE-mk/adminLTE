let today = new Date();
let actual_year = today.getFullYear();
let str = '' + actual_year;
let res = str.substring(2, 4);

export var nbrReclationNonResolu = [
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
    value: 0,
  },
  {
    name: 'Dez/' + res,
    value: 0,
  },
];

export var nbrReclationResolu = [
  {
    name: 'Jan/' + res,
    value: 0,
  },
  {
    name: 'Feb/' + res,
    value: 2,
  },
  {
    name: 'Marz/' + res,
    value: 0,
  },
  {
    name: 'Apr/' + res,
    value: 1,
  },
  {
    name: 'Mai/' + res,
    value: 1,
  },
  {
    name: 'Jun/' + res,
    value: 2,
  },
  {
    name: 'Jul/' + res,
    value: 1,
  },
  {
    name: 'Aug/' + res,
    value: 0,
  },
  {
    name: 'Sep/' + res,
    value: 1,
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
    classType: 'bg-primary',
    rowName: 'Nombre des Réclamtions Non résolues',
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
  {
    classType: 'bg-success',
    rowName: 'Nombre des Réclamtions résolues',
    Janvier: '0',
    Fevrier: '2',
    Mars: '0',
    Avril: '1',
    Mai: '1',
    Juin: '2',
    Juillet: '1',
    Aout: '0',
    Septembre: '1',
    Octobre: '0',
    Novembre: '0',
    Decembre: '0',
  },
];

export var tauxPcInfecte = [
  {
    name: 'Nombre des Réclamation Non résolues',
    series: [
      {
        name: 'Jan/' + res,
        value: 0.07,
      },
      {
        name: 'Feb/' + res,
        value: 0.07,
      },
      {
        name: 'Marz/' + res,
        value: 0.07,
      },
      {
        name: 'Apr/' + res,
        value: 0.07,
      },
      {
        name: 'Mai/' + res,
        value: 0.07,
      },
      {
        name: 'Jun/' + res,
        value: 0.07,
      },
      {
        name: 'Jul/' + res,
        value: 0.07,
      },
      {
        name: 'Aug/' + res,
        value: 0.07,
      },
      {
        name: 'Sep/' + res,
        value: 0.07,
      },
      {
        name: 'Okt/' + res,
        value: 0.07,
      },
      {
        name: 'Nov/' + res,
        value: 0.07,
      },
      {
        name: 'Dez/' + res,
        value: 0.07,
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
        name: 'Nov/' + res,
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
        name: 'Nov/' + res,
        value: 5,
      },
      {
        name: 'Dez/' + res,
        value: 5,
      },
    ],
  },
];
