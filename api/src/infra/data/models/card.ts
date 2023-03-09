import { ETypeList } from "@domain/enums/eTypeList";
import ICard from "@domain/interfaces/entities/icard";
import { DataTypes, Model} from 'sequelize';
import  { sequelize }  from "@infra/data/context/dbcontext";

class Card extends Model<ICard> {};

Card.init({

    cardId: {
      field: 'card_id',
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
        // defaultValue: DataTypes.UUIDV4,
    },

    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    content: {
        type: DataTypes.STRING,
        allowNull: false
    },

    list: {
        type: DataTypes.ENUM(...Object.values(ETypeList)),
        defaultValue: ETypeList.ToDo,
        allowNull: false
    }
  }, {
    timestamps: false,  
    sequelize, 
    modelName: 'card' 
  });

  export default Card;
