import VideoSection from '../VideoSection';
import starryNight from '@assets/generated_images/Starry_night_background_1f964612.png';
import citySunset from '@assets/generated_images/City_sunset_scene_84c37eb6.png';
import studyScene from '@assets/generated_images/Study_scene_illustration_12bedbb6.png';
import cherryBlossom from '@assets/generated_images/Cherry_blossom_landscape_a832bd8f.png';

export default function VideoSectionExample() {
  const mockVideos = [
    {
      id: "1",
      title: "我的動畫製作過程分享",
      description: "分享我從構思到完成一個動畫短片的完整過程，包括分鏡、原畫、上色等各個環節。",
      thumbnailUrl: starryNight,
      duration: "15:32",
      category: "教學"
    },
    {
      id: "2",
      title: "日本旅遊 Vlog - 東京篇",
      description: "記錄了我在東京的旅遊經歷，包括秋葉原、涉谷、淺草等著名景點。",
      thumbnailUrl: citySunset,
      duration: "22:15",
      category: "Vlog"
    },
    {
      id: "3",
      title: "繪畫教學 - 如何畫出可愛的角色",
      description: "從基礎的線條開始，一步步教大家如何繪製可愛的動漫角色，適合初學者。",
      thumbnailUrl: studyScene,
      duration: "18:40",
      category: "教學"
    },
    {
      id: "4",
      title: "春天的櫻花延時攝影",
      description: "用延時攝影記錄櫻花從含苞到盛開的美麗過程，配上舒緩的音樂。",
      thumbnailUrl: cherryBlossom,
      duration: "5:20",
      category: "風景"
    }
  ];

  return <VideoSection videos={mockVideos} />;
}
