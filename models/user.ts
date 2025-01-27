import { DataTypes, Model, Optional } from 'sequelize';
import { sequelize } from '../db/sequelizeConnection';
import { TCreateUserInput, TUserSchema } from '../components/users/user.dto';

// Extend the Sequelize Model class
export class User
  extends Model<TUserSchema, TCreateUserInput>
  implements TUserSchema
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public session!: boolean;
  public active!: boolean;

  // Timestamps
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    session: {
      type: DataTypes.STRING,
      defaultValue: false,
    },
    active: {
      type: DataTypes.STRING,
      defaultValue: true,
    },
  },
  {
    sequelize,
    tableName: 'Users',
  }
);
