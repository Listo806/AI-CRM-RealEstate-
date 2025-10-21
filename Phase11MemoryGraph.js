// Lightweight vector memory stored in Mongo
const mongoose = require('mongoose');
const MemoryVector = require('../models/MemoryVector');
const { embed } = require('./llm');

async function addMemory({ userId, text, tags = [] }) {
  const vector = await embed(text);
  return MemoryVector.create({ userId, text, tags, vector });
}

async function searchMemory({ userId, query, k = 5 }) {
  const qVec = await embed(query);
  const docs = await MemoryVector.find({ userId }).limit(200);
  const scored = docs.map(d => ({ doc: d, score: cosine(qVec, d.vector) }))
                     .sort((a,b)=>b.score-a.score).slice(0,k);
  return scored.map(s => s.doc);
}

function cosine(a,b){ let dot=0,na=0,nb=0; for(let i=0;i<a.length;i++){dot+=a[i]*b[i];na+=a[i]*a[i];nb+=b[i]*b[i]} return dot/(Math.sqrt(na)*Math.sqrt(nb)+1e-9); }

module.exports = { addMemory, searchMemory };
