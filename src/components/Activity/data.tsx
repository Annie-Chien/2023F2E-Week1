import activity1 from '../../assets/activity/activity-1.png';
import activity2 from '../../assets/activity/activity-2.png';
import activity3 from '../../assets/activity/activity-3.png';

/* ------------------------ Types ----------------------- */
export interface ActivityItem {
  id: number;
  img: string;
  title: string;
  date: string;
  description: string;
}

/* ------------------------ DATA ------------------------ */
export const ACTIVITY_DATA: ActivityItem[] = [
  {
    id: 1,
    img: activity1,
    title: '參與台北寵物論壇 爭取貓咪友善環境',
    date: '2023/12/26',
    description:
      '炎炎夏日的周六，我走進了台北寵物論壇，帶著一副貓耳髮箍，決定要全力宣傳「貓咪至上」的理念！我相信，我們的都市中，每一隻貓咪都應該有自己的 VIP 休憩空間。',
  },
  {
    id: 2,
    img: activity2,
    title: '帶著你的貓耳，來和我一起走！',
    date: '2023/12/26',
    description:
      '街上氣氛真的很棒，從小孩到大人，甚至有些狗狗朋友都帶著貓耳來找我握手，真的太可愛了！這次的活動不僅讓我看到大家的熱情，更加堅定了我推進「貓咪友善環境」政策的決心。',
  },
  {
    id: 3,
    img: activity3,
    title: '收容所模特兒大比拼！',
    date: '2023/12/20',
    description:
      '活動三消息內容：今天的收容所不再是一片寂靜。為了讓更多人認識到這裡的毛孩子，我們舉辦了一場前所未有的「模特兒走秀」！',
  },
];
