---
layout: post
custom_excerpt: Because I had no choice
excerpt_image: /assets/blog-images/2026-01-15/idk.png
---
<figure>
    <img class="hero" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/idk.png"/>
</figure>

# Choosing an AI assistant in 2026
Despite my best efforts to abstain from using AI chatbots and assistance, it seems like I can abstain no more. A course that I'm taking this semester requires **heavy** use of AI in an exploratory role, seeing what tools and workflows work best for software development and what don't.

I'm not blind towards the industry I'm working towards - new hires are expected to be proficient in using AI tools before they're even considered. You're "losing out" if you're NOT using assistants to help with your studying or work. Statements I'm sure you've heard before. I'm not a luddite - I do believe that these tools *can* and even *will* seismically shift the way we go about work in a positive way. The reservations I have about AI is not the technology itself (Machine Learning is a wonderful field that has improved lives significantly - AI I believe is just another prong of that), but rather about the way these large corporations have gone about in attaining it.

Companies like OpenAI and Meta seem to frankly just not give a shit:

* Stealing [books](https://arstechnica.com/tech-policy/2025/12/openai-desperate-to-avoid-explaining-why-it-deleted-pirated-book-datasets/), [art](https://www.forbes.com/sites/bernardmarr/2023/08/08/is-generative-ai-stealing-from-artists/), [information](https://www.businessinsider.com/openai-chatgpt-generative-ai-stole-personal-data-lawsuit-children-medical-2023-6?op=1) to train models 
* Recklessly building datacenters, [draining local potable water supplies](https://www.forbes.com/sites/kensilverstein/2026/01/11/americas-ai-boom-is-running-into-an-unplanned-water-problem/)
* Whatever the hell [grok is doing](https://www.bloomberg.com/news/articles/2026-01-07/musk-s-grok-ai-generated-thousands-of-undressed-images-per-hour-on-x)

<details>
<summary>An aside on water use</summary>
<p>
There's a lot of contention about AI water use. Why is it even an issue?

Well, many data centers use <a href="https://www.accountabilityconsole.com/newsletter/articles/ai-data-centers-and-potable-water/">potable water supplies</a> from municipal systems. These water bodies are limited in throughput. A spike in usage means that more water is evaporated (because many data centers use *evaporative cooling*) - this in turn results in more water being in the atmosphere rather than in water bodies. The water in the atmosphere is not always guaranteed to fall back to where it came from - it goes to oceans and other places. Build enough data centers and I think you get the picture.

It's not a scarcity issue - at this moment we have enough water. It's a resource allocation issue. This is an issue that can be fixed with proper planning. I believe that companies must be aware of their effect on the community and take that into account. That's why to me, it's ethically iffy to support companies that churn out data centers with reckless abandon.
</p>
</details>

It seems that all of these companies providing LLMs are guilty as sin. It's the modus operandi of Big Tech - iterate and develop at any cost, capture market share, and deal with the consequences afterward. And by dealing with consequences, I mean something like paying a [15 million Euro fine](https://www.reuters.com/technology/italy-fines-openai-15-million-euros-over-privacy-rules-breach-2024-12-20/) as a company that recently did a [6.6 billion US dollar funding round](https://fortune.com/2024/10/02/openai-officially-raises-6-6-billion-funding-deal-157-billion-valuation-sam-altman-thrive-capital/). That's about 0.26% of that by the way.

On top of that, I do have a personal vendetta; AI has made the internet a vastly less-useful resource. New webpages are inundated with AI slop and [things like this](https://github.com/harry0703/MoneyPrinterTurbo) just make it worse. The internet seems rife with it, to the point where I'm questioning what happens when AI is trained on AI. A convergence of slop I believe. 

# So what do I do?
My main objective of this is to find a LLM provider that is **ethical**. That is,
1. Acknowledgement of environmental toll, and concrete steps taken to mitigate/offset it.
2. Acknowledgement of rights holders (authors, artists) when it comes to training data.
3. Safeguards against harmful material (radicalization, CSAM, etc). At the very least a model that won't help you kill yourself. (optional)
4. Privacy. Might be a stretch. (optional)

Note that I'm not evaluating features or quality by any means.

## OpenAI
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/chatgpt.png"/>
</figure>

**Environment** - Seem to actively downplay water usage and electricity. Sure, Sam Altman claims a query uses "0.000085 gallons of water; roughly  one-fifteenth of a teaspoon", but we all know that inference/running queries is *not* where most of the usage is. It's in training. And there have been no acknowledgements/statements on that. On top of that, the statement does not address that some queries [fire off additional queries](https://llmrefs.com/blog/chatgpt-system-prompt-leak). We haven't event talked about image generation yet. [FAIL]

**Training Material** - Current lawsuits on [copyright theft](https://news.bloomberglaw.com/ip-law/openai-risks-billions-as-court-weighs-privilege-in-copyright-row). [FAIL]

**Safety** - Several scandals about [ChatGPT encouraging suicide](https://edition.cnn.com/2025/11/06/us/openai-chatgpt-suicide-lawsuit-invs-vis). Remember when it got super sycophantic and ChatGPT-induced psychosis [became a thing](https://edition.cnn.com/2025/09/05/tech/ai-sparked-delusion-chatgpt)? Yea that was fun. Either way, OpenAI does seem to be [making an effort](https://openai.com/safety/) towards safety. Whether that will be adequate is for time to tell. [MEH]

## Meta
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/meta.png"/>
</figure>

**Environment** - Meta releases a sustainability report every year. They at least seem to be *thinking* about it. Their (lofty) goal is to achieve [net zero emissions and become water postive by 2030](https://sustainability.atmeta.com/). But, they're also planning on constructing [data centers that consume electricity in the scale of gigawatts](https://ppc.land/meta-confronts-sustainability-tensions-amid-massive-ai-infrastructure-expansion/). Who knows, maybe they'll do it. Either way, Meta's data centers in the here and now still [drain the taps for local residents](https://www.nytimes.com/2025/07/14/technology/meta-data-center-water.html) and [inflate energy bills](https://www.cnbc.com/2025/11/26/ai-data-center-frenzy-is-pushing-up-your-electric-bill-heres-why.html). As an aside, electricity bills increasing feels more like an "America" problem than a "data center" problem. [MEH]

**Training Material** - [Here we go again](https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-staff-torrented-nearly-82tb-of-pirated-books-for-ai-training-court-records-reveal-copyright-violations) [FAIL]

**Safety** - Meta has introduced [parental guards](https://about.fb.com/news/2025/10/teen-ai-safety-approach/) in response to [leaked policies](https://www.forbes.com/sites/douglaslaney/2025/08/17/alternate-approaches-to-ai-safeguards-meta-versus-anthropic/) that were shockingly permissive. Meta's track record is not good, and I'm inclined to believe that this was done to keep the Chatbot as engaging as possible to maximize value. But that is my own bias - take it as you will after [FAIL]

## Google
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/google.png"/>
</figure>


**Environment** - Google seems to be generally transparent when it comes to the environmental toll of AI. This [article](https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference) summarizes a [techinal paper](https://arxiv.org/abs/2508.15734) that they've released that discusses the footprint of AI. They discuss how their data center operations take into account of the local watershed, energy efficiency, and more. The article isn't peer reviewed, and still this is only taking into account of inference. Additionally, their claims on water/energy consumption is only on the *median*. Color me skeptical. This is still leagues above Meta and especially OpenAI's approach. I'll give it a meagre pass. [PASS]

**Training Material** - I think you'd be hard-pressed to find a AI model/company that hasn't [faced](https://www.cio.com/article/2069449/french-regulator-fines-google-271m-over-generative-ai-copyright-issue.html) [lawsuits](https://www.reuters.com/legal/litigation/google-sued-by-us-artists-over-ai-image-generator-2024-04-29/) regarding training materials. Couldn't find anything about Google pirating their training material though, so I'll give them that. [MEH]

**Safety** - Again, seems pretty [transparent](https://deepmind.google/blog/advancing-geminis-security-safeguards/). Their safeguards seem to be strict to a point where people complain online. Whether that's good or bad is up to you and how you use it. [PASS]

## Microsoft
Microsoft has copilot, but copilot is mostly [powered by OpenAI's models](https://www.microsoft.com/en-us/microsoft-365/blog/2025/09/24/expanding-model-choice-in-microsoft-365-copilot/). They did have some [AI models](https://www.microsoft.com/en-us/research/blog/using-deepspeed-and-megatron-to-train-megatron-turing-nlg-530b-the-worlds-largest-and-most-powerful-generative-language-model/) a while back, but none that are really an analog to current-day models and how they're exposed. But, they are still worth talking about as they're still training [new models](https://www.microsoft.com/en-us/research/story/advancing-ai-for-the-physical-world/). Whether they come up with a new LLM chatbot is still unclear. With that said,

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/microsoft.png"/>
</figure>

**Environment** - Microsoft looks to be at the forefront of tackling this data center issue - voluntarily taking on [higher electricity bills](https://edition.cnn.com/2026/01/13/tech/microsoft-ai-data-centers-electricity-bills-plan) to prevent spikes in bills, furthermore pledging to cover costs of improving the existing grid. On top of that, a concrete plan to [curb impact of data center water use](https://www.reuters.com/business/microsoft-launches-data-center-initiative-limit-power-costs-water-use-2026-01-13/) and efforts to decrease [water usage to zero](https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/). Microsoft has not released any data regarding the footprint of a prompt or training a model. Either way, they seem committed and transparent. [PASS]

**Training Material** - More claims of [piracy](https://www.reuters.com/sustainability/boards-policy-regulation/microsoft-sued-by-authors-over-use-books-ai-training-2025-06-25/). They've also announced ["Copilot Copyright Commitment"](https://blogs.microsoft.com/on-the-issues/2023/09/07/copilot-copyright-commitment-ai-legal-concerns/) which states that they will"assume responsibility for the potential legal risks involved" on using generated copilot output. This is insanely odd to me and almost akin to admitting that chatbot output is/potentially can be illegal on the grounds of infringement. But go off I guess. [FAIL]

**Safety** - As per the norm there are [safeguards and policies](https://learn.microsoft.com/en-us/copilot/microsoft-365/microsoft-365-copilot-privacy) which attempt to mitigate potential damage. Old case of it egging on self-harm, but can't find much cases in 2025. They seem to be rather strict on mitigating these cases. [PASS]

## Anthropic
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/anthropic.png"/>
</figure>

**Environment** - Anthropic's concerns seem to be set on [building out and expanding](https://www.anthropic.com/news/build-ai-in-america) data centers across the US. The statements and reports I can find online are mostly related to this. They seem to have a strong focus on America "winning" the AI race - and their vision to achieve that would involve relaxing zoning laws and building out more and more energy infrastructure. There is a distinct lack of talk about sustainability and environmental impact, especially as a company that claims to be a beacon of responsibility in AI. [BIG FAIL]

**Training Material** - They got fined [1.5 billion for piracy](https://www.bbc.com/news/articles/c5y4jpg922qo)

**Safety** - At the very least Anthropic seems to be the one championing AI safety - they have a [responsible scaling policy](https://www.anthropic.com/rsp-updates) (nope it's not about the environment) that details how they secure their bots. Their [core views on AI safety](https://www.anthropic.com/news/core-views-on-ai-safety) read well and make sense. In the crop of AI companies, they do seem to be one of the more transparent ones in this sense. [PASS]

## Deepseek

<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/deepseek.png"/>
</figure>

**Environment** - DeepSeek's models seem to be more efficient during the training phase, but [worse during inference](https://www.technologyreview.com/2025/01/31/1110776/deepseek-might-not-be-such-good-news-for-energy-after-all/). They notably caused Nvidia shares to sink when they publicized the cost of training DeepSeek-V3, claiming that training the model required far less infrastructure than normal.They have not published any sustainability reports or have made statements about their data centers. I would err on the side of caution. [MEH?]

**Training Material** - Deepseek says that data in the pre-training stage is ["mainly collected from publicly available online information and authorised third-party data"](https://archive.ph/TRiG3#selection-1137.172-1141.91). If this is true, it would be the only provider so far to actually get authorisation. However, I am unsure on the difference between the "pre-training" stage and the "training" stage - the statement seems quite specifically worded. There really isn't much information on this from Deepseek, so again, I'd err on the side of caution. [MEH?]

**Safety** - It seems that Deepseek are lacking behind their contermporaries in this - their safety guardrails [failed many tests](https://www.wired.com/story/deepseeks-ai-jailbreak-prompt-injection-attacks/) by researchers.

## Mistral
<figure>
    <img class="blog-img" src="{{ site.baseurl }}/assets/blog-images/2026-01-15/mistral.png"/>
</figure>

**Environment** - As the image says, a [report](https://mistral.ai/news/our-contribution-to-a-global-environmental-standard-for-ai) that not just takes into account inference on AI, but on its full lifecycle from conception to consumption. If not the full picture, the largest one to date. They also suggest ways to measure impact by amortizing inference. In terms of environmental transparency, Mistral is leading the way.

**Training Material** - The cofounder of Mistral, , was implicated with the big Meta [piracy hoohaa](https://www.liberation.fr/economie/economie-numerique/un-des-cofondateurs-de-mistral-ai-accuse-davoir-pirate-des-millions-de-livres-quand-il-travaillait-chez-meta-20251222_RGFHNU37AFFQTENP5PH6RARYKQ/). Also see [this](https://www.vanityfair.com/news/story/meta-ai-lawsuit) (ctrl-F his name ;). Getting past that, Mistral *insists* it only uses data that is publicly available on the internet in their [privacy policy](https://legal.mistral.ai/terms/privacy-policy). Whether that includes anna's archive is up to you to decide. The EU seems to be [cracking down](https://www.france24.com/en/tv-shows/tech-24/20250711-eu-orders-ai-companies-to-clean-up-their-act-stop-using-pirated-datanw) on use of pirated material, though.

**Safety** - There are [guardrails](https://docs.mistral.ai/capabilities/guardrailing) - as to their efficacy I cannot tell.


# Conclusion
Well if you're using AI you just have to accept that these companies have profited off pirating vast quantities of material and/or using them without express permission. It's actually quite hard to see AI without it - LLMs are almost rapacious in their hunger for training material, and feeding them the wealth of information that lives online and in our books seems like a natural step. But there has to have been a better way to achieve this than how these companies went about it.

Some companies are better for the environment than others, and surprisingly Microsoft pulled through on that one. Though copilot just uses OpenAI anyway.

All of the companies have AI safeguards, with some of them being more on the forefront of research and safety features. But prompt injections and "jailbreak" prompts are still rife and are a problem that has not been solved yet. I'm not sure it ever will be solved without crippling usage. Again, you'll just have to accept that these tools are perhaps too powerful for our own good.

Privacy was not even talked about - data leakage has been reported in all major providers. Unless you're using a enterprise-level subscription with separated information (microsoft offers this), it's a risk that you will have to accept. Privacy-focused individuals should be using offline and self-hosted LLMs anyway. Also worth noting that Mistral, being a French firm, is subject to GDPR regulations as well.

Personally, I have a larger focus on mitigating the environmental toll that these companies can cause. I believe that Mistral is the way to go in this regard - they were the most transparent. They also have a focus on using smaller models for specific use cases, in order to increase overall efficiency. On top of that, I have more faith in the EU in managing and regulating AI over the wild wild west techno-hellscape that is America. Of course, I don't think Mistral has the best model (yet). But I don't really care.
