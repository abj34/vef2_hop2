import Layout from '../../components/Layout';

export default function Exam({ exam }) {
    return (
        <Layout title="Index">
            {exam.map((question) => (
                <div key={question.id}>
                    <h3>{question.title}</h3>
                    <p>{question.description}</p>
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
