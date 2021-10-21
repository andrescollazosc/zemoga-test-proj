import { CharactersDataModel } from "../models/characters-data.model";

export class CharactersDataMock {

    
    public static getCharacters(): CharactersDataModel[] {
        return [
            {
                id: 'abcd-45621.dfghjk-963k',
                name: 'Pope Francis',
                history: "He's talking tough on clery sexual abuse, or is he just another pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)"
            }
        ];
    }

}
