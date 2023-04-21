import React,{ useContext, useState }from "react";
import Layout from "../components/Layout";
import { AuthContext } from "../components/AuthContext";

type Exam = {
    id: number;
    name: string;
    description: string;
    slug: string;
    image: string;
};

export default function ExamList({ exams }: { exams: Exam[] }) {
    const [newExamName, setNewExamName] = useState("");
    const [newExamDescription, setNewExamDescription] = useState("");
    const [newExamImage, setNewExamImage] = useState("");
    const [newExamImageFile, setNewExamImageFile] = useState<File | null>(null);
    const { user } = useContext(AuthContext);

    const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
         if (newExamImage) {
            const imageUrl = await imageUploading(newExamImageFile);
            setNewExamImage(imageUrl);
          }
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/exams`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                body: JSON.stringify({ name: newExamName, description: newExamDescription, image: newExamImage })
            });

            if (response.ok) {
                console.log("Exam created!");
                // Refresh the page to show the new exam in the list
                window.location.reload();
            } else {
                console.error("Failed to create exam:", response.status, response.statusText);
            }
        } catch (error) {
            console.error("Failed to create exam:", error);
        }
    };
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
          setNewExamImageFile(e.target.files[0]);
        }
    };
    return (
        <Layout title="Exams">
            {user.is_admin && (
            <form onSubmit={handleFormSubmit}>
             <input
             type="text"
             placeholder="Exam name"
             value={newExamName}
             onChange={(e) => setNewExamName(e.target.value)}
          />
          <textarea
            placeholder="Exam description"
            value={newExamDescription}
            onChange={(e) => setNewExamDescription(e.target.value)}
          />
           <input type="file" onChange={handleFileChange} />
          <button type="submit">Create Exam</button>
        </form>
      )}
            {exams.map((exam) => (
                <div key={exam.id} className="examListing">
                    <img src={exam.image} alt={exam.name}/>
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

export async function imageUploading( imageFile: File ): Promise<string> {
    const formData = new FormData();

    formData.append('file', imageFile);
    formData.append('upload_preset', 'my_uploads');
    const imageResponse = await fetch(`${process.env.NEXT_PUBLIC_CLOUDINARY_URL}`, {
        method: 'POST',
        body: formData
    }).then(r => r.json());
    if (imageResponse.ok) {
        console.log("Image uploaded");
    }
    return imageResponse.secure_url;
}