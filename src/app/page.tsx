import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="grid grid-cols-5 grid-rows-[repeat(3,minmax(4rem,12rem))] [&>*]:p-1 [&>*]:border-b-7 [&>*]:border-primary w-full [&>*]:grid [&>*]:place-items-center font-inter">
        <div className="col-span-full row-span-2">
          <div className="max-w-7xl mx-auto place-items-center">
            <h1 className="title-css">Welcome</h1>
            <p className="text-secondary">Alexander Delisle's page</p>
          </div>
        </div>
        <div className="col-span-2 hover:backdrop-brightness-95">
          <div className="max-w-7xl mx-auto">
            <Button>
              <Link href="/blog">Go To Blog</Link>
            </Button>
          </div>
        </div>
        <div>
          <h1>test</h1>
        </div>
        <div className="col-span-2">
          <h1>test</h1>
        </div>
      </div>
    </>
  );
}
