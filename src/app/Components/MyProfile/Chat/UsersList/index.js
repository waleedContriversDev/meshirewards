export default function UsersList() {
    return (
        <div className="flex flex-col items-start justify-start p-2">
            <div className="flex items-center mb-2 w-full">
                <input
                    type="text"
                    className="w-full flex-grow border border-gray-300 rounded p-2  text-xs"
                    placeholder="Search..."
                />
            </div>

            <div className="flex justify-start items-center border rounded-lg border-slate-300 py-4 px-6 mt-2 w-full">
                <span className="text-lg font-bold">Alana Brown</span>
            </div>

            <div className="flex justify-start items-center border rounded-lg border-slate-300 py-4 px-6 mt-2 w-full">
                <span className="text-lg font-bold">Team #1</span>
            </div>

            <div className="flex justify-start items-center border rounded-lg border-slate-300 py-4 px-6 mt-2 w-full">
                <span className="text-lg font-bold">Team #2</span>
            </div>
        </div>
    );
}