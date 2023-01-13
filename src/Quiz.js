import './App.css';
import React, { useState ,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import item from "./data/data"
const  Quiz = ()=> {
 
    const  [from,setFrom] = useState(0);
    const  [to,setTo] = useState(2);
    const [items,setItems] = useState(item.slice(0,30));
    const [renderData,setRenderData] = useState([]);
    const [correctAnswer,setCorrectAnswer] = useState();
    const [myAnswers,setMyAnswers] = useState([]);
    const [show,setShow] = useState(false)
    const [mark,setMyMark] = useState(0)
    
    let ans=[]
  
  useEffect(()=>{
    let correctAns=[];
    items.map((it)=>(
      correctAns.push(it.cA)
  
    ))
    // console.log("correctAnswer" ,correctAns)
    setCorrectAnswer(correctAns)
  },[])
  
    const endQuiz = ()=>{
      let mark = 0;
      for(let i=0 ; i<correctAnswer.length;i++){
        if( myAnswers[i] === correctAnswer[i] ){
          mark++
        }
        setMyMark(mark)
        console.log("my mark is:",mark,"/",items.length)
      }
  
    }
    const handleClickNext = () =>{
      
      if(to >= items.length -1 ){
        setFrom(0)
        setTo(2)
      } else{
        setFrom(from + 2)
      setTo(to + 2)
      }
    }
  
    const handleClickPrev = () =>{
      if(from <= 0 ){
        setFrom(items.length -2)
        setTo(items.length )
      } else{
        setFrom(from - 2)
        setTo(to - 2)
      }
      
    }
    for(let j=0 ; j< items.length; j++){
      ans[j] = 0;
    }
  
    
    const handleAnswer = (value , index) => {
      // let myans = []
      // renderData.map((it,i) =>{
      //    myans[index] = renderData[index].value
      //   console.log("myans",myans)
      // }).
          
          ans[index + from] = value
          myAnswers[index + from] = value
          // console.log("Ans:", index+1 ,ans)
          // console.log("MYAns:" ,myAnswers)
          
        }
        
  
  
    useEffect(()=>{
      const getQues = ()=>{
        let sliced = items.slice(from,to);
      setRenderData(sliced)
      
      }
      getQues()
      // console.log("from",from)
      // console.log("to",to)
  },[to,from])
  
  
    
  
    return (
      
      <div className="container text-center">
         
      <div>
        <Accordion defaultActiveKey="0">
        {renderData.map((it,i) =>(
          
            
        <Accordion.Item eventKey={i} 
        onChange={(e)=>{
          // let ans=[]
          // ans[i] = e.target.value
          // setMyAnswers(ans)
          //  console.log("myAns:", i ,myAnswers[i])
          //  console.log("question",i+1,"value :" , e.target.value)
          handleAnswer(e.target.value, i)
        }}
        >
          <Accordion.Header>
          {items.length} سؤال  {from + i + 1}  من
          <br/>
            {it.title}
          </Accordion.Header>
          <Accordion.Body>
          <Form>
              {['radio'] .map((type) =>(
                
                <div key={`inline-${type}${it.numQues}`} className="mb-3">
                  {it.choices.map((choice,num)=>
              <Form.Check value={choice} type={type} id= {`inline-${type}${i}-${num}`} label = {choice} name ={ it.title}/>
              )}
              
              </div>
              ))}
            </Form>
          </Accordion.Body>
        </Accordion.Item>
       
       ))}
       </Accordion>
       {/* <Accordion defaultActiveKey="1">
          {fullData.map((d,i) => {
            if(d.category === categorys){
              return(
                <Accordion.Item eventKey={i}>
                  <Accordion.Header>
                    {d.title}
                  </Accordion.Header>
                  <Accordion.Body>
                    <Form>
                      {['radio'].map(()=>(
                        <div dangerouslySetInnerHTML={{__html:d.description.__cdata}} />
                      ))}
                    </Form>
                  </Accordion.Body>
                </Accordion.Item>
  
              )
            }
          })}
  
      </Accordion> */}
      </div>
      <br></br>
      <br></br>
      <Button onClick={()=> handleClickPrev()}>
                Previous
      </Button>
      <br></br>
      <br></br>
      <Button onClick={()=> handleClickNext()}>
                Next
      </Button>
      <br></br>
      <br></br>
      <Button onClick={()=> {
        endQuiz()
        setShow(true)
        }}>
        End Quiz
      </Button>
        
       {show && <div>
          نتيجتك هي  {mark} من {items.length} 
        </div>}
      
       
      </div>
         
    );
  
}

export default Quiz