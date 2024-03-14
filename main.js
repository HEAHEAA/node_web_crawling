const { Builder, By, Key, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const postgres = require('./db/postgresdb');

const crawling = async () => {
    console.log("크롤링 시작");
    
    postgres.connect(function(err){
        if(err) throw err;
        console.log('pg db connect !')
    });
} 

crawling();