import { Sequelize } from 'sequelize'
import { env } from './env'

export const sequelize = new Sequelize({
  dialect: 'postgres',          
  host: env.POSTGRES_HOST,                   
  port: env.POSTGRES_PORT,                   
  database: env.POSTGRES_DB,     
  username: env.POSTGRES_USER,   
  password: env.POSTGRES_PASSWORD,  
  logging: false,               
})