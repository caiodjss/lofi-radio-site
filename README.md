# ✨ Lofi Radio 🎧

---

🎐 **A rádio está em transformação.**
De uma página leve em HTML, CSS e JS... para uma plataforma completa, moderna, construída com Angular e C#.

Se você já passou por aqui antes: obrigada por ouvir.
Se está chegando agora: bem-vindo à reformulação. 💜

---

## 🌸 Visão Geral

A **Lofi Radio** é uma aplicação web onde usuários poderão:

* Ouvir estações de rádio lofi temáticas
* Criar playlists
* Trocar de estação
* Enviar músicas próprias
* Personalizar a interface

A experiência convida à pausa, à criatividade, à calma — com som de qualidade e uma interface acolhedora.

---

## 🛠️ Tecnologias

### 🧠 Backend

Construído com **ASP.NET Core Web API (C#)**, o backend é responsável por:

* Autenticação (JWT / ASP.NET Identity)
* Gerenciamento de usuários, músicas, estações e playlists
* Upload e validação de arquivos de áudio (MP3 etc)
* Integração com serviços de armazenamento (Firebase, Azure ou AWS S3)
* Extração de metadados com **TagLib#**
* Conversão de arquivos via **FFmpeg**
* APIs REST seguras e documentadas (via Swagger)
* Painel administrativo e estatísticas (futuro)

> Banco de dados: **PostgreSQL** ou **SQL Server**, via **Entity Framework Core**

---

### 🎧 Frontend

Desenvolvido com **Angular 15+**, o frontend é responsável por:

* Interface responsiva e intuitiva (com **Bootstrap** e/ou Angular Material)
* Player HTML5 com controle de estações e músicas
* Sistema de playlists pessoais
* Login, cadastro e perfis personalizados
* Envio de arquivos com feedback visual
* Instalação como PWA (para uso em dispositivos móveis)
* Transições suaves e animações leves

---

## 📡 Funcionalidades previstas

* 🔊 Estações temáticas: Lofi Hip Hop, MPB, Meditação, Clássicos, R\&B etc.
* 💾 Upload de músicas com aprovação via dashboard
* 🎛️ Interface personalizável por estação
* 🧑‍🎨 Artistas com página própria (bio, links, faixas)
* 🎵 Criação e compartilhamento de playlists
* 📈 Dashboard administrativo para análise de dados
* 📱 Compatível com desktop e mobile

---

## 🔄 Fluxos principais

### Upload de Música

1. Usuário logado envia uma música pelo Angular.
2. Backend valida e extrai metadados (TagLib#).
3. O arquivo é salvo no **Firebase Storage** (ou alternativa em nuvem).
4. Backend registra os dados no banco e retorna status.

### Reproduzir Estação

1. Frontend requisita via API a lista de faixas da estação.
2. Backend retorna metadados e URLs dos áudios.
3. Frontend carrega os arquivos via player HTML5.

### Gerenciar Playlist

1. Frontend envia comandos CRUD (criar, editar, deletar).
2. Backend atualiza dados no banco e retorna a playlist atualizada.

---

## 🌿 Desenvolvimento

* **Backend**: ASP.NET Core 7, Visual Studio, C#, Swagger
* **Frontend**: Angular CLI, Visual Studio Code, Bootstrap, Angular Material
* **Armazenamento de Arquivos**: Firebase Storage (alternável para Azure Blob ou AWS S3)
* **Banco de Dados**: PostgreSQL (em desenvolvimento local com Docker)

---

## ✅ MVP Prioritário

* [ ] Sistema de login e autenticação (JWT)
* [ ] Player com troca de estações
* [ ] Upload de músicas
* [ ] CRUD de playlists
* [ ] Integração com Firebase Storage
* [ ] Interface base responsiva

---

## 📂 Repositórios

> 🌐 Frontend: [https://github.com/caiodjss/lofi-radio-site](https://github.com/caiodjss/lofi-radio-site)
> ⚙️ Backend: *em construção*

---

## 🍵 Um lugar para respirar

Porque o mundo precisa de mais pausas.
Mais música sem pressa.
Mais espaços para apenas ser.

Coloque os fones.
Respire.
E deixe o som cuidar do resto.

---

Com carinho,
[@caiodjss](https://github.com/caiodjss) 🌸

---

## ✨ Trecho favorito

> “Sans nous attendre tant de saisons ont passé...
> Les feuilles dorées s'en allant mourir à terre...
> Mais notre monde érodé restera le même...
> Et demain toi et moi serons partis.”
> — Alcest – *Autre Temps*
