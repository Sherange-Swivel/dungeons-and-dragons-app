export interface Spell {
  index: string;
  name: string;
  url: string;
}

export interface SpellCardInterface {
  spell: Spell;
  index: number;
}
