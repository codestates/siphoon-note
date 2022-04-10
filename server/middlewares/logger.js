const colors = require('colors');

const logger = require('tracer').colorConsole({
  format: [
    '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})',
    {
      error:
        '{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}',
    },
  ],
  dateformat: 'HH:MM:ss.L',
  preprocess: data => {
    data.title = data.title.toUpperCase();
  },
  level: 'info',
  methods: ['info', 'log', 'debug', 'warn', 'error'],
  filters: {
    info: colors.white,
    debug: colors.blue,
    error: colors.red,
  },
});

module.exports = logger;
