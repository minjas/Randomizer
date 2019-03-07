import RandomizerFairDie from "./randomizer.fair.die";

describe("randomization", () => {
  it("get by provided weight sequence", () => {
    let randomizer =  new RandomizerFairDie();
    
    const sequenceCount = 1000;
    const sequence = randomizer.getSequence([9.7, 14.5, 12, 1.2, 2.2, 9.8, 22], sequenceCount);
    
    expect(sequence.length).toEqual(sequenceCount);
  });
});