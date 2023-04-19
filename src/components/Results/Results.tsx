import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Link } from 'react-router-dom';
import { removeAll } from '../../features/result/resultSlice';

import './Results.scss';

const Results = () => {
    const dispatch = useAppDispatch();
    const list = useAppSelector((state) => state.list.value);
    const results = useAppSelector((state) => state.result.value);

    function checkResult(id_question: number, answer_id: number, iscorrect:boolean):string{
        let classes : string = 'answer-box';
        const results_param = results.filter((elem) => elem.id_question === id_question);
        if(results_param[0].id_answer_seleted === answer_id){
            if(iscorrect === true){
                classes = 'answer-box correct-answer';
            }
            else{
                classes = 'answer-box incorrect-answer';
                
            }
        }      
        return classes;
    }

    function resetResults():void{
        dispatch(removeAll())
    }
    

    return (
        <div className="results">
            <div className="results-container">
                {
                    list.map((elem) => (
                        <div key={elem.id} className="results-content" >
                            <h1>{elem.question}</h1>
                            <div className="results-answers">
                                {elem.answers.map((answer) => (
                                    <div className={checkResult(elem.id, answer.id, answer.iscorrect)}>
                                        <p>{answer.answer}</p>
                                    </div>
                                ) )}
                            </div>
                        </div>
                        
                    ))
                } 
            </div>

            <div className="box-button">
                    <Link to="/" onClick={() => resetResults()}>
                        <button >Go home</button>
                    </Link>      
            </div>
        </div>
    )
}

export default Results;