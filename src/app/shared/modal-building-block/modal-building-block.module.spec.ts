import { ModalBuildingBlockModule } from './modal-building-block.module';

describe('ModalBuildingBlockModule', () => {
  let modalBuildingBlockModule: ModalBuildingBlockModule;

  beforeEach(() => {
    modalBuildingBlockModule = new ModalBuildingBlockModule();
  });

  it('should create an instance', () => {
    expect(modalBuildingBlockModule).toBeTruthy();
  });
});
