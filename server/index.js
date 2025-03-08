import 'dotenv/config.js'
import app from './app.js'

const PORT = 5000 || process.env.PORT;


app.listen(PORT, () => {
    console.log(`Server is running in Port http://localhost:${PORT}`)
})

