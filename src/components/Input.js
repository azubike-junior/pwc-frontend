const Input = ({placeholder, label, error}) => {
    return (
        <div className="flex flex-col p-4 pb-4 w-full">
            <label className="text-sm font-poppins text-capitalize flex pb-2">{label}</label>
            <input className="flex border border-darker-gray p-4 outline-none rounded" type="text" placeholder={placeholder} />
            {error && <span>{error}</span>}
        </div>
    )
}

export default Input