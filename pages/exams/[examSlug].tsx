import Layout from '../../components/Layout';

export default function Exam({ exam }) {
    return (
        <Layout title="Index">
            {exam.map((question) => (
                <div className="question" key={question.id}>
                    <h3>{question.title}</h3>
                    <img src={question.image} alt={exam.title} />
                    <p>{question.description}</p>
                    <div className="options">
                        <button>{question.choice1}</button>
                        <button>{question.choice2}</button>
                        <button>{question.choice3}</button>
                        <button>{question.choice4}</button>
                    </div>
                </div>
            ))}
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
