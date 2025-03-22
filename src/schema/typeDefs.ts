import { readFileSync } from 'fs';
import gpl from 'graphql-tag';

const typeDefs = gpl(readFileSync('./src/schema/schema.graphql', { encoding: 'utf-8' }));

export default typeDefs;
