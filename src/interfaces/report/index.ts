import { OrganisationInterface } from 'interfaces/organisation';
import { UserInterface } from 'interfaces/user';

export interface ReportInterface {
  id?: string;
  organisation_id: string;
  user_id: string;
  report_type: string;
  start_date: Date;
  end_date: Date;
  created_at?: Date;
  updated_at?: Date;

  organisation?: OrganisationInterface;
  user?: UserInterface;
  _count?: {};
}
