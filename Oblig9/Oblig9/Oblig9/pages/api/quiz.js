// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// url => /api/quiz

// statisk innhold (ikke tatt med innholdet her)
const quiz = [
 
  {  
    "name":       "Ole",   
    "salary":      10000,   
   
 },  {  
  "name":       "Dole",   
  "salary":      20000,   
 
},  {  
  "name":       "Doffen",   
  "salary":      30000,   
 
},  {  
  "name":       "Mikke",   
  "salary":      40000,   
 
},  {  
  "name":       "Mus",   
  "salary":      1,   

}
]

export default function handler(req, res) {
  if (req.method === 'POST') {
    // tar i mot data som sendes med forespørselen
    const data = req.body
    if(!data?.name){
      res
      .status(400)
      .json({ success: false, error:'Fyll ut data' })
    }
    else{
       // legger til data i quiz listen vår
       quiz.push(data)

       // sender status 201 (Created) og den nye oppdaterte listen
       res.status(201).json({ success: true, data: quiz })   
    }
  
  } else if (req.method === 'PUT') {
    // sender status 405 => metoden er ikke lov
    res.status(405).end()
  } else {
    // håndterer alle andre responser f.eks GET
    res.status(200).json({ success: true, data: quiz })
  }
}