import AboutHero from '@/components/AboutHero';
import CompanyStory from '@/components/CompanyStory';
import OurValues from '@/components/OurValues';
import Stats from '@/components/Stats';

const page = () => {
  return (
    <section>
      <AboutHero />
      <Stats />
      <CompanyStory />
      <OurValues />
    </section>
  );
}

export default page