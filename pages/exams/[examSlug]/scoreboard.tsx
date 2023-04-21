import Layout from "../../../components/Layout";

export default function ExamScoreboard({ scoreboard }) {
    console.log(scoreboard);

    return (
        <Layout title="Scoreboard">
            {scoreboard.map((score) => (
                <div key={score.id}>{score.username}
                    <p>Score: {score.highscore}</p>
                </div>
            ))}
        </Layout>
    );
}


export async function getServerSideProps({ params }) {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams/${params.examSlug}/scoreboard`).then(r => r.json());
  
    return {
        props: {
            scoreboard: result
        }
    }
}