import { ETypeList } from "@domain/enums/eTypeList";
import Card from "@domain/models/card";

export default interface ICard {

     cardId:string;
     title:string;
     content:string;
     list:ETypeList;
}