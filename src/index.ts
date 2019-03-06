export default class Randomizer {
    initializeAliases(weights: number[]) {
      const weightsLength = weights.length;
      const weightsSum = weights.reduce((x, y) => x + y, 0)
      const average = weightsSum / weightsLength;

      let smalls = new Map<number, number>();
      let bigs = new Map<number, number>();
      let aliases: Alias[] = [];

      for (var _i = 0; _i < weightsLength; _i++) {
          if(weights[_i] < average) {
            smalls.set(_i, weights[_i] / average);
          }

          if (weights[_i] >= average) {
            bigs.set(_i, weights[_i] / average);
          }

          aliases.push({ key: 1, value: null} as Alias)
      }

      let small = smalls.entries().next();
      let big = bigs.entries().next();

      while (small.value && big.value) {
          aliases[small.value[0]] = { key: small.value[1], value: big.value[0] } as Alias;
          big = (new Map<number, number>([[big.value[0], big.value[1] - (1 - small.value[1])]])).entries().next();

          if (big.value[1] < 1)
          {
              small = big;
              bigs.delete(bigs.keys().next().value);
              big = bigs.entries().next();
          }
          else
          {
              smalls.delete(smalls.keys().next().value);
              small = smalls.entries().next();
          }
      }

      return aliases;
    };

    getByWeights(weights: number[], sequenceLength: number){
        const aliases = this.initializeAliases(weights);
        const length = weights.length;

        let result: (number | null)[] = [];
        for (let i = 0; i < sequenceLength; i++)
        {
            var r = (Math.random()) * length;
            var index = Math.floor(r);

            var alias = aliases[index];

            if (r - index > alias.key)
            {
                result.push(alias.value);
            }
            else
            {
                result.push(index);
            }
        }

        return result;
    }
}

interface Alias {
    key: number;
    value: number | null;
}