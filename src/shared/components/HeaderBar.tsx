import { Button } from "./button";
import GiphyLogo from "../../../public/gifHunt_logo.svg";

export function HeaderBar() {
  return (
    <div
      className="bg-[#f6f6f6]  text-black"
    >
      <div className="mx-auto max-w-7xl px-3 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between py-15">
          <div className="flex flex-1 items-center justify-center ">
            <a href="/" className="flex shrink-0 items-center gap-1">
              <img src={GiphyLogo} alt="GifHunt Logo" />
              {/* <ScanSearch className="size-6" />
            <p className="uppercase text-2xl font-bold">giphy app</p> */}
            </a>
            <div className="ml-auto">
              <div className="flex space-x-4">
                <Button text="Buscar" textSize="md" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
