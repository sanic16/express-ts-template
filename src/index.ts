import express from 'express'

const PORT = process.env.PORT || 8000

const app = express()

app.get('/', (_req, res) => {
    res.json({
        message: 'Hello World!'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
