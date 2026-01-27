import { ChevronLeftIcon } from "lucide-react";
import { useSearchParams, useNavigate } from "react-router-dom";

function TaskPage(){
    const navigate = useNavigate()
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");
    return(
        <div className="newBody">
            <h1 className="title">Detalhes da tarefa</h1>
            <div className="descriptionDiv">
                <h2>{title}</h2>
                <p>{description}</p>
                <button onClick={()=> navigate(-1)} className="voltar">
                    <ChevronLeftIcon />
                </button>
            </div>
        </div>
    )
}

export default TaskPage;