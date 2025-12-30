import { DataTypes } from 'sequelize';
import { sequelize } from "../index";

export const Todo = sequelize.define('Todo', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  priority: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
  dueDate: {
    type: DataTypes.DATE,
    allowNull: true,
  },
}, {
  tableName: 'todos',
  timestamps: true,
});
