# Projeto Django + React

## Backend
No backend foi criado uma api que se conecta a um banco de dados local em Sqlite utilizando JWT Tokens para autenticação.
django  <-- Framework do backend.
django-cors-headers  <-- Permitir chamadas HTTPs de diferentes origens (Frontend React).
djangorestframework  <-- Criar API.
PyJWT  <--  Tokens JWT em python para permissão para acessar a api.
djangorestframework-simplejwt <-- Tokens de permissão para acessar a api.

## Frontend
No frontend foi criado uma aplicação com VITE utilizando React + JavaScript.
react  <-- Framework utilizado para aplicação frontend.
axios  <-- Usado para comunicação com a API adicionando o token de permissão aos headers.
jwt-decode <-- Usado para decodificar o token do JWT.
react-router-dom  <-- Usado para roteamento entre as páginas com proteção da página 'home'.

## Projeto realizado seguindo -> https://www.youtube.com/watch?v=c-QsfbznSXI
