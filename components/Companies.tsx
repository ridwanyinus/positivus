import { companies } from '@/lib/content/companies';
import InfiniteMovingCards from './ui/InfinityMovingCard';

const Companies = () => {
  return (
    <main className='padding-x py-3 sm:py-8 lg:py-10 xl:py-16 largesceen:py-20'>
      <div className='flex place-items-center'>
        <InfiniteMovingCards items={companies} />
      </div>
    </main>
  );
};

export default Companies;
