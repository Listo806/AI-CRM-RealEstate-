
// Chains multi-step actions requested by AI intents
const { createLead, createTask, sendMessage, mlsCreateDraft, scheduleEvent } = require('./actions');

/** intent example:
{
  type: "LIST_PROPERTY",
  data: { address, price, beds, baths, photos:[], buyerList:[], socialCopy },
  steps: ["MLS_DRAFT","FLYER","SOCIAL","BROADCAST"]
}
*/
async function executeIntent(intent, ctx){
  switch(intent.type){
    case 'CREATE_LEAD':
      await createLead(intent.data, ctx); break;
    case 'SCHEDULE_SHOWING':
      await scheduleEvent(intent.data, ctx); break;
    case 'LIST_PROPERTY':
      if (intent.steps?.includes('MLS_DRAFT')) await mlsCreateDraft(intent.data, ctx);
      if (intent.steps?.includes('FLYER')) await createTask({ title:`Design flyer for ${intent.data.address}`}, ctx);
      if (intent.steps?.includes('SOCIAL')) await createTask({ title:`Schedule IG/FB post`}, ctx);
      if (intent.steps?.includes('BROADCAST')) await sendMessage({ channel:'whatsapp', to:intent.data.buyerList, body:intent.data.socialCopy }, ctx);
      break;
    default:
      throw new Error('Unknown intent: '+intent.type);
  }
  return { ok:true };
}

module.exports = { executeIntent };
