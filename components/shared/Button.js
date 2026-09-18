const Button = ({ classname, children, onClick }) => {
    return (
        <div className='my-auto' onClick={onClick}>
            <style dangerouslySetInnerHTML={{__html: `
                @keyframes pulse-ring {
                    0% { transform: scale(1); opacity: 0.5; }
                    100% { transform: scale(1.15); opacity: 0; }
                }
                .btn-premium {
                    position: relative;
                    background: linear-gradient(135deg, #3b82f6, #4f46e5);
                    border-radius: 10px;
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.15), 0 0 20px rgba(59, 130, 246, 0.25);
                    color: white;
                    font-weight: 600;
                    letter-spacing: 0.02em;
                    transition: transform 150ms ease, filter 200ms ease, box-shadow 200ms ease;
                    outline: none;
                    cursor: pointer;
                    border: none;
                }
                .btn-premium::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.6);
                    opacity: 0;
                    z-index: -1;
                    pointer-events: none;
                }
                @media (prefers-reduced-motion: no-preference) {
                    .btn-premium:hover::before,
                    .btn-premium:focus-visible::before {
                        animation: pulse-ring 1.8s ease-out infinite;
                    }
                }
                .btn-premium::after {
                    content: '';
                    position: absolute;
                    inset: 0;
                    border-radius: inherit;
                    background: linear-gradient(120deg, transparent, rgba(255, 255, 255, 0.3), transparent);
                    background-size: 200% 100%;
                    background-position: -200% 0;
                    background-repeat: no-repeat;
                    z-index: 1;
                    pointer-events: none;
                }
                @media (prefers-reduced-motion: no-preference) {
                    .btn-premium:hover::after,
                    .btn-premium:focus-visible::after {
                        background-position: 200% 0;
                        transition: background-position 600ms ease;
                    }
                    .btn-premium:not(:hover):not(:focus-visible)::after {
                        transition: none;
                    }
                }
                .btn-premium:hover,
                .btn-premium:focus-visible {
                    filter: brightness(1.1);
                    transform: scale(1.03);
                    box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 25px rgba(59, 130, 246, 0.35);
                }
                .btn-premium:active {
                    transform: scale(0.97);
                    transition: transform 100ms;
                }
            `}} />
            <button className={`btn-premium px-10 py-2.5 ${classname || ''}`}>
                <span className="relative z-10">{children}</span>
            </button>
        </div>
    )
}

export default Button;