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
      repo : "https://cf06131c137fae597af6720f6c4f05996389fe2b@github.com/ericsproles/node-example.git",
      path : "~/dev/learncode/node-example",
      "post-deploy" : "nvm install && npm install && pm2 startOrRestart ecosystem.json --env production"
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
