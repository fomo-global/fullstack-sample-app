import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../../config/database';

interface UserAttributes {
  id: string;
  telegramId: number;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  photoUrl: string | null;
  createdAt?: Date;
  updatedAt?: Date;
}

type UserCreationAttributes = Optional<
  UserAttributes,
  | 'id'
  | 'username'
  | 'firstName'
  | 'lastName'
  | 'photoUrl'
  | 'createdAt'
  | 'updatedAt'
>;

type UserInstance = Model<UserAttributes, UserCreationAttributes> &
  UserAttributes;

export const User = sequelize.define<UserInstance>(
  'User',
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    telegramId: { type: DataTypes.BIGINT, allowNull: false, unique: true },
    username: { type: DataTypes.STRING, allowNull: true },
    firstName: { type: DataTypes.STRING, allowNull: true },
    lastName: { type: DataTypes.STRING, allowNull: true },
    photoUrl: { type: DataTypes.STRING, allowNull: true },
  },
  {
    tableName: 'users',
    timestamps: true,
  },
);
