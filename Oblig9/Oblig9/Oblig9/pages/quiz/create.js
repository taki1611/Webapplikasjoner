import {useEffect,  useState} from 'react'
import Head from "next/head"
import Image from "next/Image"
import axios from "axios"


const CreateQuiz = () => {
    const [quiz, setQuiz] = useState([]) 
    const [error, setError] = useState(null) 
    const [name, setName]= useState('')

    const handleQuestionChange =(event) => {
        setName(event.target.value)
    }

   
    const createQuiz = async () => {
        try {
             const response = await axios.post('/api/quiz',{name})
             
             if(response?.data?.success){
                    setQuiz(response.data.data)
                }
            } 
            catch (err) {
                setError(err?.response.data?.error)
             
            
            }
        }
            const handleSubmit = async (event) => {
        event.preventDefault()
        await createQuiz();
    }

    const getQuizzes = async () => {
try {
     const response = await axios.get('/api/quiz')
     
     if(response?.data?.success){
            setQuiz(response.data.data)
        }
    } 
    catch (err) {
        setError(err?.response.data?.error)
     
    
    }
}
   
       
    
    useEffect(() => {
        getQuizzes()
    },[])

if(error){
return <p> noe gikk galt: {error} </p>
}
return (

    <div>
<Head>
    <title> Create Quiz</title>
</Head>
    <h1> Quiz</h1>


    <form onSubmit={handleSubmit}>
        <label htmlFor="name"> Lag nytt navn </label> 
            <input type="text" name="name" value={name} onChange={handleQuestionChange}/>
            <button type="submit"> Send </button>
        </form>    
        
       <section>

           {JSON.stringify(quiz)}

       </section>
          </div>
) 
}
export default CreateQuiz