

const express =require('express')
const app=express()

app.use(express.json())

const messages =[
    {
        author:'SC',
        text: 'Rolls complete and a pitch is a program. One BRAVO.',
    },
    {
        author:'PAO',
        text: 'One BRAVO is an abort control mode. Altitude is 2 miles.',
    },

    {
        author:'CAPCOM',
        text: 'All is well at Houston. Yo are good at 1 minute.',
    },
]

app.get('/messages/:forum', (request, response)=>{
    if(request.params && request.params.forum === 'nasa'){
        return response.send(messages)
    }
    return response.status(404).send({error : 'Unkown forum'})
})

app.post('/messages/:forum', (request, response)=>{
    if(request.params && request.params.forum === 'nasa'){
        messages.push(request.body)
        return response.send('OK')
    }
    return response.status(404).send({error : 'Unkown forum'})
})

app.listen(5000,() => console.log('Launched on port 5000!'))


export default express;