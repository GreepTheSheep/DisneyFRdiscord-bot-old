module.exports = {
  apps : [{
    script: 'bot.js',
    name: 'DisneyFR-Bot',

    autorestart: true,
    watch: true,
    ignore_watch : ["node_modules", "data", ".git"],
    max_memory_restart: '500M',
  }]
};
