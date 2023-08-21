import { ChatCompletionFunctions } from "openai-edge";

export const OpenAiFunctionNames = Object.freeze({
    GET_QUERY_SOURCES: 'get_query_sources',
})

export const functions: ChatCompletionFunctions[] = [
    {
        name: OpenAiFunctionNames.GET_QUERY_SOURCES,
        description: 'Run this function to get the relevant sources for a query.',
        parameters: {
            type: 'object',
            properties: {
                query: {
                    type: 'string',
                    description: 'The user query as a standalone string.',
                }
            },
            required: ['string'],
        },
    }
]
