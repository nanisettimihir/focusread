// Original practice material written for F0cus; not official SAT content.
const satPassages = [
  {
    title: 'The value of a vacant lot', skill: 'Main idea',
    text: `When a neighborhood association proposed turning a vacant lot into a garden, residents initially emphasized the vegetables it might produce. After the first season, however, the harvest was modest: a few baskets of tomatoes and beans. By that measure alone, the project seemed disappointing. Yet volunteers who had previously exchanged only hurried greetings now shared tools, organized watering schedules, and checked on older neighbors during hot weather. At the next planning meeting, residents voted to expand the garden, even though buying vegetables would have cost less. Their decision suggests that the garden's most valuable yield could not be weighed on a kitchen scale. Growing food had created a reason for people to cooperate, and that cooperation had become a resource in its own right.`,
    question: 'Which choice best states the main idea of the passage?',
    options: ['Community gardens usually produce enough food to replace grocery shopping.', 'A garden with a small harvest can still provide substantial social benefits.', 'Residents should measure a garden’s success only after several growing seasons.', 'Gardening is more affordable when neighbors purchase their tools together.'],
    answer: 1,
    explanation: 'The passage contrasts a modest harvest with stronger relationships and cooperation. Those social benefits explain why residents wanted to expand the garden. It does not claim that the garden replaced shopping, needed more seasons to be judged, or reduced tool costs.'
  },
  {
    title: 'Letters in the archive', skill: 'Inference',
    text: `An archivist studying a nineteenth-century theater company found that its surviving advertisements almost always named the same celebrated actor. She initially organized an exhibition around his career. Then she examined private letters written by the company's manager. The letters repeatedly discussed an unnamed stage carpenter who redesigned scenery so it could be packed into smaller wagons. Following this change, the company began visiting towns that its earlier travel budgets had placed beyond reach. The actor's name continued to dominate the advertisements, while the carpenter remained absent from them. The archivist revised her exhibition to include a model of the redesigned scenery beside the colorful posters. She wanted visitors to consider not only who attracted audiences but also whose work made those audiences accessible.`,
    question: 'Which inference about the theater company is best supported by the passage?',
    options: ['The manager considered the actor less talented than the carpenter.', 'The company’s advertisements intentionally concealed its travel expenses.', 'A worker who received little public recognition helped the company reach new audiences.', 'The carpenter’s scenery attracted more ticket buyers than the actor’s performances.'],
    answer: 2,
    explanation: 'The smaller wagons allowed travel to previously unaffordable towns, but the carpenter was not named in advertisements. Together, these details support the carpenter’s unrecognized contribution to expanding access. The passage offers no comparison of talent or ticket sales and gives no motive for the advertisements’ omissions.'
  },
  {
    title: 'A cautious conclusion', skill: 'Vocabulary in context',
    text: `Biologist Mara Chen expected seedlings grown under blue lamps to develop larger leaves than seedlings grown under white lamps. Her first trial appeared to confirm the prediction. Before publishing, however, she noticed that the blue lamps had also warmed the soil slightly more than the white lamps. In her report, Chen described the result as provisional. She then repeated the experiment, this time keeping soil temperature equal in both groups. The difference in leaf size nearly disappeared. Rather than omitting the first trial, Chen included both trials in her paper and explained how the temperature difference had complicated the original comparison. Her colleagues praised the report because it showed how a promising observation could guide a better experiment without being mistaken for a settled conclusion.`,
    question: 'As used in the passage, “provisional” most nearly means',
    options: ['tentative.', 'accidental.', 'comprehensive.', 'irrelevant.'],
    answer: 0,
    explanation: 'Chen recognizes a possible alternative explanation and repeats the experiment before treating the result as settled. “Provisional” therefore means tentative, or subject to revision. The observation was still relevant; the word does not mean that it was accidental or comprehensive.'
  },
  {
    title: 'Listening after dark', skill: 'Evidence-based reasoning',
    text: `A research team proposed that traffic noise, rather than artificial light alone, changes when an urban bird begins its morning song. To investigate, the team placed sound recorders at twelve parks with similar lighting and vegetation. Six parks bordered roads where overnight construction temporarily reduced vehicle traffic; six bordered roads where traffic continued normally. During the quieter weeks, birds near the construction sites began singing later than they had before the road restrictions. Birds at the other parks showed little change. When normal traffic returned, the first group resumed its earlier singing schedule. The researchers acknowledged that the study covered only one species and one season. Nevertheless, they argued that the temporary road restrictions offered useful evidence for distinguishing the effects of noise from those of light.`,
    question: 'Which finding most directly supports the researchers’ proposal?',
    options: ['The parks had similar vegetation and lighting.', 'The researchers studied only one species during one season.', 'Sound recorders were placed in twelve urban parks.', 'Birds near restricted roads sang later during quieter weeks and earlier again when traffic returned.'],
    answer: 3,
    explanation: 'The change in singing time followed the reduction and return of traffic, directly linking noise levels to singing schedules. Similar lighting helps control an alternative explanation, but alone does not show a response to noise. The sample size and limitations do not directly support the proposed relationship.'
  },
  {
    title: 'The map with missing paths', skill: 'Main purpose',
    text: `A city museum displayed an elegant map drawn by a surveyor in 1882. Its straight streets and carefully labeled squares seemed to offer a complete picture of the growing city. Historian Elena Ruiz compared the map with diaries kept by factory workers. The diaries described footpaths across undeveloped land, informal riverside markets, and gathering places that the map did not record. Ruiz did not conclude that the surveyor had worked carelessly. Official maps were designed primarily to document recognized streets and property boundaries, not every route or meeting place residents used. She placed excerpts from the diaries beside the map in a new exhibit. Together, the sources showed how a document could be accurate for its intended purpose while leaving important aspects of everyday life invisible.`,
    question: 'What is the main purpose of the passage?',
    options: ['To argue that personal diaries are always more reliable than official records', 'To show that historical sources can complement one another by revealing different aspects of a place', 'To explain why the surveyor deliberately hid the locations of informal markets', 'To demonstrate that nineteenth-century cities lacked recognized property boundaries'],
    answer: 1,
    explanation: 'The map records official streets and boundaries, while the diaries reveal informal places and routes. Displaying them together gives a fuller picture. The passage neither ranks diaries as always superior nor claims intentional concealment or an absence of property boundaries.'
  }
];
