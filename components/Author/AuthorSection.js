import React from 'react';
import AuthorCard from './AuthorCards';

const AuthorSection = ({ author, coAuthor }) => {
    return (
        <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
                <h2 className="text-2xl font-bold text-blue-400">
                    {coAuthor ? 'Authors' : 'Author'}
                </h2>
            </div>

            <div className={`grid gap-6 ${coAuthor ? 'md:grid-cols-2' : 'md:grid-cols-1'}`}>
                <AuthorCard author={author} />
                {coAuthor && <AuthorCard author={coAuthor} isCoAuthor={true} />}
            </div>
        </section>
    );
};

export default AuthorSection;