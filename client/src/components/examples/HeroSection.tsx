import HeroSection from '../HeroSection';
import avatarImage from '@assets/generated_images/Anime_profile_avatar_d7cc07e4.png';

export default function HeroSectionExample() {
  return (
    <HeroSection 
      name="SubaRya"
      introduction="我是一個開心的動漫宅"
      email="example@example.com"
      avatarUrl={avatarImage}
    />
  );
}
