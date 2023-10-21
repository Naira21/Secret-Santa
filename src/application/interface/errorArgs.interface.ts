import { HttpCodes } from '../../lib/constants/httpCodes';

export interface ErrorArgs {
  name?: string;
  httpCode: HttpCodes;
  description: string;
}
