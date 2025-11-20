import NotesSection from '../NotesSection';

export default function NotesSectionExample() {
  const mockNotes = [
    {
      id: "1",
      title: "日語學習筆記 - 五十音",
      category: "語言學習",
      tags: ["日語", "基礎", "五十音"],
      preview: "今天開始學習日語的基礎 - 五十音。平假名和片假名的記憶方法，以及常用的發音規則...",
      date: "2024-11-06"
    },
    {
      id: "2",
      title: "動畫製作流程",
      category: "專業知識",
      tags: ["動畫", "製作", "流程"],
      preview: "了解了動畫製作的完整流程，從企劃、分鏡、原畫到後期製作。每個環節都很重要，需要團隊的密切配合...",
      date: "2024-11-04"
    },
    {
      id: "3",
      title: "繪畫技巧 - 人物比例",
      category: "繪畫技巧",
      tags: ["繪畫", "人物", "比例"],
      preview: "學習了人物繪畫的基本比例，包括頭身比、五官位置等。通過不斷練習來掌握這些基礎知識...",
      date: "2024-11-02"
    },
    {
      id: "4",
      title: "推薦動漫清單",
      category: "娛樂",
      tags: ["動漫", "推薦", "清單"],
      preview: "整理了最近看過的優秀動漫作品，包括劇情、畫風、配樂等各方面的評價...",
      date: "2024-10-30"
    }
  ];

  return <NotesSection notes={mockNotes} />;
}
