const MarketingTask = require('../models/MarketingTask');
const { scheduleSocial, sendEmail } = require('../utils/actions');

exports.createTask = async (req,res)=>{
  const task = await MarketingTask.create(req.body);
  res.json(task);
};

exports.runDue = async (_req,res)=>{
  const now = new Date();
  const due = await MarketingTask.find({ runAt: { $lte: now }, status:'PENDING' });
  for (const t of due){
    if (t.channel==='instagram' || t.channel==='facebook') await scheduleSocial(t);
    if (t.channel==='email') await sendEmail(t);
    t.status = 'SENT'; await t.save();
  }
  res.json({ ok:true, count: due.length });
};
