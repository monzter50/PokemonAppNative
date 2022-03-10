import {backgroundColors} from '../theme';
import {JSONObject} from '../types';
type DetailsObj = {
  trigger: {name: string};
  min_level: number;
  item: JSONObject;
};

type EvoProps = {
  evolution_details: DetailsObj[];
  species: {url: string; name: string};
  evolves_to: any[];
};

export const getEvolutions = (evolutionData: EvoProps) => {
  const evoChain = [];
  let evoData = evolutionData || null;
  if (evoData) {
    do {
      let numberOfEvolutions = evoData.evolves_to.length;

      const evoDetails = evoData.evolution_details[0];
      const id = evoData.species.url.split('/');
      evoChain.push({
        speciesName: evoData.species.name,
        minLevel: !evoDetails ? 1 : evoDetails.min_level,
        triggerName: !evoDetails ? null : evoDetails.trigger.name,
        item: !evoDetails ? null : evoDetails.item,
        id: `${id[6]}`,
      });
      if (numberOfEvolutions > 1) {
        for (let i = 0; i < numberOfEvolutions; i++) {
          evoChain.push({
            speciesName: evoData.evolves_to[i].species.name,
            minLevel: !evoData.evolves_to[i]
              ? 1
              : evoData.evolves_to[i].min_level,
            triggerName: !evoData.evolves_to[i].trigger
              ? null
              : evoData.evolves_to[i].trigger.name,
            item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
            id: `${id[6]}`,
          });
        }
      }

      evoData = evoData.evolves_to[0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  }

  return evoChain;
};

export function backgroundColorType(type: string = 'normal'): string {
  switch (type) {
    case 'normal':
      return backgroundColors.normal;
    case 'bug':
      return backgroundColors.bug;
    case 'grass':
      return backgroundColors.grass;
    case 'water':
      return backgroundColors.water;
    case 'fire':
      return backgroundColors.fire;
    case 'dark':
      return backgroundColors.dark;
    case 'dragon':
      return backgroundColors.dragon;
    case 'electric':
      return backgroundColors.electric;
    case 'electric':
      return backgroundColors.electric;
    case 'fairy':
      return backgroundColors.fairy;
    case 'fighting':
      return backgroundColors.fighting;
    case 'ghost':
      return backgroundColors.ghost;
    case 'ground':
      return backgroundColors.ground;
    case 'ice':
      return backgroundColors.ice;
    case 'poison':
      return backgroundColors.poison;
    case 'psychic':
      return backgroundColors.psychic;
    case 'rock':
      return backgroundColors.rock;
    case 'steel':
      return backgroundColors.steel;
    default:
      return backgroundColors.normal;
  }
}
