import { formatDuration } from '../lib/utils'

describe('formatDuration', () => {
  it('formats 0 seconds', () => {
    expect(formatDuration(0)).toBe('00:00:00');
  });

  it('formats 3661 seconds', () => {
    expect(formatDuration(3661)).toBe('01:01:01');
  });
});
