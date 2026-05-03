import Image from 'next/image';

const AuthorCard = ({ author, isCoAuthor = false }) => {
    return (
        <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-blue-600/50 transition-all duration-300 group">
            <div className="flex items-start gap-4">
                {/* Author Avatar */}
                <div className="flex-shrink-0">
                    <div className="relative">
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-600/30 flex items-center justify-center overflow-hidden group-hover:border-blue-600/50 transition">
                            {author.image ? (
                                <Image
                                    src={author.image}
                                    alt={author.name}
                                    width={64}
                                    height={64}
                                    className="w-full h-full object-cover"
                                    unoptimized
                                />
                            ) : (
                                <span className="text-2xl font-bold text-blue-400">
                                    {author.name.charAt(0)}
                                </span>
                            )}
                        </div>
                        {/* Active indicator */}
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900"></div>
                    </div>
                </div>

                {/* Author Info */}
                <div className="flex-grow">
                    <div className="mb-2">
                        {isCoAuthor && (
                            <span className="inline-block px-2 py-0.5 bg-blue-600/20 text-blue-400 rounded text-xs font-medium border border-blue-600/30 mb-2">
                                Co-Author
                            </span>
                        )}
                        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                            {author.name}
                        </h3>
                        <p className="text-sm text-gray-400">{author.role}</p>
                    </div>

                    <p className="text-sm text-gray-300 leading-relaxed">
                        {author.bio}
                    </p>

                    {/* Social Links */}
                    {author.social && (
                        <div className="flex gap-3 mt-4">
                            {author.social.linkedin && (
                                <a
                                    href={author.social.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M4.5 3C3.67157 3 3 3.67157 3 4.5V15.5C3 16.3284 3.67157 17 4.5 17H15.5C16.3284 17 17 16.3284 17 15.5V4.5C17 3.67157 16.3284 3 15.5 3H4.5ZM8 8V14H6V8H8ZM8 6C8 6.55228 7.55228 7 7 7C6.44772 7 6 6.55228 6 6C6 5.44772 6.44772 5 7 5C7.55228 5 8 5.44772 8 6ZM14 13.5V14H12V11C12 10.4477 11.5523 10 11 10C10.4477 10 10 10.4477 10 11V14H8V8H10V8.5C10.3137 8.08839 10.8324 7.85714 11.4286 7.85714C12.5964 7.85714 13.5 8.76071 13.5 9.92857V13.5H14Z" />
                                    </svg>
                                </a>
                            )}
                            {author.social.twitter && (
                                <a
                                    href={author.social.twitter}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-blue-400 transition"
                                    aria-label="Twitter"
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                        <path d="M11.3214 8.93666L16.4919 3.05566H15.2667L10.7772 8.16205L7.1914 3.05566H3.05566L8.47803 10.7774L3.05566 16.9446H4.28097L9.022 11.552L12.8088 16.9446H16.9446L11.3211 8.93666H11.3214ZM9.64322 10.8455L9.09382 10.0765L4.72246 3.95821H6.60445L10.1322 8.8959L10.6816 9.66481L15.2672 16.083H13.3852L9.64322 10.8458V10.8455Z" />
                                    </svg>
                                </a>
                            )}
                            {author.social.email && (
                                <a
                                    href={`mailto:${author.social.email}`}
                                    className="text-gray-400 hover:text-blue-400 transition"
                                    aria-label="Email"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </a>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AuthorCard;