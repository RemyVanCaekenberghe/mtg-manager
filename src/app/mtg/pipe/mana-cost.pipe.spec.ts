import { ManaCostPipe } from './mana-cost.pipe';

describe('ManaCostPipe', () => {
  it('create an instance', () => {
    const pipe = new ManaCostPipe();
    expect(pipe).toBeTruthy();
  });
});
