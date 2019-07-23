import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App  extends Component {

  constructor (props) {

    super(props)
    this.state = {

    board : Array(64).fill(<img src ="https://www.tattooforaweek.com/images/question-mark-temporary-tattoo-jb.jpg" width = "25px" height="60px"/>),
    data : Array.apply(null, Array(8)).map(function() { return Math.floor(Math.random() * 63 % 100); }),
    arr: [],
    obj:{},
    diamond_co_ordinate:[],
    deleteIndex:0,
    index_array:[],
    index_data:[],
    row:0,
    column:0,
    index_to_remove:-1
    
    }

    }
  

handleClick = (index)=>{



let index_row =  Math.ceil((index+1)/8);
let index_column = Math.floor(index % 8)+1;


let index_data = [];

let rrr;
let ccc;

// if(this.state.board[index] != "Diamond"){

// // index_data= [... this.state.index_data];

// // index_data.push(index);

// let data = this.state.board;
// data[this.state.index_to_remove] = "";

// this.setState({

//   index_to_remove:index,
//   board:data
// }) 

// }
console.log("index to remove " + this.state.index_to_remove);

this.setState({
  row:rrr,
  column:ccc
})

this.setState({

 index_data:index_data

})

let l = this.state.index_data.length;

console.log(this.state.index_data);

console.log("Length :" + l);

let Diamond = <img src="diamond.png"/>

let obj = {
   row:Math.ceil((index+1)/8),
   column :Math.floor(index % 8)+1
 }

//calculting co-ordinate


 let r = Math.ceil((index+1)/8);
 let cc = Math.floor(index % 8)+1;

 let arr = [];
 let nearest = [];
   

let diamond_co_ordinate = [];
let ob = {};


//finding the diamond co-ordinate

this.state.data.map( data=>{

  
  diamond_co_ordinate.push({
     
     row:Math.ceil((data+1)/8),
     column :Math.floor(data % 8)+1
  });

})



console.log(diamond_co_ordinate);

    let c = this.state.board;

    let data = this.state.data;

//finding Diamond

    let flag = data.find(  (element) =>{
      return element === index;
    })

   if(flag){

    arr.push(obj);
    c[index] = "Diamond";
   
    
   }

if(this.state.board[index] != "Diamond"){

// index_data= [... this.state.index_data];

// index_data.push(index);

let data = this.state.board;
data[this.state.index_to_remove] = "";

this.setState({

  index_to_remove:index,
  board:data
}) 

}

let position = [];

let distance = 100000;

let x_co = 0;
let y_co = 0;

//finding the minimum distance

let pos;

 diamond_co_ordinate.map( (data, key) =>{


    let x = Math.abs ( data.row - Math.ceil( (index+1)/8) );
    let y = Math.abs ( data.column  - (Math.floor(index%8) +1 ));

    let c = Math.abs(Math.sqrt( x*x + y*y));
     position.push(c);

     if(c < distance) {

       pos = key;
       distance = c;
       x_co = data.row;
       
       y_co = data.column;
     }


   })


//Deleting the one co-ordinate


   //console.log(diamond_co_ordinate.splice(pos, 1));

   console.log(pos);
   console.log(x_co, y_co)

   console.log(position);

   let final = this.state.board;

//arrows pointing 




if(  (Math.abs ( x_co - r ) < Math.abs(y_co - cc) ) || x_co === r )
{


  if(y_co - cc <  0)
  {
    if(final[index] != "Diamond"){
      final[index] = "left";
    }
    
    // else{
    //   for(var i = 0;i<l-1;i++ ){
    //     final[index_data[i]] = "";
    //    }
    // }
    
  }

  else{
    if(final[index] != "Diamond"){
      final[index] = "right";
    }
    // else{
    //    for(var i = 0;i<l-1;i++ ){

    //     final[index_data[i]] = "";
    //    }
    // }
  }
}

else{
  if(x_co - r > 0 ){

    if(final[index] != "Diamond"){
      final[index] = "UP";
    }
    // else{
    //   for(var i = 0;i<l-1;i++ ){

    //     final[index_data[i]] = "";
    //    }
    // }
  }
  else
  {
    if(final[index] != "Diamond"){
      final[index] = "Down";
    }
    // else{
    //   for(var i = 0;i<l-1;i++ ){
    //     final[index_data[i]] = "";
    //    }
    // }
  }
}

 
 
    this.setState({

      board:c,
      arr:arr,
      board:final,
      index_data:index_data
      
      
    })
  


  }

  render(){
    const Box = this.state.board.map( (box, index) => 

      <div className="box"  key = {index} onClick = { ()=> this.handleClick(index) }>{box}</div>)

      let r = Math.floor(Math.random() * 8);
      let c = Math.floor(Math.random() * 8);
    
      let count = 0;


  return (



    <div className="App">
     
   {<h2>Your Score:<h2> count}
     
     {this.state.board.map( item =>{
         item === "" ?count++ : null;
     })}

   <div className="container">
     


     <div className="board">
     {Box}

     </div>

   </div>

    </div>
  );
}
}

export default App;
