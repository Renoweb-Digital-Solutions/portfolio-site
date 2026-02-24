export const ImagePlaceholder = ({ caption, tint = "red" }) => {
    const colors = {
        red: { border: "border-red-900/40", bg: "from-gray-900 to-gray-950", icon: "text-red-900/50", label: "text-red-900/60" },
        blue: { border: "border-blue-900/40", bg: "from-blue-950/20 to-gray-950", icon: "text-blue-900/50", label: "text-blue-900/60" },
    };
    const c = colors[tint];
    return (
        <div className={`w-full flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${c.bg} border-2 border-dashed ${c.border} rounded-lg py-16 px-6`}>
            <svg className={`w-10 h-10 ${c.icon}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <p className={`text-sm font-medium ${c.label}`}>Screenshot Placeholder</p>
            {caption && <p className="text-gray-600 text-xs text-center max-w-xs">{caption}</p>}
        </div>
    );
};