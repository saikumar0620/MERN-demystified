
const PrimaryButton = (props) => {
    // console.log(props);
  return (
    // <button type={props?.type==="submit"? "submit":"button"} className="bg-rose-500 px-2 py-3 text-white rounded-2xl" onClick={props.onClick}>
    //     {props.children}
    // </button>


    <button 
    type={props?.type === "submit" ? "submit" : "button"} 
    className="
        relative group overflow-hidden
        bg-rose-500 hover:bg-rose-600 
        text-white font-semibold
        px-6 py-3 rounded-2xl
        shadow-lg shadow-rose-500/30
        hover:shadow-rose-500/50
        transform transition-all duration-200
        hover:-translate-y-1 active:scale-95
        focus:outline-none focus:ring-4 focus:ring-rose-200
        flex items-center justify-center gap-2
    " 
    onClick={props.onClick}
>
    <span className="relative z-10 flex items-center gap-2">
        {props.children}
    </span>
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
</button>
  )
}

export default PrimaryButton;


