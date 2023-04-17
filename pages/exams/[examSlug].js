export default function Exam({ exam }) {
    return (
        <div>
            {exam.map((question) => (
                <div key={question.id}>
                    <h3>{question.title}</h3>
                    <p>{question.description}</p>
                </div>
            ))}
        </div>
    );
}


export async function getServerSideProps({ params }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams/${params.examSlug}`).then(r => r.json());

    console.log(result[0])
  
    return {
        props: {
            exam: result
        }
    }
}
