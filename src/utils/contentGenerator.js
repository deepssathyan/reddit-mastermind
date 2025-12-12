export const generatePost = ({ companyInfo, persona, subreddit, query, weekNumber }) => {
  const problemSpace = query.toLowerCase();
  const approaches = ['question', 'experience', 'recommendation', 'discussion', 'help'];
  const approach = approaches[Math.floor(Math.random() * approaches.length)];
  
  const titles = {
    question: [
      `Anyone have experience with ${problemSpace}?`,
      `Looking for advice on ${problemSpace} - what's worked for you?`,
      `Real talk: how do you handle ${problemSpace}?`,
      `Quick question about ${problemSpace}`,
      `What do you all use for ${problemSpace}?`,
      `Is it just me or is ${problemSpace} harder than it should be?`,
      `Probably a dumb question but... ${problemSpace}?`,
      `Need some guidance on ${problemSpace}`,
      `How are you managing ${problemSpace}?`,
      `What's your take on ${problemSpace}?`
    ],
    experience: [
      `So I've been dealing with ${problemSpace} for a while now`,
      `Thought I'd share what I learned about ${problemSpace}`,
      `Just wanted to share my ${problemSpace} experience`,
      `${problemSpace} update: finally found what works`,
      `Been meaning to post about ${problemSpace}`,
      `My journey with ${problemSpace}`,
      `After 6 months of ${problemSpace}, here's what I learned`,
      `${problemSpace} - lessons from the trenches`,
      `Real experience with ${problemSpace}`
    ],
    recommendation: [
      `If you're struggling with ${problemSpace}, this might help`,
      `Found something useful for ${problemSpace}`,
      `PSA about ${problemSpace}`,
      `Heads up for anyone dealing with ${problemSpace}`,
      `Something that helped with ${problemSpace}`,
      `Not sure if this helps but re: ${problemSpace}`,
      `${problemSpace} recommendation that worked for us`
    ],
    discussion: [
      `Can we talk about ${problemSpace}?`,
      `What's your ${problemSpace} setup look like?`,
      `Unpopular opinion about ${problemSpace}`,
      `Hot take on ${problemSpace}`,
      `Curious how others handle ${problemSpace}`,
      `Let's discuss ${problemSpace}`,
      `${problemSpace} - what's everyone using?`
    ],
    help: [
      `Help: completely stuck on ${problemSpace}`,
      `Need recommendations for ${problemSpace}`,
      `${problemSpace} is killing me - what am I missing?`,
      `Advice needed: ${problemSpace}`,
      `How do you choose for ${problemSpace}?`,
      `Struggling with ${problemSpace}`,
      `Lost on ${problemSpace} - any tips?`
    ]
  };
  
  const titleList = titles[approach];
  const title = titleList[Math.floor(Math.random() * titleList.length)];
  
  const contexts = [
    "we're a small team",
    "we're a startup with 5 people",
    "our team is fully remote",
    "we're trying to scale",
    "just 3 of us right now",
    "growing from 5 to 15 people",
    "we're bootstrapped"
  ];
  
  const timeframes = [
    "for the past few months",
    "recently",
    "over the last quarter",
    "for about 6 months",
    "the past few weeks"
  ];
  
  const pains = [
    "it's getting messy",
    "it's becoming a bottleneck",
    "we're wasting time",
    "it's harder than expected",
    "things are falling through the cracks",
    "it's not scaling well"
  ];
  
  const context = contexts[Math.floor(Math.random() * contexts.length)];
  const timeframe = timeframes[Math.floor(Math.random() * timeframes.length)];
  const pain = pains[Math.floor(Math.random() * pains.length)];
  
  const bodies = {
    question: [
      `Been researching ${problemSpace} and honestly pretty overwhelmed. ${context} so we need something straightforward.\n\nWhat's actually working for you? Any gotchas to watch out for?`,
      
      `Quick context: ${context}. We've been dealing with ${problemSpace} ${timeframe} and ${pain}.\n\nWould love to hear what's working for people in similar boats.`,
      
      `${context} and trying to sort out ${problemSpace}. Done some research but getting conflicting info.\n\nWhat would you recommend for our situation?`,
      
      `Probably overthinking this but: ${problemSpace} is ${pain}. ${context}.\n\nHow do you handle this? What should we prioritize?`
    ],
    
    experience: [
      `Wanted to share this because I was stuck on ${problemSpace} ${timeframe}. ${context} and ${pain}.\n\nWhat helped: starting simple and iterating. Not perfect but way better than where we were. Happy to answer questions.`,
      
      `So we spent ${timeframe} figuring out ${problemSpace}. ${context} which added constraints.\n\nMain takeaway: the simple solution usually works better than the fancy one. Here's what we learned...`,
      
      `Just went through the ${problemSpace} journey. ${context} and honestly made every mistake possible.\n\nKey lesson: focus on what you actually need vs what looks cool. Here's our experience.`
    ],
    
    recommendation: [
      `Not affiliated with anything but ${context} and ${problemSpace} was ${pain}.\n\nFound an approach that's working well after testing a few options. Might be helpful if you're in a similar situation.`,
      
      `Wasn't sure if worth posting but: ${context} dealing with ${problemSpace}. Tried several things ${timeframe}.\n\nOne approach worked way better than expected. Let me know if you want details.`,
      
      `Quick share for ${problemSpace}: ${context} and finally got this sorted ${timeframe}.\n\nNot revolutionary but the approach might help someone in similar situation.`
    ],
    
    discussion: [
      `Been thinking about ${problemSpace} and curious what everyone's doing. ${context} and ${pain}.\n\nWhat's your setup? Am I overthinking this?`,
      
      `Genuine question about ${problemSpace}: how much priority do you give this?\n\n${context} and debating if it's worth the effort or if our current approach is fine.`,
      
      `Maybe hot take but: ${problemSpace} feels overcomplicated. ${context} and spent ${timeframe} trying to perfect it.\n\nWhat's your philosophy here?`
    ],
    
    help: [
      `Completely stuck on ${problemSpace}. ${context} and ${pain}.\n\nDone research but overwhelmed. What should I actually focus on? Any specific things to avoid?`,
      
      `Need advice: ${context} and ${problemSpace} is becoming a problem. Tried a few things ${timeframe} but nothing clicking.\n\nWhat would you do in this situation?`,
      
      `Help needed with ${problemSpace}. ${context} and not sure where to start.\n\nWhat questions should I even be asking? Feel like I'm missing something obvious.`
    ]
  };
  
  const bodyList = bodies[approach];
  const body = bodyList[Math.floor(Math.random() * bodyList.length)];
  
  return { title, body, approach };
};

export const generateCommentStrategy = ({ post, personas, poster, weekNumber }) => {
  const numComments = Math.floor(Math.random() * 3) + 2;
  const comments = [];
  const availablePersonas = personas.filter(p => p.id !== poster.id);
  
  const initialComments = [
    `I've dealt with this. The key is starting small and not trying to solve everything at once.`,
    `Good question. We went through this last year - main thing was getting team buy-in early.`,
    `Been there. Honestly it's less about the "perfect" solution and more about what fits your workflow.`,
    `So I might have relevant experience here. We tried a few approaches and learned the hard way.`,
    `Not an expert but we dealt with this recently. Biggest lesson: keep it simple at first.`,
    `I was in the same boat 6 months ago. Here's what actually helped us.`,
    `Real talk: we made every mistake with this. Start with the basics.`,
    `Dealing with this right now actually. What worked: focusing on our actual needs vs nice-to-haves.`,
    `We spent way too long researching. In hindsight, should've just picked something and started.`,
    `This is timely - just sorted this out for our team last month.`
  ];
  
  const middleComments = [
    `Adding to what was said above - documentation and support matter way more than you'd think.`,
    `That's solid advice. I'd also mention integration with existing tools is worth considering upfront.`,
    `Good point. Just make sure whatever you choose doesn't require massive technical overhead.`,
    `Yeah this matches my experience. Budget time for your team to actually learn the system.`,
    `This is helpful. From different angle: think about what happens 6 months from now when you want changes.`,
    `To add: the learning curve is real. We underestimated that initially.`,
    `One thing I'd mention: make sure it actually solves your problem vs just looking cool.`,
    `That tracks. Also worth considering: how hard is it to migrate away if needed?`,
    `Agreed. We also found that support quality matters more for adoption than features.`,
    `Good points. I'd add: test with real workflows before fully committing.`
  ];
  
  const followupComments = [
    `Appreciate all the input here. This gives me better sense of priorities. Going to test a few options.`,
    `Thanks everyone. Really helpful to hear real experiences vs marketing. Will report back.`,
    `This is exactly what I needed. Clear there's no "perfect" answer but at least I know what to look for.`,
    `Super helpful thread. Consensus seems to be start simple and iterate. That actually makes sense.`,
    `Really appreciate the time. Got solid leads to check out now. Will update once I test things.`,
    `Thanks all. Main takeaway: focus on actual needs and don't overthink it. Appreciate the reality check.`,
    `This helps a lot. Going to start with basics and see what works for our situation.`,
    `Good discussion. Clearer on what questions to ask now. Thanks for the insights!`,
    `Exactly the kind of feedback I was hoping for. Much appreciated everyone.`,
    `Thanks for keeping it real. This community is great for cutting through the hype.`
  ];
  
  for (let i = 0; i < numComments && i < availablePersonas.length; i++) {
    const commenter = availablePersonas[i];
    const delay = (i + 1) * (Math.random() * 4 + 2);
    
    let content;
    if (i === 0) {
      content = initialComments[Math.floor(Math.random() * initialComments.length)];
    } else if (i === numComments - 1) {
      content = followupComments[Math.floor(Math.random() * followupComments.length)];
    } else {
      content = middleComments[Math.floor(Math.random() * middleComments.length)];
    }
    
    comments.push({
      persona: commenter.name,
      delayHours: delay,
      content: content,
      type: i === 0 ? 'initial' : i === numComments - 1 ? 'followup' : 'middle'
    });
  }
  
  return comments;
};