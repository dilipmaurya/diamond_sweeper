import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Icon} from 'antd'
class App  extends Component {

  constructor (props) {

    super(props)
    this.state = {

    board : Array(64).fill(<img src ="https://www.tattooforaweek.com/images/question-mark-temporary-tattoo-jb.jpg" width = "25px" height="60px"/>),
    data : Array.apply(null, Array(8)).map(function() { return Math.floor(Math.random() * 64); }),
    arr: [],
    obj:{},
    diamond_co_ordinate:[],
    deleteIndex:0,
    index_array:[],
    index_data:[],
    row:0,
    column:0,
    index_to_remove:-1, 
    count:0,
    totalScore:0,
    left: 0 ,
    right: 0,
    up: 0,
    down:0,
    count_diamond:0
    
    }

    }
  

handleClick = (index)=>{




console.log(this.state.data)

let index_row =  Math.ceil((index+1)/8);
let index_column = Math.floor(index % 8)+1;
console.log("index_row" + index_row , "index_column" +  index_column);

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

this.state.data.map( (data, index)=>{

  
  diamond_co_ordinate.push({
     key:index,
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
if(this.state.board[index] != "Diamond"){
data[this.state.index_to_remove] = "";
}

this.setState({

  index_to_remove:index,
  board:data
}) 


}

let position = [];

let distance = 100000;

let x_co;
let y_co;

//finding the minimum distance

let pos;

 diamond_co_ordinate.map( (data, key) =>{


    let x = Math.abs ( data.row - (Math.ceil( (index+1)/8)) );
    let y = Math.abs ( data.column  - (Math.floor(index%8) +1 ));

    let c = Math.sqrt( x*x + y*y);
     position.push(c);

     if(c <= distance) {

       pos = key;
       distance = c;
       x_co = data.row;
       y_co = data.column;
     }


   })


//Deleting the one co-ordinate


   //console.log(diamond_co_ordinate.splice(pos, 1));

   console.log("position is :" + pos);
   console.log(x_co, y_co)

   console.log(position);

   let final = this.state.board;

//arrows pointing 


let count_diamond = this.state.count_diamond;

if(  (Math.abs ( x_co - r ) < Math.abs(y_co - cc) ) || x_co === r )
{


  if(y_co - cc <  0)
  {
    if(final[index] != "Diamond"){
      final[index] = <Icon type = "arrow-left"/>;
    }
    
    else{
     final[index] = <Icon type = "sketch"/>
     count_diamond ++;
      let data = this.state.data;
      data.splice(pos, 1);
      this.setState({
        data:data
      })
    }
    
  }

  else{
             if(final[index] != "Diamond"){
            final[index] = <Icon type = "arrow-right"/>;
              }

           else{
             final[index] = <Icon type = "sketch"/>
             count_diamond++;
              let data = this.state.data;
              data.splice(pos, 1);
              this.setState({
              data:data
      })
    }
  }
}

else{

  if(x_co - r < 0 ){
    

    if(final[index] != "Diamond"){
      final[index] = <Icon type = "arrow-up"/>;
    }
    
    else{
     final[index] = <Icon type = "sketch"/>
     count_diamond++;
      let data = this.state.data;
      data.splice(pos, 1);
      this.setState({
        data:data
      })
    }

  }

  else
  {
    if(final[index] != "Diamond"){
      final[index] = <Icon type = "arrow-down"/>;

    }


    else{
     final[index] = <Icon type = "sketch"/>
     count_diamond++;
      let data = this.state.data;
      data.splice(pos, 1);
      this.setState({
        data:data
      })
    }
  }
}

 
 
    this.setState({

      board:c,
      arr:arr,
      board:final,
      index_data:index_data,
      count_diamond:count_diamond
      
      
    })

 let count = 0;

 this.state.board.map( item =>{
   if(item === ""){
     count++;
   }
 })
 this.setState({
   count:count
 })




// this.state.board.map( item =>{
//   if(item === "Diamond" ){
//     count_diamond++;
//   }
// })

console.log("count diamond is " + count_diamond);

if(count_diamond == 8){

  alert("Game Over");
 
  localStorage.setItem("count", JSON.stringify(this.state.count))

    const  count = localStorage.getItem("count")

   {console.log("Count value is as " + count)};

}

  }


  render(){

    const Box = this.state.board.map( (box, index) => 

      <div className="box"  key = {index} onClick = { ()=> this.handleClick(index) }>{box}</div>)

      let r = Math.floor(Math.random() * 8);
      let c = Math.floor(Math.random() * 8);
    
      let count = 0;
      let count_top_score=0;
       count_top_score = localStorage.getItem("count")


  return (



    <div className="App">


    
     {<h3> Total Score</h3>}
     {56 - this.state.count}

     <div className="container">
         <h3>Top Scorer </h3>
         
         {56 - count_top_score}
      </div>

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