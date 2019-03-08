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

Full example usage code is available in the `src/weight.randomier.spec.ts` test file. 
