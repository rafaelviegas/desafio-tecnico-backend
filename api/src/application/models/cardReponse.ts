import ICardResponse from "@app/interfaces/commands/icardReponse";

export default class CardResponse implements ICardResponse {


    constructor(id:string, titulo: string, conteudo: string, lista: string) {

        this.id = id;
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.lista = lista;
    }

    public id!:string;
    public titulo!: string;
    public conteudo!: string;
    public lista!: string;
}
