
import { v4 as uuid } from 'uuid';
import { ETypeList } from "@domain/enums/eTypeList";
import ICard from "@domain/interfaces/entities/icard";

export default class Card implements ICard {

    
    constructor(title: string, content: string, list: ETypeList) {
        
        this.cardId = uuid();
        this.title = title;
        this.content = content;
        this.list = list;    
    }
    
    public SetTitle(title: string): ICard {
        this.title = title;
        return this;
    }
    public SetContent(content: string): ICard {
        this.content = content;
        return this;
    }
    public SetList(list: ETypeList): ICard {
        this.list = list;
        return this;
    }
    
    public cardId: string;
    public title: string;
    public content: string;
    public list: ETypeList;

}