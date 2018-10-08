import { Observable, OperatorFunction } from 'rxjs';
import { map } from 'rxjs/operators';
import { Response } from '@angular/http';

export default (() => map((response: Response) => response.json()))();
