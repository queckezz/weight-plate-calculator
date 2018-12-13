export const theme = {
  fonts: {
    primary: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif'
  },
  fontWeights: {
    thin: 200,
    regular: 400,
    bold: 700
  },

  scale: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  radii: [0, 5],

  colors: {
    link: ['#748ffc'],

    grays: [
      '#171b22',
      '#272d3a',
      '#373f51',
      '#475168',
      '#57637f',
      '#677596',
      '#7e8aa6',
      '#959fb6',
      '#acb4c6',
      '#c3c9d6',
      '#dbdee6',
      '#f2f3f6',
      '#fefefe'
    ],

    plateColors: {
      [25]: 'red',
      [20]: 'blue',
      [15]: 'yellow',
      [10]: 'green',
      [5]: 'white',
      [2.5]: 'red',
      [1.25]: 'white'
    }
  },

  shadows: [
    null,
    '0 2px 4px 0 rgba(0,0,0,0.10)',
    '0 -4px 8px 0 rgba(0,0,0,0.12), 0 -2px 4px 0 rgba(0,0,0,0.08)',
    '0 -15px 30px 0 rgba(0,0,0,0.11), 0 -5px 15px 0 rgba(0,0,0,0.08)'
  ]
}
