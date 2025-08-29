import AboutHero from '@/components/AboutHero';
import CompanyStory from '@/components/CompanyStory';
import MissionVision from '@/components/Mission&Vision';
import OurValues from '@/components/OurValues';
import Stats from '@/components/Stats';

const page = () => {
  return (
    <section>
      <AboutHero />
      <Stats />
      <CompanyStory />
      <OurValues />
      <MissionVision />
    </section>
  );
}

export default page