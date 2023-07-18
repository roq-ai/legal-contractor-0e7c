import { QuestionnaireInterface } from 'interfaces/questionnaire';
import { TemplateInterface } from 'interfaces/template';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  questionnaire?: QuestionnaireInterface[];
  template?: TemplateInterface[];
  user?: UserInterface;
  _count?: {
    questionnaire?: number;
    template?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
