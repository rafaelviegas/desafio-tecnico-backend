import { Sequelize } from 'sequelize';
// const sequelize = new Sequelize("kanban","postgres","postgres",{
//     host: 'localhost',
//     dialect:  'postgres'
//   });
export const sequelize = new Sequelize('sqlite::memory:');