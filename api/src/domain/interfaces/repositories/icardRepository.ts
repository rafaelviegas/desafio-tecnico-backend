
import ICard from "@domain/interfaces/entities/icard";

export default interface ICardRepository {

    FindCardsAsync(): Promise<ICard[]>;
    FindCardByIdAsync(cardId: string): Promise<ICard | undefined>;
    CreateAsync(card: ICard): Promise<ICard>;
    UpdateAsync(cardId:string, card: ICard): Promise<ICard | undefined>;
    DeleteAsync(cardId:string): Promise<void>;
}