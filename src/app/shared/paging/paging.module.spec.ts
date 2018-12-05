import { PagingModule } from './paging.module';

describe('PagingModule', () => {
  let pagingModule: PagingModule;

  beforeEach(() => {
    pagingModule = new PagingModule();
  });

  it('should create an instance', () => {
    expect(pagingModule).toBeTruthy();
  });
});
