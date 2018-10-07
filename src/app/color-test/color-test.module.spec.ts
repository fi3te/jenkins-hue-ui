import { ColorTestModule } from './color-test.module';

describe('ColorTestModule', () => {
  let colorTestModule: ColorTestModule;

  beforeEach(() => {
    colorTestModule = new ColorTestModule();
  });

  it('should create an instance', () => {
    expect(colorTestModule).toBeTruthy();
  });
});
