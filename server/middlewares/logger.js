const colors = require('colors');

const logger = require('tracer').colorConsole({
  format: [
    '[{{timestamp}}] [{{title}}] {{message}} ({{path}}:{{line}})',
    {
      error:
        '[{{timestamp}}] [{{title}}] {{message}} ({{path}}:{{line}})\nCall Stack:\n{{stack}}',
    },
  ],
  dateformat: 'HH:MM:ss.L',
  preprocess: data => {
    data.title = data.title.toUpperCase();
  },
  level: 'info',
  methods: ['info', 'debug', 'error'],
  filters: {
    info: colors.white,
    debug: colors.blue,
    error: colors.red,
  },
});

module.exports = logger;
