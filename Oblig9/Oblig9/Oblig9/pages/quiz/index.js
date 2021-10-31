import {useEffect,  useState} from 'react'
import Head from "next/head"
import Image from "next/Image"
import axios from "axios"


const Quiz = () => {
    const [quiz, setQuiz] = useState([]) 
    const getQuizzes = async () => {
try {
     const response = await axios.get('/api/quiz')
     
     if(response?.data?.success){
            setQuiz(response.data.data)
        }
    } 
    catch (error) {
        console.log(error?.response.data)
    
    }
}
   
       
    
    useEffect(() => {
        getQuizzes()
    },[])


return (

    <div>
<Head>
    <title> Quiz</title>
</Head>
    <h1> Quiz</h1>

    
       <section>

           {JSON.stringify(quiz)}

       </section>
          </div>
) 
}
export default Quiz