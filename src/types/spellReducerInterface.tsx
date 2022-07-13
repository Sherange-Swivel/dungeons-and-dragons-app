import { SpellDetailInterface } from "./spellDetailInterface";
import { Spell } from "./spellInterface";

export interface SpellReducerInterface {
  spellList: Array<Spell>;
  spellDetails : SpellDetailInterface | null;
}
