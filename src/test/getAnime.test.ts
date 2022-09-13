import scopeAnime from '..';
import { AvailableSubs } from '../enums';

describe('Getting anime from subs', () => {
  test('should return anime from OkamiSubs', async () => {
    const data = await scopeAnime({
      anime: 'engage-kiss',
      episode: '1-684d2fa7-5cc8-4dc2-9f4a-bec2726770dc',
      website: AvailableSubs.OkamiSubs,
    });
    expect(data.status).toBe(200);
  });

  test('should return anime from MioroSubs', async () => {
    const data = await scopeAnime({
      anime: 'summertime-render-odcinek',
      episode: '12',
      website: AvailableSubs.MioroSubs,
    });
    expect(data.status).toBe(200);
  });

  test('should return anime from DayidSub', async () => {
    const data = await scopeAnime({
      anime: 'Tensei-Kenja-no-Isekai-Life',
      episode: '01',
      website: AvailableSubs.DayidSub,
    });
    expect(data.status).toBe(200);
  });

  test('should return anime from NanaSubs', async () => {
    const data = await scopeAnime({
      anime: 'engage-kiss',
      episode: '855',
      website: AvailableSubs.NanaSubs,
    });
    expect(data.status).toBe(200);
  });

  test('should return anime from FumetsuSubs', async () => {
    const data = await scopeAnime({
      anime: 'AzurLane',
      episode: '0',
      website: AvailableSubs.FumetsuSubs,
    });
    expect(data.status).toBe(200);
  });

  test('should return anime from MaouSubs', async () => {
    const data = await scopeAnime({
      anime: '',
      episode: 'yofukashi-no-uta-4',
      website: AvailableSubs.MaouSubs,
    });
    expect(data.status).toBe(200);
  });
});
