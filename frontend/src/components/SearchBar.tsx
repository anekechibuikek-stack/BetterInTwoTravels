import { MapPin } from 'lucide-react';
import { CalendarDays } from 'lucide-react';
import { Users } from 'lucide-react';

const SearchBar = () => {
    return (
        <div className='flex flex-row  w-full rounded-3xl'>
            <div className=" relative flex-1">
                <MapPin
                    className="
                        pointer-events-none
                        absolute
                        left-3
                        top-1/2
                        h-8
                        w-8
                        -translate-y-1/2
                        text-yellow-600
                    "
                />
                <input
                    type="text"
                    placeholder="Where to next?"
                    className="
                        w-full
                        h-15
                        bg-white-300
                        px-15
                        py-3
                        text-lg
                        text-black
                        placeholder-gray/60
                        outline-0
                        ring-0
                        focus:outline-none

                        "
                ></input>
            </div>
            <div className="relative flex-1">
                <CalendarDays
                    className="
                        pointer-events-none
                        absolute
                        left-3
                        top-1/2
                        h-8
                        w-8
                        -translate-y-1/2
                        text-yellow-600
                    "
                />
                <input
                    type="text"
                    placeholder="Dates"
                    className="
                        w-full
                        h-15
                        bg-white-300
                        px-15
                        py-3
                        text-lg
                        text-black
                        placeholder-gray/60
                        outline-0
                        ring-0
                        focus:outline-none

                        "
                ></input>
            </div>
            <div className="relative flex-1">
                <Users
                    className="
                        pointer-events-none
                        absolute
                        left-3
                        top-1/2
                        h-8
                        w-8
                        -translate-y-1/2
                        text-yellow-600
                    "
                />
                <button
                    className="
                      absolute
                      w-40
                      right-3
                      top-1/2
                      -translate-y-1/2
                      bg-blue-500
                      hover:bg-blue-600
                      text-white
                      px-6
                      py-3
                      rounded-2xl
                      shadow
                      transition
                      duration-200
                    "
                >
                    Search
                </button>
                <input
                    type="text"
                    placeholder="Travelers"
                    className="
                        w-full
                        h-15
                        bg-white-300
                        px-15
                        py-3
                        text-lg
                        text-black
                        placeholder-gray/60
                        outline-0
                        ring-0
                        focus:outline-none

                        "
                ></input>
            </div>
        </div>
    );
}
export default SearchBar;
