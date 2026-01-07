import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
  dialect: 'postgres',          
  host: 'db',                   
  port: 5432,                   
  database: 'db_progect_1',     
  username: 'user_progect_1',   
  password: 'user_password_1',  
  logging: false,               
})