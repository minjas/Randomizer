import RandomizerFairDie from "./randomizer.fair.die";

describe("randomization", () => {
  it("get by provided weight sequence", () => {
    let randomizer =  new RandomizerFairDie();
    
    const sequenceCount = 1000;
    const sequence = randomizer.getSequence([ { weight: 9.7, objects: [{ type: 'google', album: 'barcelona 2010', mediaId: 2 },
                                                                       { type: 'google', album: 'barcelona 2010', mediaId: 4 },
                                                                       { type: 'google', album: 'barcelona 2010', mediaId: 3 },
                                                                       { type: 'google', album: 'barcelona 2010', mediaId: 8 },
                                                                       { type: 'google', album: 'barcelona 2010', mediaId: 12 },
                                                                       { type: 'google', album: 'barcelona 2010', mediaId: 56 }] }, 
                                              { weight: 14.5, objects: [{ type: 'google', album: 'porto 2016', mediaId: 2333 },
                                                                        { type: 'google', album: 'porto 2016', mediaId: 41312 },
                                                                        { type: 'google', album: 'porto 2016', mediaId: 3313 },
                                                                        { type: 'google', album: 'porto 2016', mediaId: 81234 },
                                                                        { type: 'google', album: 'porto 2016', mediaId: 14342 },
                                                                        { type: 'google', album: 'porto 2016', mediaId: 43156 }] }, 
                                              { weight: 12, objects: [{ type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
                                                                      { type: 'dropbox', album: 'focha 1904', mediaId: 34344 },
                                                                      { type: 'dropbox', album: 'focha 1904', mediaId: 3233 },
                                                                      { type: 'dropbox', album: 'focha 1904', mediaId: 8565643 },
                                                                      { type: 'dropbox', album: 'focha 1904', mediaId: 121212 },
                                                                      { type: 'dropbox', album: 'focha 1904', mediaId: 67656 }] }, 
                                              { weight: 1.2, objects: [{ type: 'google', album: 'vienna 2019', mediaId: 77672 },
                                                                        { type: 'google', album: 'vienna 2019', mediaId: 54544 },
                                                                        { type: 'google', album: 'vienna 2019', mediaId: 21213 },
                                                                        { type: 'google', album: 'vienna 2019', mediaId: 7878 },
                                                                        { type: 'google', album: 'vienna 2019', mediaId: 454512 },
                                                                        { type: 'google', album: 'vienna 2019', mediaId: 676756 }] }, 
                                              { weight: 2.2, objects: [{ type: 'google', album: 'christmas 2012', mediaId: 2122 },
                                                                      { type: 'google', album: 'christmas 2012', mediaId: 6674 },
                                                                      { type: 'google', album: 'christmas 2012', mediaId: 2233 },
                                                                      { type: 'google', album: 'christmas 2012', mediaId: 4568 },
                                                                      { type: 'google', album: 'christmas 2012', mediaId: 33212 },
                                                                      { type: 'google', album: 'christmas 2012', mediaId: 767656 }] }, 
                                              { weight: 9.8, objects: [{ type: 'google', album: 'easter highlights', mediaId: 3434 },
                                                                      { type: 'google', album: 'easter highlights', mediaId: 834 },
                                                                      { type: 'google', album: 'easter highlights', mediaId: 124343 },
                                                                      { type: 'google', album: 'easter highlights', mediaId: 56676 }] }], sequenceCount);    
    expect(sequence.length).toEqual(sequenceCount);
  });
});