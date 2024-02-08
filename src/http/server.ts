import fastify from "fastify"
import cookie from "@fastify/cookie"
import { createPoll } from "./routes/create-poll";
import { getPollById } from "./routes/get-poll-by-id";
import { voteOnPoll } from "./routes/vote-on-poll";
import websocket from "@fastify/websocket";
import { pollResults } from "./ws/poll-results";
import { getPolls } from "./routes/get-polls";

const app = fastify()

app.register(cookie, {
    secret: "polls-app-nlw",
    hook: "onRequest",
})
app.register(websocket)

app.register(createPoll)
app.register(getPollById)
app.register(voteOnPoll)
app.register(pollResults)
app.register(getPolls)

app.listen({ port: 3333 }).then(() => {
    console.log("API is running!");
})