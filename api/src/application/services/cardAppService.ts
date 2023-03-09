
import UpdateCardRequest from "@app/models/updateCardRequest";
import AddCardRequest from "@app/models/addCardRequest";
import { ETypeList } from "@domain/enums/eTypeList";
import ICard from "@domain/interfaces/entities/icard";
import ICardRepository from "@domain/interfaces/repositories/icardRepository";
import Card from "@domain/models/card";
import CardRepository from "@infra/data/repositories/cardRepository";
import HTTP400Error from "@infra/handlers/errors/http400Error";
import HTTP404Error from "@infra/handlers/errors/http404Error";
import ICardResponse from "@app/interfaces/commands/icardReponse";
import CardResponse from "@app/models/cardReponse";


export default class CardAppService {

    private _cardRepository : ICardRepository;

    constructor() {
        //TODO: Usar injeção de dependência
        this._cardRepository = new CardRepository();
    }

    public async AddCardAsync(command: AddCardRequest) : Promise<ICardResponse> {
    
        const {titulo, conteudo, lista } = command;

        //TODO: Melhorar validações 
        if(!titulo || !conteudo  || !lista)
            throw new HTTP400Error("Ops! Por favor preencha as informações de título, conteúdo e lista.");

        const card = new Card(titulo, conteudo, ETypeList[lista?.replace(/\s/g, "") as keyof typeof ETypeList]);
        
        return this._cardRepository.CreateAsync(card)
            .then(cardCreated => 
                new CardResponse(cardCreated.cardId, cardCreated.title, cardCreated.content, cardCreated.list));
    }
    
    public async GetCardsAsync(): Promise<ICardResponse[]> {

        return await this._cardRepository.FindCardsAsync()
            .then((cards) => cards?.map((card) => 
                new CardResponse(card.cardId, card.title, card.content, card.list)));
    }

    public async UpdateCardAsync(cardId: string, command: UpdateCardRequest): Promise<ICardResponse | undefined>{

        //TODO: melhorar validações validações
        if(cardId != command.id)
            throw new HTTP400Error("Ops! A identificação do cartão está consistênte.");

        const {titulo, conteudo, lista } = command;
        
        if(!titulo || !conteudo  || !lista)
            throw new HTTP400Error("Ops! Por favor preencha as informações de título, conteúdo e lista.");

        var card = await this._cardRepository.FindCardByIdAsync(cardId) as Card;

        if(!card)
            throw new HTTP404Error("Ops! Não foi possível encontrar o cartão que você deseja alterar.");

        card.title = titulo;    
        card.content = conteudo;
        card.list = ETypeList[lista?.replace(/\s/g, "") as keyof typeof ETypeList];    

        return await this._cardRepository
            .UpdateAsync(cardId, card)
            .then((cardUpdated) => {
                if(cardUpdated)
                    return new CardResponse(cardUpdated.cardId, cardUpdated.title, cardUpdated.content, cardUpdated.list)
            });
    }

    public async DeleteCardsAsync(cardId: string): Promise<ICardResponse[]> {

        //TODO: melhorar validações validações
        const card = await this._cardRepository.FindCardByIdAsync(cardId);

        if(!card)
            throw new HTTP404Error("Ops! Não foi possível encontrar o cartão que você deseja remover.")

        await this._cardRepository.DeleteAsync(cardId);

        return await this._cardRepository.FindCardsAsync()
            .then((cards) => cards?.map((remainingCard => 
                new CardResponse(remainingCard.cardId, remainingCard.title, remainingCard.content, remainingCard.list))));
    }
}