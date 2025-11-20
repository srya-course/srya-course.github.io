import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import DiarySection from "@/components/DiarySection";
import GallerySection from "@/components/GallerySection";
import NotesSection from "@/components/NotesSection";
import VideoSection from "@/components/VideoSection";
import Footer from "@/components/Footer";
import AddDiaryForm from "@/components/AddDiaryForm";
import AddNoteForm from "@/components/AddNoteForm";
import AddGalleryImageForm from "@/components/AddGalleryImageForm";
import AddVideoForm from "@/components/AddVideoForm";

import type { DiaryEntry, Note, GalleryImage, Video } from "@shared/schema";

import avatarImage from '@assets/generated_images/Anime_profile_avatar_d7cc07e4.png';
import cherryBlossom from '@assets/generated_images/Cherry_blossom_landscape_a832bd8f.png';
import studyScene from '@assets/generated_images/Study_scene_illustration_12bedbb6.png';
import citySunset from '@assets/generated_images/City_sunset_scene_84c37eb6.png';
import kawaiiBento from '@assets/generated_images/Kawaii_bento_illustration_2dd3e007.png';
import starryNight from '@assets/generated_images/Starry_night_background_1f964612.png';

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const handleNavigate = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === "home") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const { data: diaryEntries = [] } = useQuery<DiaryEntry[]>({
    queryKey: ["/api/diary-entries"],
  });

  const { data: galleryImages = [] } = useQuery<GalleryImage[]>({
    queryKey: ["/api/gallery-images"],
  });

  const { data: notes = [] } = useQuery<Note[]>({
    queryKey: ["/api/notes"],
  });

  const { data: videos = [] } = useQuery<Video[]>({
    queryKey: ["/api/videos"],
  });

  const defaultGalleryImages = [
    {
      id: "default-1",
      url: cherryBlossom,
      title: "櫻花之美",
      description: "春天的櫻花盛開，美不勝收",
      createdAt: new Date(),
    },
    {
      id: "default-2",
      url: studyScene,
      title: "學習時光",
      description: "認真學習的每一天",
      createdAt: new Date(),
    },
    {
      id: "default-3",
      url: citySunset,
      title: "城市夕陽",
      description: "城市的黃昏時分",
      createdAt: new Date(),
    },
    {
      id: "default-4",
      url: kawaiiBento,
      title: "可愛便當",
      description: "美味的便當料理",
      createdAt: new Date(),
    },
    {
      id: "default-5",
      url: starryNight,
      title: "星空夜晚",
      description: "美麗的星空夜景",
      createdAt: new Date(),
    },
    {
      id: "default-6",
      url: avatarImage,
      title: "角色設計",
      description: "可愛的角色插畫",
      createdAt: new Date(),
    }
  ];

  const displayGalleryImages = galleryImages.length > 0 ? galleryImages : defaultGalleryImages;

  return (
    <div className="min-h-screen bg-background">
      <Navigation activeSection={activeSection} onNavigate={handleNavigate} />
      
      <main>
        <HeroSection 
          name="小明"
          introduction="我是一個開心的動漫宅"
          email="example@example.com"
          avatarUrl={avatarImage}
        />
        
        <DiarySection entries={diaryEntries} addButton={<AddDiaryForm />} />
        <GallerySection images={displayGalleryImages} addButton={<AddGalleryImageForm />} />
        <NotesSection notes={notes} addButton={<AddNoteForm />} />
        <VideoSection videos={videos} addButton={<AddVideoForm />} />
      </main>

      <Footer name="小明" email="example@example.com" />
    </div>
  );
}
