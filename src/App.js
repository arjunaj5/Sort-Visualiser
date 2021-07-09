import { Component } from "react";
import { Nav } from "./components/Nav";
        class App extends Component{
            constructor(props){
                super(props)
                this.state={list:[],index:[-1,-1],sortedIndex:[],arrSize:4,style:5,}
                
                this.clickGen=this.clickGen.bind(this)
                this.genList=this.genList.bind(this)// to use this.state in clickGen

          
            }
             genList(){
                let newList=[]
                for(let i=0;i<this.state.arrSize;i++){
                    newList.push(Math.floor(Math.random() * 500))
                }
               return newList
            }
            
             clearAll(windowObject) {
                var id = Math.max(
                  windowObject.setInterval(noop, 1000),
                  windowObject.setTimeout(noop, 1000)
                );
              
                while (id--) {
                  windowObject.clearTimeout(id);
                  windowObject.clearInterval(id);
                }
              
                function noop(){}
              }
            clickGen(){
                
               let list= this.genList()
               
                this.setState({list,index:[-1,-1],sortedIndex:[-1,-1]})
            }
            renderMethod(newArray,newIndexArray,arrayOfSortedIndex){
                let len=newArray.length
                
               newArray.push(newArray[len-1])
                
                let temp=[...newIndexArray,[-1,-1]]
                let temp2=[...arrayOfSortedIndex]
               

                for(let i=0;i<len+1;i++){
                
                    setTimeout(() => {
                        this.setState({list:newArray[i],index:temp[i],sortedIndex:temp2[i]})
                    }, (i+1)*10);
                }
               
            }
            bubbleSort(arr){
                let newArray=[]
                let sortedIndex=[]
                let arrayOfSortedIndex=[]
                let newIndexArray=[] //for index of comparing elements
                let len=arr.length
                for(let i=0;i<len-1;i++){
                    for(let j=0;j<len-1-i;j++)
                    {
                        if(arr[j]>arr[j+1])
                        {
                          
                            let temp=arr[j];
                            arr[j]=arr[j+1]
                            arr[j+1]=temp
                        
                           
                        }
                        let a=[...arr]
                            newArray.push(a)
                            newIndexArray.push([j,j+1])
                            if(j===len-2-i){
                                sortedIndex.push(j+1)
                                arrayOfSortedIndex.push([...sortedIndex])
                            }
                            else{
                                arrayOfSortedIndex.push([...sortedIndex])
                            }
                    
                }}
                arrayOfSortedIndex.push([...sortedIndex,0])
                this.renderMethod(newArray,newIndexArray,arrayOfSortedIndex)
            }
             selectionSort(inputArr) { 
                let sortedIndex=[]
                let arrayOfSortedIndex=[]
                let newIndexArray=[]
                let n = inputArr.length;
                    let newArray=[]
                for(let i = 0; i < n; i++) {
                    sortedIndex.push(i-1)
                    // Finding the smallest number in the subarray
                    let min = i;
                    for(let j = i+1; j < n; j++){
                        
                        arrayOfSortedIndex.push([...sortedIndex])
                        let a=[...inputArr]
                        newArray.push(a)
                        newIndexArray.push([min,j])
                        if(inputArr[j] < inputArr[min]) {
                            min=j; 
                        }
                     }
                    
                     if (min !== i) {
                         // Swapping the elements
                         let tmp = inputArr[i]; 
                         inputArr[i] = inputArr[min];
                         inputArr[min] = tmp;     
                    }
                }
               arrayOfSortedIndex.push([...sortedIndex,n-1])
                this.renderMethod(newArray,newIndexArray,arrayOfSortedIndex)
            }

             insertionSort(inputArr) {
                let sortedIndex=[]
                let arrayOfSortedIndex=[]
                let newArray=[]
                let newIndexArray=[]
                let n = inputArr.length;
                    for (let i = 1; i < n; i++) {
                        // Choosing the first element in our unsorted subarray
                        let current = inputArr[i];
                        // The last element of our sorted subarray
                        let j = i-1; 
                        while ((j > -1) && (current < inputArr[j])) {
                            let a=[...inputArr]
                        newArray.push(a)
                        newIndexArray.push([i,j])
                        sortedIndex.push(j)
                        arrayOfSortedIndex.push([...sortedIndex])
                            inputArr[j+1] = inputArr[j];
                            j--;
                        }
                        inputArr[j+1] = current;
                    }
                    arrayOfSortedIndex.push([...sortedIndex,n-1])
                    this.renderMethod(newArray,newIndexArray,arrayOfSortedIndex)
            }
            

            render(){
               
                return(
                    <div className="App">
                      <Nav prop={this}/>
                        <div className="graph">
                         
                        {this.state.list.map((listItem,index)=>{
                            let bg=""
                             if( this.state.index[0]===index||this.state.index[1]===index){
                                bg="red"
                            }
                            else if(this.state.sortedIndex.indexOf(index)!==-1){
                                bg="rgb(72, 224, 34)"
                            }
                           
                            else{
                                bg="rgb(34, 186, 224)"
                            }
                            return (<div className="elements" style={{height:listItem/2,backgroundColor:bg,width:this.state.style+"px"}} key={listItem[index] }>
                            <span>{listItem}</span>
                            
                        </div>)})}
                        </div>
                    
                    </div>
                    
                )
            }
        }
        export default App