import AboutHero from '@/components/AboutHero';
import CompanyStory from '@/components/CompanyStory';
import Stats from '@/components/Stats';

const page = () => {
  return (
    <section>
      <AboutHero />
      <Stats />
      <CompanyStory />
    </section>
  );
}

export default page