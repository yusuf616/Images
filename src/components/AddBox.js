

export const AddBox=({
    children,
    className='',
    style={},
    onClick=()=>{},
    disabled=false
})=>{
    const ComponentStyle={...{width:'100px',height:'100px',display:'flex',justifyContent:'center',alignItems:'center'},...style}
    const ComponentClassName=" border rounded "+className
    console.log(ComponentClassName);
    return <div className={ComponentClassName} style={ComponentStyle}>
        <button disabled={disabled} style={{width:'100%',height:'100%',border:'none'}} onClick={onClick}>
            {children||<>Add</>}
        </button>
    </div>
}