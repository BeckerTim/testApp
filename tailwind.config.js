module.exports = {
  important: true,
  content: [
    "./src/**/*.{html,ts}",
    "./projects/newworkjobs/src/**/*.{html,ts}",
  ],
theme: {
  extend: {
    gridTemplateRows: {
      '32': 'repeat(32, minmax(0, 1fr))',
    },
    gridTemplateColumns: {
      // Simple 32 column grid
      '32': 'repeat(32, minmax(0, 1fr))',
    },
    gridColumn: {
      'span-27': 'span 27/ span 27',
      'span-31': 'span 31/ span 31'
    },
    gridRow: {
      'span-31': 'span 31 / span 31',
    },
    gridColumnEnd: {
      '13': '13',
      '14': '14',
      '15': '15',
      '16': '16',
      '17': '17',
      '32':'32',
    }
  }
},
corePlugins: {
  preflight: false,
}
}