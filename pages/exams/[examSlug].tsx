import Layout from '../../components/Layout';

export default function Exam({ exam }) {
    
    const answerArray = populateArray(exam);

    return (
        <Layout title="Index">
            {exam.map((question) => (
                <div className="question" key={question.id}>
                    <h3>{question.title}</h3>
                    <img src={question.image} alt={exam.title} />
                    <p>{question.description}</p>
                    <div className="options">
                        <button onClick={() => updateArray(question.question_id, question.choice1, answerArray)} >{question.choice1}</button>
                        <button onClick={() => updateArray(question.question_id, question.choice2, answerArray)} >{question.choice2}</button>
                        <button onClick={() => updateArray(question.question_id, question.choice3, answerArray)} >{question.choice3}</button>
                        <button onClick={() => updateArray(question.question_id, question.choice4, answerArray)} >{question.choice4}</button>
                    </div>
                </div>
            ))}
            <button>Senda inn svör</button>
        </Layout>
    );
}


export async function getServerSideProps({ params }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams/${params.examSlug}`).then(r => r.json());
  
    return {
        props: {
            exam: result
        }
    }
}

export function populateArray(exam, answerArray = []) {
    //Create array from how many questions there are in the exam
    for (let i = 0; i < exam.length; i++) {
        answerArray.push({"guess_id": exam[i].question_id, "guess": null});
    }
    return answerArray;
}

export function updateArray(questionId: String, choice: String, answerArray: Array<any>) {
    //Create array from how many questions there are in the exam
    //console.log(questionId);
    //console.log(choice);
    Object.entries(answerArray).forEach(([key]) => {
        if (answerArray[key].guess_id === questionId) {
            answerArray[key].guess = choice;
        }
    })
}