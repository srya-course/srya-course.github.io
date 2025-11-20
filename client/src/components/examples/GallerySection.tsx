import GallerySection from '../GallerySection';
import cherryBlossom from '@assets/generated_images/Cherry_blossom_landscape_a832bd8f.png';
import studyScene from '@assets/generated_images/Study_scene_illustration_12bedbb6.png';
import citySunset from '@assets/generated_images/City_sunset_scene_84c37eb6.png';
import kawaiiBento from '@assets/generated_images/Kawaii_bento_illustration_2dd3e007.png';
import starryNight from '@assets/generated_images/Starry_night_background_1f964612.png';
import avatar from '@assets/generated_images/Anime_profile_avatar_d7cc07e4.png';

export default function GallerySectionExample() {
  const mockImages = [
    {
      id: "1",
      url: cherryBlossom,
      title: "櫻花之美",
      description: "春天的櫻花盛開，美不勝收"
    },
    {
      id: "2",
      url: studyScene,
      title: "學習時光",
      description: "認真學習的每一天"
    },
    {
      id: "3",
      url: citySunset,
      title: "城市夕陽",
      description: "城市的黃昏時分"
    },
    {
      id: "4",
      url: kawaiiBento,
      title: "可愛便當",
      description: "美味的便當料理"
    },
    {
      id: "5",
      url: starryNight,
      title: "星空夜晚",
      description: "美麗的星空夜景"
    },
    {
      id: "6",
      url: avatar,
      title: "角色設計",
      description: "可愛的角色插畫"
    }
  ];

  return <GallerySection images={mockImages} />;
}
