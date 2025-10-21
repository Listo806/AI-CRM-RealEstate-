const { getComps } = require('../utils/mls');
const { cmaPrompt, predictPrompt, chat } = require('../utils/llm');

exports.cma = async (req,res)=>{
  const { address, beds, baths, sqft, radiusKm=2 } = req.body;
  const comps = await getComps({ address, beds, baths, sqft, radiusKm });
  const analysis = await chat(cmaPrompt({ address, comps }));
  res.json({ comps, analysis });
};

exports.predict = async (req,res)=>{
  const { area, propertyType } = req.body;
  const prediction = await chat(predictPrompt({ area, propertyType }));
  res.json({ prediction });
};
