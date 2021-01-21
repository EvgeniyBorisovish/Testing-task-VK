
import React,{useState,useRef} from 'react'

import addSvg from "../../images/addBtnTask.svg";

import clearSvg from "../../images/clear.svg";

export const Addtask = ({getAction,textPlaceholder})=>{

const [inputBlock,setInputBlock] = useState(false)
const refEl =  useRef(null)


const hideShowStartTask = (value)=>{
    setInputBlock(value)
}

const exuteAction = ()=>{

    getAction(refEl.current.value)

    refEl.current.value="";

    hideShowStartTask(false)
}

   return (
   <div className="addtask">

        {
            !inputBlock && (
            <div className="addtask-FirstBtn" onClick={hideShowStartTask.bind(null,true)}><img className="addtask-FirstBtn__addSvg-img" src={addSvg}></img><span>Добавить еще одну карточку</span></div>
            )
        }
        {
            inputBlock && (
            <div className="taskInput">
                <p><textarea ref={refEl} className="taskInput__TextArea" placeholder={textPlaceholder}></textarea></p>
                <div className="taskInput-btnsarea">
                        <div  className="taskInput-btnsarea__btn-add" onClick={exuteAction}>Добавить карточку</div>
                        <div className="taskInput-btnsarea__btn-X" onClick={hideShowStartTask.bind(null,false)}><img className="taskInput-btnsarea__bottom-clear" src={clearSvg}></img></div>      
                </div>
            </div>)
            
        }
   
    </div>);
    
}
