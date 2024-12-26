'use client';

import Image from 'next/image';
import { cn } from '@/lib/utils';

interface HomeCardProps {
  className?: string;
  img: string;
  title: string;
  description: string;
  handleClick?: () => void;
}

const HomeCard = ({ className, img, title, description, handleClick }: HomeCardProps) => {
  return (
    <section
      className={cn(
        'bg-[#2C2C3B] px-5 py-7 flex flex-col justify-between w-full max-w-[300px] min-h-[280px] rounded-[20px] cursor-pointer shadow-lg hover:bg-[#252A41] transition-all duration-300 transform hover:scale-105',
        className
      )}
      onClick={handleClick}
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-[18px] bg-[#1E1E2A] glassmorphism">
        <Image src={img} alt="card icon" width={35} height={35} />
      </div>

      <div className="flex flex-col gap-3 mt-4 text-gray-300">
        <h1 className="text-xl font-semibold text-gray-100">{title}</h1>
        <p className="text-base font-light">{description}</p>
      </div>
    </section>
  );
};

export default HomeCard;
