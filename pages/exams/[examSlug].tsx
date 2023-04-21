import React, { useEffect, useState } from 'react';
import Layout from '../../components/Layout';

export default function Exam({ exam }) {
    const [newQuestionTitle, setNewQuestionTitle] = useState('');
    const [newQuestionDescription, setNewQuestionDescription] = useState('');
    const [newQuestionImage, setNewQuestionImage] = useState<File | null>(null);
    const [newChoice1, setNewChoice1] = useState('');
    const [newChoice2, setNewChoice2] = useState('');
    const [newChoice3, setNewChoice3] = useState('');
    const [newChoice4, setNewChoice4] = useState('');

    const [admin, setAdmin] = useState(false);
    useEffect(() => {
        if (typeof localStorage !== 'undefined') {
            if(localStorage.getItem('admin')==='true'){
                setAdmin(true);
            }
        }
    }, []);

    const answerArray = populateArray(exam);
    const [data, setData] = useState({
        finalScore: 0
    });
    if (typeof window !== 'undefined') {
        //console.log(localStorage.getItem('token'));
      }

    const handleExamSubmit = async(e) => {

        e.preventDefault();
        fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams/exam-${exam[0].exam_id}/results`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(answerArray),
        })
        .then(async(response) => {
            if (response.ok) {
                const data = await response.json();
                //console.log(data);
                setData(data);
            }
        })
    };
    const handleNewQuestionSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', newQuestionTitle);
        formData.append('description', newQuestionDescription);
        if (newQuestionImage) {
            formData.append('image', newQuestionImage);
        }
        formData.append('answer', newChoice1);
        formData.append('fake_answer_1', newChoice2);
        formData.append('fake_answer_2', newChoice3);
        formData.append('fake_answer_3', newChoice4);
        //console.log(newChoice1)
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams/exam-${exam[0].exam_id}`, {
                method: 'POST',
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
                body: JSON.stringify({ title: newQuestionTitle, 
                    description: newQuestionDescription, 
                    image: newQuestionImage,
                    fake_answer_1:  newChoice2,
                    fake_answer_2:  newChoice3,
                    fake_answer_3:  newChoice4,
                    answer: newChoice1    
                }),
            });
            if (response.ok) {
                //console.log('Question created!');
                // Refresh the page to show the new question in the list
                window.location.reload();
            } else {
                //console.error("Failed to create question:", response.status, response.statusText);
            }
        } catch (error) {
            //console.error("Failed to create question:", error);
        }
    };
    const handleNewQuestionImageChange= (e: React.ChangeEvent<HTMLInputElement>) => {
        //console.log(e.target.files);
        if (e.target.files && e.target.files.length > 0) {
          setNewQuestionImage(e.target.files[0]);
        }
    };
    
    return (
        <Layout title={'Exam-'+ exam[0].exam_id}>
            {exam.map((question) => (
                <div className='question' key={question.id}>
                    <h3>{question.title}</h3>
                    <img src={question.image} alt={exam.title} />
                    <p>{question.description}</p>
                    <div className='options'>
                        <button onClick={() => 
                            updateArray(question.question_id, question.choice1, answerArray)}>
                            {question.choice1}
                        </button>
                        <button onClick={() => 
                            updateArray(question.question_id, question.choice2, answerArray)}>
                            {question.choice2}
                        </button>
                        <button onClick={() => 
                            updateArray(question.question_id, question.choice3, answerArray)}>
                            {question.choice3}
                        </button>
                        <button onClick={() => 
                            updateArray(question.question_id, question.choice4, answerArray)}>
                            {question.choice4}
                        </button>
                    </div>
                </div>
            ))}
            <div className='examScore'>
                <button onClick={handleExamSubmit} >Submit answers</button>
                <h3>Your score is: {data.finalScore} of {exam.length}</h3>
            </div>
            {admin && (
    <form onSubmit={handleNewQuestionSubmit}>
        <h3>Create a new question</h3>
        <label>
            Title:
            <input type='text' value={newQuestionTitle} 
            onChange={(e) => setNewQuestionTitle(e.target.value)} />
        </label>
        <label>
            Description:
            <textarea value={newQuestionDescription} 
            onChange={(e) => setNewQuestionDescription(e.target.value)} />
        </label>
        <label>
            Image:
            <input type='file' accept='image/*' onChange={handleNewQuestionImageChange} />
        </label>
        <label>
            Choice 1:
            <input type='text' value={newChoice1} onChange={(e) => setNewChoice1(e.target.value)} />
        </label>
        <label>
            Choice 2:
            <input type='text' value={newChoice2} onChange={(e) => setNewChoice2(e.target.value)} />
        </label>
        <label>
            Choice 3:
            <input type='text' value={newChoice3} onChange={(e) => setNewChoice3(e.target.value)} />
        </label>
        <label>
            Choice 4:
            <input type='text' value={newChoice4} onChange={(e) => setNewChoice4(e.target.value)} />
        </label>
        <button type='submit'>Create question</button>
    </form>
)}
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
    for (let i = 0; i < exam.length; i++) {
        answerArray.push({'guess_id': exam[i].question_id, 'guess': null});
    }
    return answerArray;
}

export function updateArray(questionId: string, choice: string, answerArray: Array<any>) {
    Object.entries(answerArray).forEach(([key]) => {
        if (answerArray[key].guess_id === questionId) {
            answerArray[key].guess = choice;
        }
    })
}