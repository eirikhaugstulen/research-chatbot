import {CreateMessage} from "ai";
import {OpenAiFunctionNames} from "@/scripts/createFunctionDefinitions";
import {getQuerySources} from "@/scripts/serverFunctions/getQuerySources";

const FunctionHandlers = Object.freeze({
    [OpenAiFunctionNames.GET_QUERY_SOURCES]: getQuerySources
});

type ValidFunctionNames = keyof typeof FunctionHandlers;
export type ValidFunctionCallPayload = { name: ValidFunctionNames, arguments: Record<string, unknown> };

export const handleServerFunctions = async (
    functionCall: ValidFunctionCallPayload,
    createFunctionCallMessages: (functionCallResult: any) => CreateMessage[]
) => {
    const handler = FunctionHandlers[functionCall.name];
    if (!handler) throw new Error(`No handler for function call ${functionCall.name}`);
    const functionCallResult = await handler(functionCall.arguments);

    return createFunctionCallMessages(functionCallResult);
}
