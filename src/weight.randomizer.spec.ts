import WeightRandomizer from "./weight.randomizer";

class MediaItem {
  type: string;
  album: string;
  mediaId: number;

  constructor(type: string, album: string, mediaId: number) {
    this.type = type;
    this.album = album;
    this.mediaId = mediaId;
  }
}

describe("weight randomization", () => {
  it("result sequence count must be equal to input sequence count", () => {
    let randomizer =  new WeightRandomizer();
    
    const sequenceLength = 100;
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
                                                                      { type: 'google', album: 'easter highlights', mediaId: 56676 }] }], sequenceLength);
                                                                    
    expect(sequence.length).toEqual(sequenceLength);

    //posible output sequence
    /* [ { type: 'google', album: 'porto 2016', mediaId: 81234 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'google', album: 'porto 2016', mediaId: 43156 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'barcelona 2010', mediaId: 3 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 67656 },
    { type: 'google', album: 'barcelona 2010', mediaId: 4 },
    { type: 'google', album: 'barcelona 2010', mediaId: 12 },
    { type: 'google', album: 'porto 2016', mediaId: 14342 },
    { type: 'google', album: 'porto 2016', mediaId: 43156 },
    { type: 'google', album: 'barcelona 2010', mediaId: 12 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'google', album: 'barcelona 2010', mediaId: 4 },
    { type: 'google', album: 'porto 2016', mediaId: 43156 },
    { type: 'google', album: 'christmas 2012', mediaId: 6674 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 121212 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 34344 },
    { type: 'google', album: 'easter highlights', mediaId: 56676 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 34344 },
    { type: 'google', album: 'porto 2016', mediaId: 14342 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'barcelona 2010', mediaId: 12 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'christmas 2012', mediaId: 6674 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 3233 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 3233 },
    { type: 'google', album: 'barcelona 2010', mediaId: 56 },
    { type: 'google', album: 'porto 2016', mediaId: 14342 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 8565643 },
    { type: 'google', album: 'barcelona 2010', mediaId: 12 },
    { type: 'google', album: 'vienna 2019', mediaId: 21213 },
    { type: 'google', album: 'porto 2016', mediaId: 81234 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'google', album: 'barcelona 2010', mediaId: 12 },
    { type: 'google', album: 'barcelona 2010', mediaId: 3 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 8565643 },
    { type: 'google', album: 'porto 2016', mediaId: 41312 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'easter highlights', mediaId: 124343 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'easter highlights', mediaId: 56676 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 121212 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 8565643 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'google', album: 'barcelona 2010', mediaId: 8 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 121212 },
    { type: 'google', album: 'barcelona 2010', mediaId: 8 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'easter highlights', mediaId: 3434 },
    { type: 'google', album: 'easter highlights', mediaId: 56676 },
    { type: 'google', album: 'vienna 2019', mediaId: 7878 },
    { type: 'google', album: 'barcelona 2010', mediaId: 3 },
    { type: 'google', album: 'easter highlights', mediaId: 124343 },
    { type: 'google', album: 'barcelona 2010', mediaId: 3 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 121212 },
    { type: 'google', album: 'christmas 2012', mediaId: 33212 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 34344 },
    { type: 'google', album: 'christmas 2012', mediaId: 6674 },
    { type: 'google', album: 'easter highlights', mediaId: 3434 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 67656 },
    { type: 'google', album: 'porto 2016', mediaId: 41312 },
    { type: 'google', album: 'easter highlights', mediaId: 124343 },
    { type: 'google', album: 'vienna 2019', mediaId: 676756 },
    { type: 'google', album: 'porto 2016', mediaId: 81234 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'easter highlights', mediaId: 56676 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 34344 },
    { type: 'google', album: 'vienna 2019', mediaId: 676756 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'porto 2016', mediaId: 41312 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 3233 },
    { type: 'google', album: 'easter highlights', mediaId: 834 },
    { type: 'google', album: 'christmas 2012', mediaId: 2233 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 23232 },
    { type: 'google', album: 'easter highlights', mediaId: 56676 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'barcelona 2010', mediaId: 2 },
    { type: 'google', album: 'porto 2016', mediaId: 43156 },
    { type: 'google', album: 'porto 2016', mediaId: 2333 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'google', album: 'porto 2016', mediaId: 3313 },
    { type: 'google', album: 'porto 2016', mediaId: 41312 },
    { type: 'google', album: 'easter highlights', mediaId: 124343 },
    { type: 'dropbox', album: 'focha 1904', mediaId: 8565643 },
    { type: 'google', album: 'porto 2016', mediaId: 41312 },
    { type: 'google', album: 'easter highlights', mediaId: 124343 } ] */
  });

  it("result sequence respect weight", () => {
    let randomizer = new WeightRandomizer();

    const sequenceLength = 10;
    const sequence = randomizer.getSequence(
      [
        {
          weight: 0.6,
          objects:
            [
              new MediaItem('google', 'barcelona 2010', 1),
              new MediaItem('google', 'barcelona 2010', 2),
              new MediaItem('google', 'barcelona 2010', 3),
              new MediaItem('google', 'barcelona 2010', 4),
              new MediaItem('google', 'barcelona 2010', 5),
              new MediaItem('google', 'barcelona 2010', 6),
              new MediaItem('google', 'barcelona 2010', 7),
              new MediaItem('google', 'barcelona 2010', 8),
              new MediaItem('google', 'barcelona 2010', 9),
              new MediaItem('google', 'barcelona 2010', 10)
            ]
        },
        {
          weight: 0.3,
          objects:
            [
              new MediaItem('google', 'porto 2010', 11),
              new MediaItem('google', 'porto 2010', 12),
              new MediaItem('google', 'porto 2010', 13),
              new MediaItem('google', 'porto 2010', 14),
              new MediaItem('google', 'porto 2010', 15),
              new MediaItem('google', 'porto 2010', 16),
              new MediaItem('google', 'porto 2010', 17),
              new MediaItem('google', 'porto 2010', 18),
              new MediaItem('google', 'porto 2010', 19),
              new MediaItem('google', 'porto 2010', 20)
            ]
        },
        {
          weight: 0.1,
          objects:
          [
            new MediaItem('google', 'vienna 2010', 21),
            new MediaItem('google', 'vienna 2010', 22),
            new MediaItem('google', 'vienna 2010', 23),
            new MediaItem('google', 'vienna 2010', 24),
            new MediaItem('google', 'vienna 2010', 25),
            new MediaItem('google', 'vienna 2010', 26),
            new MediaItem('google', 'vienna 2010', 27),
            new MediaItem('google', 'vienna 2010', 28),
            new MediaItem('google', 'vienna 2010', 29),
            new MediaItem('google', 'vienna 2010', 30)
          ]
        },
      ],
      sequenceLength);

    var nrOfBarcelonaItems = 0;
    var nrOfPortoItems = 0;
    var nrOfViennaItems = 0;
    sequence.forEach(function (entry) {
      var item = entry as MediaItem;
      if (item.mediaId <= 10) {
        nrOfBarcelonaItems++;
      } else if (item.mediaId <= 20) {
        nrOfPortoItems++;
      } else if (item.mediaId <= 30) {
        nrOfViennaItems++;
      }
    });

    expect(nrOfBarcelonaItems + nrOfPortoItems + nrOfViennaItems).toBe(sequenceLength);
    expect(nrOfBarcelonaItems).toBeGreaterThanOrEqual(nrOfPortoItems);
    expect(nrOfPortoItems).toBeGreaterThanOrEqual(nrOfViennaItems);
  });

});