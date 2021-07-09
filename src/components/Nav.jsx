
let sortType="bubbleSort"
export const Nav = (props) => {
    return (
        <div className="nav">
        
        <div className="nav-left">
           
            <select name="" id="" onChange={(e)=>{
                if(props.prop.state.arrSize<5)
                {
                    alert("No Array")
                    return
                }
                sortType=e.target.value
            }}>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="insertionSort">Insertion Sort</option>
            </select>
            <button  onClick={(e)=>{
                 props.prop.clearAll(window)
                if(sortType==="bubbleSort"){
                 props.prop.bubbleSort(props.prop.state.list)
                }
                else  if(sortType==="selectionSort"){
                    props.prop.selectionSort(props.prop.state.list)
                   }
                else{
                    props.prop.insertionSort(props.prop.state.list)
                }
            }} >Sort</button>
           
    
    </div>
    <div className="nav-right">
    <input type="range" min="5" max="200" value={props.prop.state.arrSize} title="array size"   onChange={(e)=>{
        props.prop.setState({arrSize:e.target.value})
        props.prop.clearAll(window)
        props.prop.clickGen()
       }}/>
      
    <input title="graph size" type="range" min="1" max="10" value={props.prop.state.style} onChange={(e)=>{
        props.prop.setState({style:e.target.value})
    }}/>                        

    <button onClick={()=>{props.prop.clearAll(window)}} >Stop</button>
  
    <button onClick={props.prop.clickGen} >Generate Array</button>
    </div>
    </div>
    )
}
