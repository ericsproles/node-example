module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "node-example",
      script    : "app.js",
      env_production : {
        NODE_ENV: "production"
      },
      // env_staging : {
      //   NODE_ENV: "staging"
      // }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
  deploy : {
    production : {
      user : "deploy",
      host : "138.197.222.247",
      ref  : "origin/master",
      repo : "https://github.com/ericsproles/node-example.git",
      path : "/home/deploy/node-example",
      "post-deploy" : "nvm install && npm install && /home/deploy/.nvm/versions/node/v6.9.5/bin/pm2 startOrRestart ecosystem.config.js --env production"
    },
    // staging : {
    //   user : "node",
    //   host : "212.83.163.1",
    //   ref  : "origin/master",
    //   repo : "git@github.com:repo.git",
    //   path : "/var/www/development",
    //   "post-deploy" : "npm install && pm2 startOrRestart ecosystem.json --env dev",
    //   env  : {
    //     NODE_ENV: "dev"
    //   }
    // }
  }
}
