import DiarySection from '../DiarySection';

export default function DiarySectionExample() {
  const mockEntries = [
    {
      id: "1",
      title: "今天看了超讚的動漫",
      date: "2024-11-07",
      preview: "今天終於把心心念念的新番看完了！劇情真的太精彩了，尤其是最後一集的大反轉，完全沒想到會這樣發展。主角的成長歷程讓我很有共鳴...",
      mood: "開心"
    },
    {
      id: "2", 
      title: "完成了新的畫作",
      date: "2024-11-05",
      preview: "經過一週的努力，終於完成了最新的插畫作品。這次嘗試了新的上色技法，效果比預期的還要好。雖然過程中遇到很多困難，但最後的成果很滿意...",
      mood: "充實"
    },
    {
      id: "3",
      title: "參加了動漫展",
      date: "2024-11-01", 
      preview: "週末去參加了動漫展，見到了好多喜歡的角色扮演者，還買了很多周邊商品。最開心的是遇到了同樣喜歡這部作品的朋友，我們聊了好久...",
      mood: "興奮"
    }
  ];

  return <DiarySection entries={mockEntries} />;
}
