/* ------------------------ Types ----------------------- */
export interface PlanType {
  id: number;
  title: string;
  amount: number;
  people: number;
}
/* ------------------------ Data ------------------------ */
export const PLAN_DATA: PlanType[] = [
  {
    id: 0,
    title: '喵星人之友',
    amount: 600,
    people: 9957,
  },
  {
    id: 1,
    title: '喵星大使',
    amount: 6000,
    people: 456,
  },
  {
    id: 2,
    title: '喵星傳奇',
    amount: 60000,
    people: 881,
  },
];
