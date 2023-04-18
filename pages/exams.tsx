import React from "react";
import Layout from "../components/Layout";

type Exam = {
    id: number;
    name: string;
    description: string;
    slug: string;
    image: string;
};

export default function ExamList({ exams }: { exams: Exam[] }) {
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


export const getServerSideProps = async () => {
    const result = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams`).then(r => r.json());

    return {
        props: {
            exams: result
        },
    };
}
