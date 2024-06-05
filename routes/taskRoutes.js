const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');


/**
 * @swagger
 * tags:
 *   name: Tasks
 *   description: Operações relacionadas às tarefas
 */

/**
 * @swagger
 * /api/tasks:
 *   get:
 *     summary: Retorna todas as tarefas cadastradas
 *     tags: [Tasks]
 *     responses:
 *       '200':
 *         description: OK
 *       '500':
 *         description: Erro interno do servidor
 */
router.get('/api/tasks', (req, res) => {
    // Lógica para buscar e retornar as tarefas
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   get:
 *     summary: Retorna uma tarefa específica pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser obtida
 *     responses:
 *       '200':
 *         description: OK
 *       '404':
 *         description: Tarefa não encontrada
 */
router.get('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Lógica para buscar e retornar a tarefa pelo ID
});

/**
 * @swagger
 * /api/tasks:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tasks]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Título da tarefa
 *               description:
 *                 type: string
 *                 description: Descrição da tarefa
 *     responses:
 *       '201':
 *         description: Tarefa criada com sucesso
 *       '400':
 *         description: Requisição inválida
 */
router.post('/api/tasks', (req, res) => {
    // Lógica para criar uma nova tarefa
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   put:
 *     summary: Atualiza uma tarefa existente pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser atualizada
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Novo título da tarefa
 *               description:
 *                 type: string
 *                 description: Nova descrição da tarefa
 *     responses:
 *       '200':
 *         description: Tarefa atualizada com sucesso
 *       '404':
 *         description: Tarefa não encontrada
 */
router.put('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Lógica para atualizar a tarefa pelo ID
});

/**
 * @swagger
 * /api/tasks/{id}:
 *   delete:
 *     summary: Exclui uma tarefa pelo ID
 *     tags: [Tasks]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID da tarefa a ser excluída
 *     responses:
 *       '200':
 *         description: Tarefa excluída com sucesso
 *       '404':
 *         description: Tarefa não encontrada
 */
router.delete('/api/tasks/:id', (req, res) => {
    const taskId = req.params.id;
    // Lógica para excluir a tarefa pelo ID
});


module.exports = router;