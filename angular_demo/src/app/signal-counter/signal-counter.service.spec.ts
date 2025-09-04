import { SignalCounterService } from './signal-counter.service';

describe('SignalCounterService', () => {
  it('should increment, decrement, and reset the counter', () => {
    const service = new SignalCounterService();
    expect(service.count()).toBe(0);
    service.increment();
    expect(service.count()).toBe(1);
    service.decrement();
    expect(service.count()).toBe(0);
    service.reset();
    expect(service.count()).toBe(0);
  });
});
