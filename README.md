# weight randomizer
creates random array sequence based on group weight and provided length of sequence. 
Implementation is based on fair die algorithm http://www.keithschwarz.com/darts-dice-coins/.
Algorithm complexity is O(N) at setup time, and guaranteed O(1) run time for every random selection.

### get started
- run
```
npm i weight-randomizer
```
- require into your project via
```
import WeightRandomizer from "./weight.randomizer";
```

### how it works

Method getSequence accepts two arguments:
- objectWeights: Array of objects and its weights. Objects are of any[] type.
- sequenceLength: Number of elements in resulted array

Result of method execution will be array[sequenceLength]. Elements will be of type any. Distribution of elements in resulted array is based on groups weight. Every element inside group has same possibilty to be picked up.

Example is available in the `src/weight.randomier.spec.ts` test file. 
