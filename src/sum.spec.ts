import Randomizer from "./index";

describe("randomization", () => {
  it("get by provided weight sequence", () => {
    let randomizer =  new Randomizer();
    
    const sequenceCount = 1000;
    const sequence = randomizer.getByWeights([9.7, 14.5, 12, 1.2, 2.2, 9.8, 22], sequenceCount);
    
    expect(sequence.length).toEqual(sequenceCount);
  });
});