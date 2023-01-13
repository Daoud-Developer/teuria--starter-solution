import './App.css';
import React, { useState ,useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import "bootstrap/dist/css/bootstrap.min.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import trafficLaws from './data/categorys/AR/trafficLaws';
// import trafficSigns from './data/categorys/trafficSignsWithPic';
import trafficSigns from './data/categorys/AR/trafficSigns';
import safety from './data/categorys/AR/safety';
import vehicleKnowledge from './data/categorys/AR/vehicleKnowledge';
import firstTestEnRules from './data/categorys/EN/EnRules';
import firstTestEnKnow from './data/categorys/EN/EnKnow';
import firstTestEnSafety from './data/categorys/EN/EnSafety';
import firstTestEnTrafficSigns from './data/categorys/EN/EnTrafficSigns';
import firstTestHeKnow from './data/categorys/HE/HeKnow';
import firstTestHeRules from './data/categorys/HE/HeRules';
import firstTestHeSafety from './data/categorys/HE/HeSafety';
import firstTestHeTrafficSigns from './data/categorys/HE/HeTrafficSigns';

const Learn = () => {
 
   const [arType,setARType] =useState("«1»");
   const [heType,setHEType] =useState("«1»");
   const [enType,setENType] =useState("«1»");
    const [ARcategorys,setARCategorys] = useState("قوانين المرور")
    const [ENcategorys,setENCategorys] = useState("rules")
    const [HEcategorys,setHECategorys] = useState("חוקי התנועה")
    const [item,setItem] =useState([]);
    const [language,setLanguage]= useState("arbic");
    const [isAR,setIsAR]=useState(true);
    const [isEN,setIsEN]=useState(false);
    const [isHE,setIsHE]=useState(false);
    useEffect(()=>{
    
     
    

         if(language==='arbic'){
          setIsAR(true);
          setIsEN(false);
          setIsHE(false);
          setItem(trafficLaws);
        if(isAR&& ARcategorys === "قوانين المرور"){
          setItem(trafficLaws);
        }
        else if( isAR&&ARcategorys === "السلامة على الطرق"){
          setItem(safety);
        }
        else if(isAR&&ARcategorys === "معرفة المركبة"){
          
          setItem(vehicleKnowledge);
        }
        else if(isAR&&ARcategorys === "إشارات المرور"){
          
          setItem(trafficSigns);
        }
      }
      else if(language==='english'){
      
        setIsAR(false);
        setIsEN(true);
        setIsHE(false);
        setItem(firstTestEnSafety);
      
        if( isEN&&ENcategorys === "safety"){
         
         setItem(firstTestEnSafety);
         
       }
        else if(isEN&& ENcategorys === "rules"){
          
          setItem(firstTestEnRules);
        }
        
        else if( isEN&&ENcategorys === "know"){
          setItem(firstTestEnKnow);
        }
        else if( isEN&&ENcategorys === "traffic Signs"){
          setItem(firstTestEnTrafficSigns);
        }
    }
      else if(language==='hebrew'){
      
        setIsAR(false);
        setIsEN(false);
        setIsHE(true);
        setItem(firstTestHeSafety);
      
        if( isHE&&HEcategorys === "בטיחות"){
         
         setItem(firstTestHeSafety);
         
       }
        else if(isHE&& HEcategorys === "חוקי התנועה"){
          
          setItem(firstTestHeRules);
        }
        
        else if( isHE&&HEcategorys === "הכרת הרכב"){
          setItem(firstTestHeKnow);
        }
        else if( isHE&&HEcategorys === "תמרורים"){
          setItem(firstTestHeTrafficSigns);
        }
    }



    },[ARcategorys,arType,enType,heType,HEcategorys,ENcategorys,language,item])
  
  
    
  
    return (
      
      <div className="container text-center " dir='rtl'>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" dir='rtl'>
        <Container >
        
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
           <div> <Form.Select aria-label="Default select example"  onChange={(e)=>{setLanguage(e.target.value)}}>
              
              <option value="arbic">لغة عربية</option>
              <option value="hebrew">עברית</option>
              <option value="english">English</option>
              
              
              
              
            </Form.Select>
            </div>
              
           {isAR && <div> <Form.Select aria-label="Default select example" onChange={(e)=>{setARCategorys(e.target.value)}}>
              
              <option value="قوانين المرور">قوانين المرور</option>
              <option value="السلامة على الطرق">السلامة على الطرق</option>
              <option value="معرفة المركبة">معرفة المركبة</option>
              <option value="إشارات المرور">إشارات المرور</option>
            </Form.Select>
            <Form.Select aria-label="Default select example"  onChange={(e)=>{setARType(e.target.value)}}>
              
              <option value="«1»">تراكتور - 1</option>
              <option value="«A»">دراجة نارية - A</option>
              <option value="«B»">مركبة خصوصية - B</option>
              <option value="«C1»">مركبة شحن خفيف - C1</option>
              <option value="«C»">مركبة شحن ثقيل - C</option>
              <option value="«D»">مركبة عمومية - D</option>
              
              
              
            </Form.Select> </div>}
           {isHE && <div> <Form.Select aria-label="Default select example" onChange={(e)=>{setHECategorys(e.target.value)}}>
              
              <option value="חוקי התנועה">חוקי התנועה</option>
              <option value="בטיחות">בטיחות</option>
              <option value="הכרת הרכב">הכרת הרכב</option>
              <option value="תמרורים">תמרורים</option>
            </Form.Select>
            <Form.Select aria-label="Default select example"  onChange={(e)=>{setHEType(e.target.value)}}>
              
              <option value="«1»">טְרַקטוֹר - 1</option>
              <option value="«A»">אופנוע- A</option>
              <option value="«B»"> רכב פרטי - B</option>
              <option value="«C1»">רכב מטען קל- C1</option>
              <option value="«C»">רכב מטען כבד- C</option>
              <option value="«D»">רכב ציבורי- D</option>
              
              
              
            </Form.Select> </div>}
           {isEN && <div> <Form.Select aria-label="Default select example" onChange={(e)=>{setENCategorys(e.target.value)}}>
              
              <option value="rules">Rules and Regulations</option>
              <option value="safety">Safety</option>
              <option value="know">Know Your Vehicle</option>
              <option value="traffic Signs">Traffic Signs</option>
            </Form.Select>
            <Form.Select aria-label="Default select example"  onChange={(e)=>{setENType(e.target.value)}}>
              
              <option value="«1»">tractor - 1</option>
              <option value="«A»">Motorcycle- A</option>
              <option value="«B»">private vehicle- B</option>
              <option value="«C1»">light cargo vehicle- C1</option>
              <option value="«C»">heavy cargo vehicle- C</option>
              <option value="«D»">public vehicle- D</option>
              
              
              
            </Form.Select> </div>}
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div>
        
      {isAR && <Accordion defaultActiveKey="0">
      
      {item.map((it,i) =>{
       if(it.description.__cdata.includes(`${arType}`)){
          


        
        
          return(
      <Accordion.Item eventKey={i} 
     
      >
      
        <Accordion.Header>{it.title}</Accordion.Header>
        <Accordion.Body>
        <Form>
            {['radio'] .map((type) =>(
              
              <div dangerouslySetInnerHTML={{__html: it.description.__cdata}} />
            ))}
          </Form>
        </Accordion.Body>
      </Accordion.Item>)
     }
    })}
            
     </Accordion>}
     {isEN && <Accordion defaultActiveKey="1" dir='ltr'>
      
      {item.map((it,i) =>{
       if(it.__description4.includes(`${enType}`)){
          


        
        
          return(
      <Accordion.Item eventKey={i} 
     
      >
      
        <Accordion.Header>{it.title2}</Accordion.Header>
        <Accordion.Body>
        <Form>
            {['radio'] .map((type) =>(
              
              <div dangerouslySetInnerHTML={{__html: it.__description4}} />
            ))}
          </Form>
        </Accordion.Body>
      </Accordion.Item>)
     }
    })}
            
     </Accordion>}
     {isHE && <Accordion defaultActiveKey="2" >
      
      {item.map((it,i) =>{
       if(it.__description4.includes(`${heType}`)){
          


        
        
          return(
      <Accordion.Item eventKey={i} 
     
      >
      
        <Accordion.Header>{it.title2}</Accordion.Header>
        <Accordion.Body>
        <Form>
            {['radio'] .map((type) =>(
              
              <div dangerouslySetInnerHTML={{__html: it.__description4}} />
            ))}
          </Form>
        </Accordion.Body>
      </Accordion.Item>)
     }
    })}
            
     </Accordion>}
      </div>
      
        
      
       
      </div>
         
    );
  

}

export default Learn