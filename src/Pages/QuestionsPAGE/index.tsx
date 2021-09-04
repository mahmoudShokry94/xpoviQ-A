import { questions } from "./QuestionsList"
import './index.style.css';
import { useRef, useState } from "react";
import XpoviButton from "../../components/Buttons/Button";
import XpoviRadioInput from "../../components/Inputs/XpoviRadioInput";
import XpoviNumberInput from "../../components/Inputs/XpoviNumberInput";

const QuestionPage = () => {
    let initialAnswerState: any = [];
    let initialQuestionList: any[] = [];
    const questionRef = useRef<any[]>([])
    const [page_number, setPageNumber] = useState(0);
    questions.forEach((section, section_index) => {
        return section.forEach((value, value_index) => {
            initialQuestionList[(Number((section_index * 3) + value_index + 1))] = value.question
            return initialAnswerState[(Number((section_index * 3) + value_index + 1))] = ''
        })
    })
    questionRef.current = initialQuestionList;
    const [data, setData] = useState(initialAnswerState);

    const first_page = page_number == 0;
    const last_page = page_number == questions.length;
    const submitFunction = () => {
        alert('submit')
        //POST HTTP REQUEST
    }
    return (
        <div className="container-fluid question_page">
            <div className="row justify-content-center align-items-center">
                <div className="col-12 text-left">
                    <h3>Answer the following questions:</h3>
                </div>
                <div className="section">
                    {
                        !last_page ?
                            questions.map((section, section_number) => {
                                return section.map((value, index) => {
                                    let visibility_check = false;
                                    let currentIndex = Number(section_number * 3 + index + 1);
                                    if (Object.entries(value.prerequisite).length > 0) {
                                        Object.keys(value.prerequisite).forEach((prerequisite) => {
                                            visibility_check = !(value.prerequisite[prerequisite].includes(data[prerequisite]?.trim()))
                                        })
                                    }
                                    return !visibility_check && page_number == section_number && <div key={index} className="col-12">
                                        {currentIndex + ' - ' + value.question}
                                        {value.answer.map((answer, answerIndex) => {
                                            switch (value.type) {
                                                case 'radio':
                                                    return <XpoviRadioInput
                                                        value={answer}
                                                        isSelected={answer == data[currentIndex]}
                                                        onChangeCallback={(e) => setData({ ...data, [currentIndex]: e.target.value })}
                                                        disabled={visibility_check}
                                                    >{answer}</XpoviRadioInput>
                                                case 'number':
                                                    return <XpoviNumberInput
                                                        value={data[currentIndex]}
                                                        maxLength={5}
                                                        disabled={visibility_check}
                                                        onChangeCallback={(e) => setData({ ...data, [currentIndex]: e.target.value })}
                                                    />
                                                default:
                                                    return <div></div>
                                            }
                                        }
                                        )}
                                    </div>

                                })
                            })
                            :
                            questionRef.current.map((value, index) => {
                                return <>
                                    <dt className="col-sm-12">{value}</dt>
                                    <dd className="col-sm-12">
                                        <p>{data[index]}</p>
                                    </dd>
                                </>
                            }
                            )
                    }
                    <div className={"col-12 mt-5 d-flex control_wrapper " + (page_number != questions.length ? "justify-content-between" : "justify-content-center")}>
                        {!first_page &&
                            <XpoviButton
                                type="PREVIOUS"
                                clickCallback={() => setPageNumber(prevstate => --prevstate)} />
                        }
                        {!last_page &&
                            <XpoviButton
                                type="NEXT"
                                clickCallback={() => setPageNumber(prevstate => ++prevstate)} />
                        }
                        {last_page &&
                            <XpoviButton
                                type="SUBMIT"
                                clickCallback={() => submitFunction()} />
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
export default QuestionPage;
