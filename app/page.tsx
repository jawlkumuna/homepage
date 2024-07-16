import Image from "next/image";
import {
  BoltIcon,
  MoonIcon,
  NewspaperIcon,
  UserCircleIcon,
  PaperAirplaneIcon
} from '@heroicons/react/24/solid'
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start py-12 px-10 lg:px-80">
      <ul className="flex flex-row pb-5">
        <li className="px-5 py-2 rounded-lg text-slate-100 hover:bg-slate-900">
          <Link href="/">Home</Link>
        </li>
        <li className="px-5 py-2 rounded-lg text-slate-400 hover:bg-slate-900">
          <Link href="/">Posts</Link>
        </li>
        <li className="px-5 py-2 rounded-lg text-slate-400 hover:bg-slate-900">
          <Link href="/gallery">Gallery</Link>
        </li>
        <li className="px-5 py-2 rounded-lg text-slate-400 hover:bg-slate-900">
          <Link href="/">Contact</Link>
        </li>
        <li className="px-5 py-2 rounded-lg text-slate-400 hover:bg-slate-900">
          <Link href="/">About</Link>
        </li>
      </ul>
      <div className="w-full flex flex:col lg:flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="text-left font-bold text-5xl">wubwub <BoltIcon className="inline size-12 text-yellow-200 hover:text-yellow-400" /></h1>
          <p className="text-xl text-slate-300">making great stuff</p>
        </div>
        <MoonIcon className="size-12 text-blue-400 hover:text-blue-500" />
      </div>

      <div className="grid grid-cols-3">
        <div className="flex flex-col ring-2 rounded-lg p-7 m-3">
          <UserCircleIcon className="inline size-12 text-yellow-200 mb-2" />
          <h2 className="text-2xl font-bold">About</h2>
          <p className="text-slate-300">I am a web developer and I make cool stuff</p>
        </div>
        <div className="flex flex-col ring-2 rounded-lg p-7 m-3">
          <NewspaperIcon className="inline size-12 text-red-400 mb-2" />
          <h2 className="text-2xl font-bold">Projects</h2>
          <p className="text-slate-300">I have made a lot of projects and you can see them in the gallery</p>
        </div>
        <div className="flex flex-col ring-2 rounded-lg p-7 m-3">
        <PaperAirplaneIcon className="inline size-12 text-green-300 mb-2" />
          <h2 className="text-2xl font-bold">Contact</h2>
          <p className="text-slate-300">You cannot me at the moment. Sorry about that.</p>
        </div>
      </div>

      <footer className="mt-auto">
        2024 - wubwub
      </footer>
    </main>
  );
}
