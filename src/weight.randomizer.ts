export default class WeightRandomizer {
    aliases: Alias[] = [];

    private initialize(weights: number[]) {
      const weightsLength = weights.length;
      const weightsSum = weights.reduce((x, y) => x + y, 0)
      const average = weightsSum / weightsLength;

      let smalls = new Map<number, number>();
      let bigs = new Map<number, number>();
      
      for (var _i = 0; _i < weightsLength; _i++) {
          if(weights[_i] < average) {
            smalls.set(_i, weights[_i] / average);
          }

          if (weights[_i] >= average) {
            bigs.set(_i, weights[_i] / average);
          }

          this.aliases.push({ key: 1, value: null} as Alias)
      }

      let small = smalls.entries().next();
      let big = bigs.entries().next();

      while (small.value && big.value) {
          this.aliases[small.value[0]] = { key: small.value[1], value: big.value[0] } as Alias;
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
    };

    getSequence(objectWeights: WeightObject[], sequenceLength: number){
        let weights = objectWeights.filter(x => x.objects.length > 0).map(x => x.weight);
        this.initialize(weights);
        const length = weights.length;

        let result: (any | null)[] = [];
        for (let i = 0; i < sequenceLength; i++)
        {
            var r = (Math.random()) * length;
            var aliasIndex = Math.floor(r);

            var alias = this.aliases[aliasIndex];

            let index: number | null = (r - aliasIndex > alias.key) ? alias.value : aliasIndex;

            const weightValuesArray = objectWeights[index as number].objects;

            if(weightValuesArray.length !== 0) {
                const value = this.getRandomElement(weightValuesArray);
                result.push(value);
            }  
        }

        return result;
    }

    private getRandomElement(array: any[]) {
        return array[Math.floor(Math.random() * array.length)];
    }
}

interface Alias {
    key: number;
    value: number | null;
}

interface WeightObject {
    weight: number;
    objects: any[];
}