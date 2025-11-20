import { 
  type User, 
  type InsertUser,
  type DiaryEntry,
  type InsertDiaryEntry,
  type Note,
  type InsertNote,
  type GalleryImage,
  type InsertGalleryImage,
  type Video,
  type InsertVideo,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getDiaryEntries(): Promise<DiaryEntry[]>;
  getDiaryEntry(id: string): Promise<DiaryEntry | undefined>;
  createDiaryEntry(entry: InsertDiaryEntry): Promise<DiaryEntry>;
  
  getNotes(): Promise<Note[]>;
  getNote(id: string): Promise<Note | undefined>;
  createNote(note: InsertNote): Promise<Note>;
  
  getGalleryImages(): Promise<GalleryImage[]>;
  getGalleryImage(id: string): Promise<GalleryImage | undefined>;
  createGalleryImage(image: InsertGalleryImage): Promise<GalleryImage>;
  
  getVideos(): Promise<Video[]>;
  getVideo(id: string): Promise<Video | undefined>;
  createVideo(video: InsertVideo): Promise<Video>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private diaryEntries: Map<string, DiaryEntry>;
  private notes: Map<string, Note>;
  private galleryImages: Map<string, GalleryImage>;
  private videos: Map<string, Video>;

  constructor() {
    this.users = new Map();
    this.diaryEntries = new Map();
    this.notes = new Map();
    this.galleryImages = new Map();
    this.videos = new Map();
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getDiaryEntries(): Promise<DiaryEntry[]> {
    return Array.from(this.diaryEntries.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getDiaryEntry(id: string): Promise<DiaryEntry | undefined> {
    return this.diaryEntries.get(id);
  }

  async createDiaryEntry(insertEntry: InsertDiaryEntry): Promise<DiaryEntry> {
    const id = randomUUID();
    const entry: DiaryEntry = { 
      ...insertEntry,
      mood: insertEntry.mood ?? null,
      id,
      createdAt: new Date(),
    };
    this.diaryEntries.set(id, entry);
    return entry;
  }

  async getNotes(): Promise<Note[]> {
    return Array.from(this.notes.values()).sort((a, b) => 
      new Date(b.date).getTime() - new Date(a.date).getTime()
    );
  }

  async getNote(id: string): Promise<Note | undefined> {
    return this.notes.get(id);
  }

  async createNote(insertNote: InsertNote): Promise<Note> {
    const id = randomUUID();
    const note: Note = { 
      ...insertNote,
      tags: insertNote.tags || [],
      id,
      createdAt: new Date(),
    };
    this.notes.set(id, note);
    return note;
  }

  async getGalleryImages(): Promise<GalleryImage[]> {
    return Array.from(this.galleryImages.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getGalleryImage(id: string): Promise<GalleryImage | undefined> {
    return this.galleryImages.get(id);
  }

  async createGalleryImage(insertImage: InsertGalleryImage): Promise<GalleryImage> {
    const id = randomUUID();
    const image: GalleryImage = { 
      ...insertImage,
      description: insertImage.description ?? null,
      id,
      createdAt: new Date(),
    };
    this.galleryImages.set(id, image);
    return image;
  }

  async getVideos(): Promise<Video[]> {
    return Array.from(this.videos.values()).sort((a, b) => 
      b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getVideo(id: string): Promise<Video | undefined> {
    return this.videos.get(id);
  }

  async createVideo(insertVideo: InsertVideo): Promise<Video> {
    const id = randomUUID();
    const video: Video = { 
      ...insertVideo,
      thumbnailUrl: insertVideo.thumbnailUrl ?? null,
      embedUrl: insertVideo.embedUrl ?? null,
      duration: insertVideo.duration ?? null,
      category: insertVideo.category ?? null,
      id,
      createdAt: new Date(),
    };
    this.videos.set(id, video);
    return video;
  }
}

export const storage = new MemStorage();
