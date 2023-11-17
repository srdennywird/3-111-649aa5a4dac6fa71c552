import { app, InvocationContext } from "@azure/functions";
import * as https from "https";
import * as df from 'durable-functions';
import { ActivityHandler, OrchestrationContext, OrchestrationHandler } from 'durable-functions';

codigo desde postman version ya me muero 8

export async function serviceBusQueueTrigger(message: unknown, context: InvocationContext): Promise<void> {
    context.log('Service bus queue function processed message:', message);
    const client = df.getClient(context);
    const instanceId: string = await client.startNew("3-111-649aa5a4dac6fa71c552.js", message);
    context.log(`Started orchestration with ID = '${instanceId}'.`);
}
app.serviceBusQueue('3-111-649aa5a4dac6fa71c552.js', {
    connection: 'connection',
    queueName: '3-111-649aa5a4dac6fa71c552',
    handler: serviceBusQueueTrigger,
    extraInputs: [df.input.durableClient()],
});