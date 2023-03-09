import { DataTypes, Model} from 'sequelize';
import  { sequelize }  from "@infra/data/context/dbcontext";

class User extends Model {};

User.init({
    
    userId: {
      field: 'user_id',
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {

    timestamps: false,  
    sequelize, 
    modelName: 'user' 
    
  });

  export default User;