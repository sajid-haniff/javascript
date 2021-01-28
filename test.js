import createGraphBuilder from './graph-builder.js';

const builder = createGraphBuilder();
builder.addNode(0);
builder.addNode(1);
builder.addEdge(0, 1, 'a');
builder.print();
