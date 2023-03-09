import ICard from "@domain/interfaces/entities/icard";
import ICardRepository from "@domain/interfaces/repositories/icardRepository";
import Card from "@infra/data/models/card";

export default class CardRepository implements ICardRepository {

    public async FindCardByIdAsync(cardId: string): Promise<ICard | undefined> {
        return await Card.findOne({ where: { cardId }})
        .then((card) => card?.dataValues);
    }

    public async FindCardsAsync(): Promise<ICard[]> {
        return await Card
            .findAll()
            .then((cards) => cards?.map(card => card.dataValues));
    }

    public async CreateAsync(card:ICard): Promise<ICard> {
        return await Card
            .create(card)
            .then(card => card.dataValues);
    }

    public async UpdateAsync(cardId:string, card: ICard): Promise<ICard | undefined> {

       return await Card.update(card,  { where: { cardId }})
        .then(async() => await Card.findOne({ where: { cardId }})
        .then((card) => card?.dataValues));
    }

    public async DeleteAsync(cardId: string): Promise<void> {

        await Card.destroy({ where: { cardId}});

    }
}