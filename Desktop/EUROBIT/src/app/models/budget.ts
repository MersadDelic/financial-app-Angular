export class Budget {
  id?: number;
  name: string;
  amount: number;
  date_from: Date;
  date_to: Date;
  date_created?: Date;
  owner?: number;
  budget_users?: { 'name': string }[];
}
