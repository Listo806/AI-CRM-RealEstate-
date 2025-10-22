const { addMemory, searchMemory } = require('../utils/Phase11MemoryGraph');
const { chatToIntent } = require('../utils/llm');
const { executeIntent } = require('../utils/Phase11TaskExecutor');

exports.chat = async (req,res)=>{
  const { userId, message } = req.body;
  const memories = await searchMemory({ userId, query: message, k: 5 });
  const intent = await chatToIntent({ message, memories });
  await addMemory({ userId, text: message, tags:['chat'] });
  res.json({ intent });
};

exports.execute = async (req,res)=>{
  const { userId, intent } = req.body;
  const result = await executeIntent(intent, { userId });
  await addMemory({ userId, text:`Executed intent ${intent.type}`, tags:['action'] });
  res.json(result);
};
