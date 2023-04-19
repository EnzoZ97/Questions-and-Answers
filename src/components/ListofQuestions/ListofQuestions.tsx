import { useState } from 'react';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { addResult } from '../../features/result/resultSlice';
import { Link } from 'react-router-dom';

import './ListofQuestions.scss';

const ListOfQuestions = () => {
    const dispatch = useAppDispatch()
    const list = useAppSelector((state) => state.list.value);
    const [disabled, setdisabled] = useState(true);
    const [indexSelected, setindexSelected] = useState(0);
    const [slider, setSlider] = useState(0);
    const [lastQuestion, setlastQuestion] = useState(false);

    function checkAnswer(value: boolean, index: number, questionIndex: number):void{
        LastQuestion(questionIndex);
        result(questionIndex,index);
        if(value === true){
            setindexSelected(index);
            setdisabled(false);
        }
        else{
            setindexSelected(index);
            setdisabled(false);
        }
    }

    function result(questionIndex: number, index_selected: number):void{      
        const answer = list.filter((elem) => elem.id === questionIndex);
        Object.entries(answer).forEach(([key, value], index) => {
            const answer_value = {
                id_question: value.id, 
                id_answer_seleted: index_selected,
            }
            dispatch(addResult(answer_value));
        })
    }

    function LastQuestion(questionIndex: number):void{
        let lastIndex : number = list[list.length - 1].id; 
        if(questionIndex === lastIndex){
            setlastQuestion(true);
        }
        
    }

    function addClasses(value: boolean, index: number):string{
        let word: string = '';     
        if(indexSelected === 0){
            word = 'answer-box';
        }
        if(indexSelected === index && value === true){
            word = 'answer-box correct-answer';
        }
        else if(indexSelected === index && value === false){
            word = 'answer-box incorrect-answer';
        }
        else if(disabled === false && indexSelected !== index){
            word = 'answer-box disabled-answer';
        }
        return word;
    }

    function nextQuestion(){
        setdisabled(true);
        setindexSelected(0)
        if(window.innerWidth >= 351 && window.innerWidth <= 905){
            let tablet =  window.innerWidth + 400;
            setSlider(slider - tablet )
        }
        else if(window.innerWidth <= 350 ){
            let mobile =  window.innerWidth + 400;
            setSlider(slider - mobile )
        }
        else{
            setSlider(slider - 900)
        }
        
        
    }



    function reset():void{
        setdisabled(true);
        setindexSelected(0);
        setSlider(0);
        setlastQuestion(false);
    }

    return (
        <div className="ListofQuestions">
            <div className="container">
                {
                    list.map((elem) => (
                        <div key={elem.id} className="content" style={{left: slider}}>
                            <h1>{elem.question}</h1>
                            <div className="answers">
                                {elem.answers.map((answer) => (
                                    <div className={addClasses(answer.iscorrect,answer.id )}
                                         onClick={() => checkAnswer(answer.iscorrect,answer.id,elem.id )}>
                                        <p>{answer.answer}</p>
                                    </div>
                                ) )}
                            </div>
                        </div>
                        
                    ))
                }     
            </div>
            
            <div className="box-button">
                {
                    lastQuestion === true ? 
                    <Link to="/Results" onClick={() => reset()}>
                        <button >Show Results</button>
                    </Link>
                    :
                    <button disabled={disabled} onClick={() => nextQuestion() } >Accept</button>
                }
                
            </div>
        </div>
    )
}

export default ListOfQuestions;
