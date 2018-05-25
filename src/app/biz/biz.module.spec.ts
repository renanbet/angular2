import { BizModule } from './biz.module';

describe('BizModule', () => {
  let bizModule: BizModule;

  beforeEach(() => {
    bizModule = new BizModule();
  });

  it('should create an instance', () => {
    expect(bizModule).toBeTruthy();
  });
});
