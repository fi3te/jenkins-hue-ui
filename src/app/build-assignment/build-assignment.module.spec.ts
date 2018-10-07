import { BuildAssignmentModule } from './build-assignment.module';

describe('BuildAssignmentModule', () => {
  let buildAssignmentModule: BuildAssignmentModule;

  beforeEach(() => {
    buildAssignmentModule = new BuildAssignmentModule();
  });

  it('should create an instance', () => {
    expect(buildAssignmentModule).toBeTruthy();
  });
});
