import {searchSupabaseVectors} from "@/scripts/searchSupabaseVectors";

export const getQuerySources = async (functionArgs: unknown) => {
    if (typeof functionArgs !== 'object') throw new Error('Invalid function arguments');
    const { query } = functionArgs as { query: string };
    if (!query) throw new Error('No program type provided');
    console.log('Getting sources for query: ', query);

    const sources = await searchSupabaseVectors(query);
    console.log('Sources for query: ' + query + '\n\nSources: ', sources)

    return {
        followUpInstructions: 'These are the relevant sources found for query: ' + query,
        sources,
    }
}
