import { backgroundColors, colors } from '@monster/theme';
import { JSONObject } from '@monster/types';
type DetailsObj = {
  trigger: { name: string };
  min_level: number;
  item: JSONObject;
};

type EvoProps = {
  evolution_details: DetailsObj[];
  species: { url: string; name: string };
  evolves_to: any[];
};

export const getEvolutions = (evolutionData: EvoProps) => {
  const evoChain = [];
  let evoData = evolutionData ?? null;
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
        for (let i = 1; i < numberOfEvolutions; i++) {
          const newId = evoData.evolves_to[i].species.url.split('/');
          evoChain.push({
            speciesName: evoData.evolves_to[i].species.name,
            minLevel: !evoData.evolves_to[i]
              ? 1
              : evoData.evolves_to[i].min_level,
            triggerName: !evoData.evolves_to[i].trigger
              ? null
              : evoData.evolves_to[i].trigger.name,
            item: !evoData.evolves_to[i] ? null : evoData.evolves_to[i].item,
            id: `${newId[6]}`,
          });
        }
      }

      evoData = evoData.evolves_to[0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
  }

  return evoChain;
};

export function backgroundColorType(
  type: string = 'normal',
  isBackground: boolean = true,
): string {
  let Colors = isBackground ? backgroundColors : colors;
  switch (type) {
    case 'normal':
      return Colors.normal;
    case 'bug':
      return Colors.bug;
    case 'grass':
      return Colors.grass;
    case 'water':
      return Colors.water;
    case 'fire':
      return Colors.fire;
    case 'dark':
      return Colors.dark;
    case 'dragon':
      return Colors.dragon;
    case 'electric':
      return Colors.electric;
    case 'electric':
      return Colors.electric;
    case 'fairy':
      return Colors.fairy;
    case 'fighting':
      return Colors.fighting;
    case 'ghost':
      return Colors.ghost;
    case 'ground':
      return Colors.ground;
    case 'ice':
      return Colors.ice;
    case 'poison':
      return Colors.poison;
    case 'psychic':
      return Colors.psychic;
    case 'rock':
      return Colors.rock;
    case 'steel':
      return Colors.steel;
    default:
      return Colors.normal;
  }
}

export function zeroPad(num?: number | string, count: number = 2): string {
  var numZeropad = num + '';
  while (numZeropad.length < count) {
    numZeropad = '0' + numZeropad;
  }
  return numZeropad;
}
