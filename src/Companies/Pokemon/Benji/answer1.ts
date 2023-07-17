const _ = require("lodash");

const card = {
    id: 1,
    name: "Bulbasaur",
    type: "Basic",
};
const card2 = {
    id: 1,
    name: "Bulbasaur",
    type: "Basic",
};
const card3 = {
    id: 1,
    name: "Bulbasaur",
    type: "Basic",
};

const deck = [card, card2, card3];

class Validator {
    deck: any;

    constructor(deck: any) {
        this.deck = deck;
    }

    validateBasic() {
        for (let i = 0; i < this.deck.length; i++) {
            let item = this.deck[i];
            if (item.type == "Basic") {
                return true;
            }
        }
        console.log("failed basic check");
        return false;
    }

    validateCardCount() {
        if (this.deck.length != 3) {
            console.log("failed card count");
            return false;
        } else return true;
    }

    validateCardLimit() {
        let map = new Map();
        let deck = this.deck;
        for (let i = 0; i < deck.length; i++) {
            let card = deck[i];
            let count = map.get(card);
            if (map.has(card)) {
                map.set(card, count++);
            }
            if (count > 3) {
                console.log("count too high");
                return false;
            }
        }

        return true;
    }

    validate() {
        let valid = false;
        let validBasic = this.validateBasic();
        console.log("validte basic", validBasic);
        let validCardCount = this.validateCardCount();
        console.log("validte card count", validCardCount);
        let validCardLimit = this.validateCardLimit();
        console.log("validte card limit", validCardLimit);

        if (validBasic && validCardCount && validCardLimit) {
            valid = true;
        }

        return valid;
    }
}

let validator = new Validator(deck);

console.log("valid", validator.validate());
