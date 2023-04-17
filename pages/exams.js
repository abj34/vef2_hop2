import Layout from "../components/Layout";

export default function ExamList({ exams }) {
    return (
        <Layout title="Exams">
            {exams.map((exam) => (
                <div key={exam.id}>
                    <h1>{exam.name}</h1>
                    <p>{exam.description}</p>
                    <img src={exam.image} alt={exam.name} />
                    <a href={"/exams/" + exam.slug}>Take exam</a>
                </div> 
            ))}
            <a href="/">Return to index</a>
        </Layout>
    );
}


export async function getServerSideProps() {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams`).then(r => r.json());

    return {
        props: {
            exams: result
        },
    };
}
