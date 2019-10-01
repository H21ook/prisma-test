import { GraphQLServer, PubSub } from 'graphql-yoga';
import prisma from './prisma';

const pubsub = new PubSub()

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers: {
        
    },
    context: {
        pubsub,
        prisma
    }
})

server.start(() => {
    console.log("Сервер 4000 порт дээр аслаа!")
})