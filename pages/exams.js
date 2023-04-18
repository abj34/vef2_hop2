import Layout from "../components/Layout";

export default function ExamList({ exams }) {
    return (
        <Layout title="Exams">
            {exams.map((exam) => (
                <div key={exam.id} className="examListing">
                    <img src={exam.image} alt={exam.name} />
                    <div>
                        <h2>{exam.name}</h2>
                        <p>{exam.description}</p>
                    </div>
                    <a href={"/exams/" + exam.slug}>Take exam</a>
                </div> 
            ))}
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
