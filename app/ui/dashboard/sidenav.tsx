import NavLinks from '@/app/ui/dashboard/nav-links';
import { PowerIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function SideNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 shadow-xl md:px-2">
      <Link
        className="mb-2 flex items-center justify-start rounded-md text-2xl font-bold text-white"
        href="/"
      >
        <Image
          alt="logo"
          src="/Logo.png"
          width={26}
          height={26}
          className="mr-3 bg-cover"
        />
        Dashdark X
      </Link>
      <div className="mt-5 flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md  md:block"></div>
        <form>
          <button className="hover:bg-black-700 flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md border-purple-400 p-3 text-sm font-medium text-gray-400 hover:border-l-4 hover:text-purple-400 md:flex-none md:justify-start md:p-2 md:px-3 ">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
        </form>
      </div>
    </div>
  );
}