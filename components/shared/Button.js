const Button = ({ classname, children, onClick }) => {
    return (
        <div className='my-auto' onClick={onClick}>
            <button className={`bg-[#003FB9] px-10 py-2 rounded-xl border-3 border-[#3877F0]/60 hover:bg-[#3877F0] hover:border-[#003FB9] opacity-100 ${classname}`}>{children}</button>
        </div>
    )
}

export default Button