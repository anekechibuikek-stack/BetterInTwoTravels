import { Menu } from 'lucide-react';
import { Settings } from 'lucide-react';
import { CircleUser } from 'lucide-react';
import { Search } from 'lucide-react';

interface NavbarProps {
    toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
    return (
        <header className="h-20 bg-white-800  flex items-center px-2 ">
            <div className="flex items-center gap-4">
                <Menu
                    className="w-8 h-8 rounded-md hover:bg-blue-800/20 cursor-pointer text-black"
                    onClick={toggleSidebar}
                />
                <img src="/vite.svg" alt="vite" className="h-8 w-auto" />
                <h1 className="text-2xl font-bold">BetterInTwoTravels</h1>
                <div className="flex items-center gap-8 px-20">
                    <h1 className="text-sm cursor-pointer">Expeditions</h1>
                    <h1 className="text-sm cursor-pointer">Activities</h1>
                    <h1 className="text-sm cursor-pointer">Safety</h1>
                    <h1 className="text-sm cursor-pointer">Gear</h1>
                </div>
            </div>
            <div className="ml-auto flex items-center gap-4">
                <div className="relative">
                    <Search
                        className="
                        pointer-events-none
                        absolute
                        left-3
                        top-1/2
                        h-6
                        w-6
                        -translate-y-1/2
                        text-gray-500
                    "
                    />
                    <input
                        type="text"
                        placeholder="Search…"
                        className="
                        w-64
                        rounded-full
                        bg-gray-200
                        px-10
                        py-3
                        text-sm
                        text-black
                        placeholder-gray/60
                        outline-none
                        ring-0
                        focus:outline-none
                        focus:ring-2
                        focus:ring-blue-500
                        focus:ring-offset-0
                        focus-visible:ring-2
                        focus-visible:ring-blue-500
                        focus:bg-gray-100
                        "
                    ></input>
                </div>

                <Settings className="w-8 h-8 rounded-md hover:bg-blue-800/20 cursor-pointer text-black animate-spin" />
                <CircleUser className="w-8 h-8 rounded-md hover:bg-blue-800/20 cursor-pointer text-black" />
            </div>
        </header>
    );
};
export default Navbar;
