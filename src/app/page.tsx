import DetailsBlock from './compositions/blocks/DetailsBlock';
import HeroBlock from './compositions/blocks/HeroBlock';
import OSABlock from './compositions/blocks/OSABlock';
import ToastmasterBlock from './compositions/blocks/ToastmasterBlock';
import ChildrenBlock from './compositions/blocks/ChildrenBlock';
import TextImageBlock from './compositions/blocks/TextImageBlock';
import ClothesBlock from './compositions/blocks/ClothesBlock';
import GiftBlock from './compositions/blocks/GiftBlock';

export default function Home() {
  return (
    // <div className='flex min-h-screen w-full'>
    <main className='flex min-h-screen w-full flex-col'>
      <HeroBlock />
      <div className='bg-background text-on-background'>
        <TextImageBlock />
        <DetailsBlock />
      </div>
      <div className='bg-secondary'>
        <ClothesBlock />
        <ChildrenBlock />
        <GiftBlock />
      </div>
      <div className='bg-background text-on-background'>
        <ToastmasterBlock />
      </div>
      <OSABlock />
    </main>
    // </div>
  );
}

//OSA datum + knapp
//presentationer toastmaster
// (kvällens personal?)
//Historia, versionshantering
