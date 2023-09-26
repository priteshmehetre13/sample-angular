import { PureImpurePipe } from './pure-impure.pipe';

describe('PureImpurePipe', () => {
  it('create an instance', () => {
    const pipe = new PureImpurePipe();
    expect(pipe).toBeTruthy();
  });
});
