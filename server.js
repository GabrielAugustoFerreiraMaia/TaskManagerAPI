const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

// Configuração do Swagger JSDoc
const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API de Gerenciamento de Tarefas',
            version: '1.0.0',
            description: 'Documentação da API de gerenciamento de tarefas',
        },
        servers: [{
            url: 'http://localhost:3000',
            description: 'Servidor de desenvolvimento',
        }, ],
    },
    apis: ['./routes/*.js'], // Caminho para os arquivos de rota onde estão os comentários do Swagger
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

// Middleware para servir a documentação Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api', require('./routes/taskRoutes'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));