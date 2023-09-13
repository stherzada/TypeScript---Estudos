export abstract class Character {
    protected abstract emoji: string;

    protected name: string;
    protected attack: number;
    protected life: number;
    constructor(name: string, attack: number, life: number) {
        this.name = name;
        this.attack = attack;
        this.life = life;
    }

    attackSeveral(character: Character): void {
        this.speak();
        console.log(`${this.name} is attacking`);
        character.loseLife(this.attack);
    }

    //vai dar dano  e tirar a vida de acordo.
    loseLife(forceAttack: number): void {
        this.life -= forceAttack;
        console.log(`${this.emoji} ${this.name} now it had ${this.life} life`);
    }

    abstract speak(): void;
}

class Warrior extends Character {
    protected emoji = "\u{1F9DD}";
    speak(): void {
        console.log(this.emoji + " SAIIIIIIIIIIIIIIIIAAAAAAA MONSTRO");
    }
}

class Monster extends Character {
    protected emoji = "\u{1f9df}";
    speak(): void {
        console.log(this.emoji + " AAAAAAAAARGGGGGGGGGHHHHHHHHHHHHHHH");
    }
}

const warrior = new Warrior("Stherzada", 20, 1000);
const monster = new Monster("Junin", 10, 200);

warrior.attackSeveral(monster);
monster.attackSeveral(warrior);
warrior.attackSeveral(monster);
