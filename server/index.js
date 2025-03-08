import 'dotenv/config'
import app from './app.js'
import { PORT } from './constant/config.js'


app.listen(PORT, () => {
    console.log(`Server is running in Port http://localhost:${PORT}`)
})

