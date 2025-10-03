import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="main-title">Logistics, Focus - Last-Mile Delivery Operations</h1>
      <header className="names-header">
        <p className="names">Jacqueline Flynn, Charlotte Liu, Munir Emam, Ellie Wu</p>
      </header>
      <main className="content-section">
        <h2>Thesis Statement</h2>
        <p>We demonstrate the PNW last-mile delivery networks cannot defend against AI-orchestrated attacks by deploying autonomous agents that harvest credentials through phishing, manipulating GPS tracking, and flooding APIs with fake orders across Tacoma to Eastern Washington logistics operations, further validating that networks with weak security verification measures remain vulnerable to multi-vector bot attacks capable of achieving a successful 500+ disruptions within 72 hours.</p>

        <h2>Industry Context</h2>
        <h3>Describing the Industry Ecosystem</h3>
        <p>The logistics industry represents a $9 trillion global market (McKinsey & Company, 2023) with increasingly digitalized operations that leave room for an expansion of attack surface. This complex ecosystem reflects multiple interconnected layers where security vulnerabilities are quickly discovered beneath different integration points.</p>
        <p>Modern logistics operations span across multiple technology generations simultaneously, thus creating composed parts of security landscapes. In recent times, large carriers like UPS and FedEx are implementing modern cloud-based Transportation Management Systems (TMS), however, some regional operations are still using legacy systems (CM Alliance, 2024). Regional carriers use a patchwork of technologies where they operate commercial off-the-shelf (COTS) software, some custom-built solutions developed by themselves, and others with security practices being scattered across the map with varying strength. Independent gig economy drivers operate on the contrary where they invest little to nothing in technology, demonstrate minimal infrastructure investment with Bring Your Own Device (BYOD), and rely on delivery applications that lack the enterprise security controls (AFPLUS, 2024).</p>
        <p>Timely delivery remains prevalent in an executive goal for every logistics operation. Security challenges are often prevailed due to these operations prioritizing delivery speed over careful security measures, creating exploitable gaps for vulnerabilities such as verification and authentication  to creep through (CM Alliance, 2024). This creates a dependency for human-in-the-loop action to take effect despite automation being centralized. Even in the circumstances of higher stress situations, dispatchers and drivers are still the ones to be making decisions regarding critical operations, sacrificing security verification for continuity.</p>
        <p>Carriers are committed to an intertwined nature that affects involvement from shippers, port authorities, customs systems, and retailers which can create a large trust-issue when an attack unfolds. As demonstrated by the 2017 NotPetya cyber invasion on Maersk, a compromise at one node can have a domino effect on a global logistics network scale, which ultimately cost Maersk an exceeding $300 million and an additional disruption in all operations that lasted ten days (Greenburg, 2018).</p>
        <p>With an introduction of IoT proliferation, there has also been an expansion of the attack surface. Modern delivery vehicles all contain numerous connected systems that contain GPS units, telematic devices, scanners, and cameras that provide real-time tracking which create potential entry points for malicious attacks at the same time (AFPlus, 2024). Privacy and compliance is not always guaranteed with a higher risk of physical tampering of devices, data breaches in compromised devices, and even a general lack of security standards and updates to a growing impact of IoT.</p>
        <p>Third-party risk poses the most significant vulnerability vector. The logistic’s ecosystem holds a heavy reliance on software vendors, telematic providers, and API integration partners that introduce opportunities for larger supply chain attacks. From the NotPetya attack, it is evident that with exploitation on third-party risk the downfall can project through compromise of M.E.Doc, the Ukrainian accounting software widely used by these logistics companies, ultimately enabling the attacks to go into the trusted vendor relationships to gain access across the entire system (Greenburg, 2018).</p>

        <h2>Critical Overview for Attack</h2>
        <p>AI driven orchestrated attacks demonstrate to be efficient in its efforts across the security spectrum. With drilling down through these security loopholes catching easy vulnerabilities, they adapt tactics based on target security posture. A weak defense can be at the forefronts of an executed attack because they enable rapid credential compromise whereas strong defense necessitates more sophisticated social engineering and supply chain attack vectors (Brundage et al., 2018). Adaptability of AI can represent a change between traditional attack methods to focusing on single exploitation vectors.</p>

        <h2>Trust Relationships Between Partners</h2>
        <h3>System-to-System Trust</h3>
        <p>The connection between logistics networks to carriers, shippers, warehouse management systems, and customer facing tracking portals are integrated from API integrations. 98% of organizations experience API-related attacks annually, with the most exploited vector being externally-facing APIs.</p>
        <p>The 2024 SolarTrade compromise further reiterates this vulnerability, that attackers utilize AI to inject themselves using malicious code to the logistics software provider’s update system that generates access to the customer information and disrupts the operation entirely across several logistics companies that were in trust with the vendor’s update process (SecureWorld, 2025). The attack proved and validated these trust relationships could enable single compromises that affect the entire system at large across industry segments.</p>
        <h3>Human-to-System Trust</h3>
        <p>Specific to dispatchers and drivers, this exhibits high levels of trust with utilizing system-generated instruction allowing for larger human error. Manual verification of routing, delivery modifications, or scheduling conflicts can occur due to time constraints and established patterns of reliability (CM Alliance 2024). This allows for higher chances of GPS manipulation, fake order insertion, and routing disruption once attackers gain the access to manipulate the situation.</p>
        <h3>Organization-to-Vendor Trust</h3>
        <p>The NotPetya attack exploited trust relationships through M.E.Doc software, where companies allow for automated updates from trusted vendors to occur without further investigation. Since this attack, there has been minimal improvements in industry practices with vendor security practices (BlueVoyant, 2024).</p>
        <h3>Role-to-Role Trust</h3>
        <p>Voice calls, memos, emails, and text messages claiming to originate from dispatch or management rarely go under identity verification because it is assumed of trust and due to operational tempo requirements. This proves an assumed authenticity which creates exploitable attacks for AI-generated decpfakes or social-engineering campaigns (AFPlus, 2024).</p>

        <h2>What’s Your Perspective?</h2>
        <h3>Are You Heavy Users of AI, or Not?</h3>
        <p><strong>Jacqueline:</strong> I use AI to help me understand large pieces of information to gain a better understanding because sometimes I lose track as a whole what some portions could mean with prompts to guide my comprehension. I want to use AI as a tool not for me to entirely be guided by it to do my work for me.</p>
        <p><strong>Munir:</strong> Currently, I’m partially an AI user. I use it to maybe get more information about topics, delve deeper into an issue I’m having. I don’t think the capabilities are there for it to be the one guiding me, but new models do well at providing accurate information and sources so that it’s at least trustworthy to a certain degree.</p>
        <p><strong>Charlotte:</strong> I’m a frequent user of AI tools, which I rely on to help break down complex information and inspire creative thinking. I also turn to AI for support when I’m feeling overwhelmed or stuck, using it as a way to reflect on my emotions and explore possible solutions.</p>
        <p><strong>Ellie:</strong> I use AI quite often, but I usually use it to assist me with learning or completing tasks, rather than directly copying them. For example, it can help me summarize key points when I don't have time to organize a large text. Or it can simplify complex data into easily digestible parts.</p>

        <h2>How Does This Influence How You Think About This Project?</h2>
        <p><strong>Jacqueline:</strong> It influences me to utilize LLMs and AI as a powerful tool and to make our project controlled and organized, so we don’t run into any complications down the line.</p>
        <p><strong>Munir:</strong> A lot of cybersecurity is just persistence, and pattern matching, of which LLMs are great at. This is further amplified when you have to deal with multiple streams of data. AI agents seem like an almost perfect way to deal with these issues.</p>
        <p><strong>Charlotte:</strong> I think it comes down to the level of trust I place in the answers generated by LLMs and other AI tools. While they can be very helpful, I know it’s important to stay objective and remain cautious about potential misinformation or scams. This perspective has influenced me to approach this project differently and to consider the ethical issues that come with using AI.</p>
        <p><strong>Ellie:</strong> I think this project reinforces the idea that AI is best used as a supplementary tool. It can help analyze and organize large amounts of information, but human judgment is still needed to guide its use. It also raises questions about how to design systems where AI can assist humans, rather than completely replace them, especially in the security field.</p>

        <h2>How Will You Be Impacted If This Industry is Attacked?</h2>
        <p><strong>Jacqueline:</strong> If this industry were attacked it would affect me a lot as I am frequently browsing online for necessity items on Amazon or receiving packages from a relative cross country. If affected for a long period of time/the logistics industry as a whole for a specific operation, it would be a concern for security as well.</p>
        <p><strong>Munir:</strong> I think if last-mile delivery were attacked, it would most likely slow down deliveries, leading to a loss of efficiency. Since I do a lot of online shopping this would mean that I might not get my package, or my package is late. This would do detrimental harm to the company, as I might not be a returning customer.</p>
        <p><strong>Charlotte:</strong> My daily purchases and living standard will be impacted harmfully. As a consumer, I can imagine not being able to access the goods I need to maintain my current lifestyle, or losing the ability to sustain the quality of life I have now. It’s not only about being unable to get what I want, but also about how this could shape my overall perception of the place I live.</p>
        <p><strong>Ellie:</strong> If the logistics industry were attacked, my personal life would be severely impacted, as I typically purchase textbooks, electronics, and everyday items online. Even minor errors could cause significant problems, such as delayed delivery of course materials or missed deadlines.</p>

        <h2>What Are the Unique Roles in Your Industry?</h2>
        <ol>
          <li>
            <h4>Delivery Driver</h4>
            <p><strong>Access:</strong> Mobile routing apps, package scanning operations, GPS navigation, customer contact information, proof-of-delivery instructions</p>
            <p><strong>System Permissions:</strong> Delivery status updates, route modification, dispatch communication, report exceptions or issues</p>
            <p><strong>Traits:</strong> Since deliveries are time-sensitive, it's important that drivers focus on efficiency. This will lead to default trust in delivery routing software as well as the instructions they get from dispatch.</p>
          </li>
          <li>
            <h4>Dispatcher</h4>
            <p><strong>Access:</strong> Transportation Management dashboard, real-time GPS tracking for fleets, communication logs with colleagues and partners, and delivery schedules.</p>
            <p><strong>System Permissions:</strong> Assign and modify driver routes, create and cancel delivery orders, broadcast messages to the fleet.</p>
            <p><strong>Traits:</strong> High levels of multitasking, which can induce stress. Since they face a lot of pressure, they tend to believe system data and alerts.</p>
          </li>
          <li>
            <h4>Warehouse Package Handler</h4>
            <p><strong>Access:</strong> The warehouse management system, handheld inventory scanners, sorting systems, and shipping label printers.</p>
            <p><strong>System Permissions:</strong> update inventory counts, assign packages to outbound, scan packages either upon arrival or departure, and print shipping labels.</p>
            <p><strong>Traits:</strong> numb to highly repetitive tasks, and are focused on meeting quotas. Usually, they are less educated than administrators on common cybersecurity awareness.</p>
          </li>
          <li>
            <h4>IT Admin</h4>
            <p><strong>Access:</strong> Full admin privileges to transportation & warehouse management systems, access to API gateways, and user account management systems.</p>
            <p><strong>System Permissions:</strong> Create, delete, and modify user accounts, assign roles, set permissions, and deploy software updates.</p>
            <p><strong>Traits:</strong> Highly skilled at managing modern and legacy systems, and technically skilled, making simple attacks very hard. Usually, they have an implicit trust in third-party vendors.</p>
          </li>
        </ol>

        <h2>Common Personality Traits Enabling Roles</h2>
        <p>Curiosity, flexibility, perseverance, and collaboration were essential qualities that made our roles practical. Our ability to adapt to shifting threats and goals was aided by our curiosity, which enabled us to dive deeper into difficult cybersecurity issues. Strong communication abilities allowed us to integrate technical and strategic points of view, and perseverance made sure we stayed inspired in the face of setbacks. When combined, these characteristics produced a harmonious team dynamic that reflected cybersecurity work in the real world.</p>

        <h2>What Did You Learn From Industry Stakeholders?</h2>
        <p>Stakeholders state that most of the industry’s drivers rely on telematics systems, transportation management software (TMS), GPS-enabled mobile apps, and electronic logging devices (ELDs) to receive route updates and coordinate schedules (Barros, 2024). However, these systems are also seen as some of the most vulnerable components of trucking operations. ELDs appear to be particularly vulnerable, with problems such as insecure Wi-Fi and Bluetooth connections that can allow malware or network intrusions (Smith, 2024).</p>
        <p>Stakeholders also mention that cargo theft and fraud remain persistent threats (Kapadia, 2025). Although large carriers are using AI defense strategies to monitor and detect unusual or abnormal situations, the lack of resources for small operators prevents them from implementing adequate protection strategies, leaving them more exposed. This uneven preparedness highlights the critical gap in readiness for AI threats within the industry.</p>

        <h2>[Blue Sky] What’s Possible With Your Chosen Industry?</h2>
        <h3>To Attack With AI Agents</h3>
        <h4>Possibilities</h4>
        <p>LLM’s already possess strong reasoning capabilities, making them great tools for understanding patterns, and decision-making. AI Agents could also leverage these capabilities to understand logistics semantics, which can be very impactful in identifying the points of failure. Advanced Persistent Threats (APTs) are described to be concealed, long term, highly modular (Cheng et al., 2025). As the attack persists AI agents can be used to process the data and find meaningful vulnerabilities.</p>
        <p>Integration of LLMs can also synthesize voice input, creating a leeway for real-time voice phishing attacks and operations. AI Agents can adapt to natural conversations and even handle questions that are unexpected with a maintained consistency of persona across different levels of dialogue. Examples of this can be seen directly from services like ElevenLabs or PlayHTin cloning voices by collecting voice audio samples. By handling LLMs like this and AI Agents to study basic conversation, attackers could impersonate dispatchers, IT support, or supervisors with high levels of authority. Deep fake voice attacks achieved an estimated 70-80% of success rates when utilized in social engineering attacks (Parsons et al, 2023). However, with the adaptability of AI Agents trying to decipher conversations there may be suspicious pauses mid-way through the conversations that may set off red flags, but most of the time under time pressure logistics personnel rarely implement voice verification protocol (AFPlus, 2024).</p>
        <p>LLMs also hold the capabilities to surpass API security testing with code generation. With quick learning, LLMS and AI agents can identify vulnerabilities and develop custom attacks that are faster than human penetration testers. Models like GPT-4 Code and Claude with computers are high level examples of this case where they both can write functional Python scripts to manipulate API testing, parse through responses, and refine attacks. The limitations to this are that AI agents do struggle with complex multi-step chains with deep understanding where zero-day delivery remains mostly as a human concept. However, 98% of successful API attacks already know vulnerability cases and can exploit rather than novel zero-days, still making AI exploitation a viable case.</p>
        <p>The most significant AI advantage relies heavily on coordinated and pre-meditated multiple attack vectors that work simultaneously which humans cannot achieve at the same level as machine speeds (Brundage et al., 2018). AI orchestration has the capabilities to run phishing campaigns while probing APIs, modify the intensity of GPS spoofing based on detection, and allocate attack optimization based on location in real-time. Orchestration frameworks can run into errors with failure loops that do require intervention, where handling many agents at once can be difficult to do in comparison to a couple. However, even limited coordination where 3-5 agents work simultaneously can still provide significant offense over single vector attacks.</p>

        <h2>What Features Are Needed From an LLM for Your Industry?</h2>
        <h3>To Attack with Agents</h3>
        <p>To be able to effectively attack last-mile delivery systems using an LLM, its most critical features need to revolve around knowledge integration, pattern recognition, real-time data analysis, and reasoning. The LLM needs to be able to scan sensor, routing, and event logs to uncover patterns so that it may predict what attack vectors will work (Chachak, 2025). The LLM should be able to understand and subvert last-mile delivery routing like GPS routing. This means that its pattern recognition and reasoning capabilities need to be high, as well as its output to be fast. Anomaly detection is quite important as many logistic networks generate vast amounts of data from IoT devices, and an LLM would need to be able to analyze the historical data and understand the normal patterns and any deviations from those normal patterns (Conrad, 2025).</p>

        <h2>How Important is Human in The Loop in an Agentic System?</h2>
        <p>Human in the loop (HITL) is very important and plays a pivotal role in agentic systems, especially in logistics, ensuring accurate, safe, and good decision-making. It’s important that the HITL is more than just oversight. HITL has turned into a strategic play where humans can make high-level judgments, maybe do some very complex problem-solving that current LLMS can’t (Selz 2025).</p>
        <p>AI Agents have broad access to tools and APIs to increase confidence in decision-making, but this makes human oversight even more important (Admin 2025). Usually, though, agentic AIs have evaluation loops with escalation in which humans would intervene when the AI flags decisions that are of low confidence. These check loops are even more common when the scenario is accuracy-sensitive, like security (Admin 2025).</p>
        <p>When the AI agent has a workflow that lets it control and evaluate its process with minimal human oversight, it increases the attack surface significantly. The agentic system can make and execute decisions for an extended period of time to exploit gaps (Selz 2025). If Agents don't need to send human errors, and plans can be scaled up rapidly (Selz, 2025). But this does mean that it gives agents more opportunities to make bad decisions.</p>
        <p>It's important that an Agentic System should incorporate some form of Human in the Loop, so that when agents have those low confidence moments, humans are there to give complex reasoning. But too much oversight could lead to scaling up attacks being significantly diminished. This means that Agentic Systems should have HITL to the degree that it is only for getting out of a ditch, rather than routine oversight.</p>

        <h2>How Should AI Agents be Managed, Observed, Controlled?</h2>
        <p>We want to implement a hierarchical system with a strategic orchestrator that coordinates specialized AI agents to handle specific attacks via phishing, GPS, and API exploitation. This level of strategy and manipulation requires balancing the automotive state and human overview for the simulations to be controlled. Allowing for a “supervisory control” where humans are capable of authoritative decision making, but AI agents are executing tactical behavior and operations autonomously (Schneiderman, 2020). Consistently logging every test the AI agent makes will accomplish the reasoning behind each action and pursue an understanding of improvement. To do so, we will record prompts to the LLM, generative phishing, outputs, and attack success rates to ensure proper audit trails. We also want to ensure that there is a controlled location restriction only in Washington to practice AI safety, further elaborating we don’t actually target any real harm.</p>

        <h2>How Important is Evaluation of the AI Agents?</h2>
        <p>Given the AI Agent autonomy in running automation programs, evaluation is essential for proper functioning and analyzing to control AI Agent behavior. Evaluation measures the alignment with designer intent and company needs while also ensuring compliance with regulations and ethical principles. Additionally, it helps engineers check if AI Agents are meeting requirements, with possible areas of optimization and maintenance for better quality. (Stryker & Shmueli-Scheuer, 2025).</p>

        <h2>What Are the Constraints of Running Attack with AI Agents?</h2>
        <p>A Good Risk Management framework promotes clear incident response, accountability, and traceability, which in turn translates to strong logging and reviewing any abnormality (Tabassi, 2023). Most major mailbox providers require that bulk senders authenticate themselves so that they can keep spam complaints below 0.3%. This significantly reduces the chance of high-volume phishing attacks reaching users (Taylor, 2024). Fleets can use a multitude of cross-checks, like map matching, steering angle, etc, to detect spoofed trajectories that might split from predictions or vehicle dynamics (Yin, 2023). These measures might force attackers to maintain sensor consistency with SOTA systems.</p>

        <h2>Citations</h2>
        <p>Admin, I. (2025, September 2). The rise of Agentic Ai: Why human-in-the-loop still matters. iMerit. <a href="https://imerit.net/resources/blog/the-rise-of-agentic-ai-why-human-in-the-loop-still-matters-una/" target="_blank" rel="noopener noreferrer" className="citation-link">https://imerit.net/resources/blog/the-rise-of-agentic-ai-why-human-in-the-loop-still-matters-una/</a></p>
        <p>Barros, L. (2024, October 26). AI provides actionable data to trucking companies. Truck News. <a href="https://www.trucknews.com/technology/ai-provides-actionable-data-to-trucking-companies/1003190468/" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.trucknews.com/technology/ai-provides-actionable-data-to-trucking-companies/1003190468/</a></p>
        <p>Brundage, M., Avin, S., Clark, J., Toner, H., Eckersley, P., Garfinkel, B., ... & Zeitzoff, T. (2018). The malicious use of artificial intelligence: Forecasting, prevention, and mitigation. Future of Humanity Institute, University of Oxford. <a href="https://arxiv.org/abs/1802.07228" target="_blank" rel="noopener noreferrer" className="citation-link">https://arxiv.org/abs/1802.07228</a></p>
        <p>Chachak, E. (2025, July 24). How AI and Machine Learning are shaping cybersecurity in the transportation industry. CyberDB. <a href="https://www.cyberdb.co/how-ai-and-machine-learning-are-shaping-cybersecurity-in-the-transportation-industry/" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.cyberdb.co/how-ai-and-machine-learning-are-shaping-cybersecurity-in-the-transportation-industry/</a></p>
        <p>Cheng, W., Zhu, T., Jing, S., Mei, J.-P., Ma, M., Jin, J., & Weng, Z. (2025, July 22). OMNISEC: LLM-driven provenance-based intrusion detection via retrieval-augmented behavior prompting. arXiv.org. <a href="https://arxiv.org/abs/2503.03108" target="_blank" rel="noopener noreferrer" className="citation-link">https://arxiv.org/abs/2503.03108</a></p>
        <p>CM Alliance. (2024). Cybersecurity strategies for the logistics industry. <a href="https://www.cm-alliance.com/cybersecurity-blog/cybersecurity-strategies-for-the-logistics-industry" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.cm-alliance.com/cybersecurity-blog/cybersecurity-strategies-for-the-logistics-industry</a></p>
        <p>Conrad, R. (2025, January 30). AI solutions for Cybersecurity in Logistics. RTS Labs. <a href="https://rtslabs.com/ai-solutions-logistics-cybersecurity" target="_blank" rel="noopener noreferrer" className="citation-link">https://rtslabs.com/ai-solutions-logistics-cybersecurity</a></p>
        <p>Kapadia, S. (2025, August 22). Logistics management is leveling up with Generative AI. Trucking Dive. <a href="https://www.truckingdive.com/news/supply-chains-genai-natural-language-tms/758397/" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.truckingdive.com/news/supply-chains-genai-natural-language-tms/758397/</a></p>
        <p>McKinsey & Company. (2023). The future of logistics: Digital transformation and cybersecurity challenges. McKinsey Global Institute.</p>
        <p>Parsons, T., Sharevski, F., Thuong, H., & Visscher, C. (2023). Deepfake voice phishing: An empirical investigation of human susceptibility to AI-generated voices. Journal of Cybersecurity, 9(1), tyac014.</p>
        <p>Selz, D. (2025). How human-in-the-loop is evolving with AI agents. Built In. <a href="https://builtin.com/articles/human-in-the-loop-evolution" target="_blank" rel="noopener noreferrer" className="citation-link">https://builtin.com/articles/human-in-the-loop-evolution</a></p>
        <p>Smith, S. (2024, March 28). Cybersecurity threats in trucking: Researchers warn of Eld risks. TruckingTrend. <a href="https://www.truckingtrend.com/cybersecurity-risks-in-trucking%3A-experts-warn-of-eld-vulnerabilities" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.truckingtrend.com/cybersecurity-risks-in-trucking%3A-experts-warn-of-eld-vulnerabilities</a></p>
        <p>Stryker, C., & Shmueli-Scheuer, M. (2025, September 12). What is AI agent evaluation?. IBM. <a href="https://www.ibm.com/think/topics/ai-agent-evaluation" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.ibm.com/think/topics/ai-agent-evaluation</a></p>
        <p>Tabassi, E. (2023, January 26). Artificial Intelligence Risk Management Framework (AI RMF 1.0). NIST. <a href="https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10" target="_blank" rel="noopener noreferrer" className="citation-link">https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-ai-rmf-10</a></p>
        <p>Taylor, D. (2024). An overview of bulk sender changes at Yahoo/Gmail | AWS Messaging Blog. An Overview of Bulk Sender Changes at Yahoo/Gmail. <a href="https://aws.amazon.com/blogs/messaging-and-targeting/an-overview-of-bulk-sender-changes-at-yahoo-gmail/" target="_blank" rel="noopener noreferrer" className="citation-link">https://aws.amazon.com/blogs/messaging-and-targeting/an-overview-of-bulk-sender-changes-at-yahoo-gmail/</a></p>
        <p>Yin Y, Zhang J, Guo M, Ning X, Wang Y, Lu J. Sensor Fusion of GNSS and IMU Data for Robust Localization via Smoothed Error State Kalman Filter. Sensors (Basel). 2023 Apr 1;23(7):3676. doi: <a href="https://doi.org/10.3390/s23073676" target="_blank" rel="noopener noreferrer" className="citation-link">10.3390/s23073676</a>.</p>

        <h2>LLM Disclosure</h2>
        <p>NotebookLM to process sources.</p>
        <p>Perplexity in finding relevant articles.</p>
        <p>Claude helped synthesize research articles using the prompt “Can you provide me with a better understanding of what this means?” when there was language being used that I was unfamiliar with or couldn’t comprehend at first read.</p>
      </main>
      <footer className="app-footer">
        <p className="course-info">INFO 492 B: Agentic Cybersecurity with AI and Large Language Models</p>
        <div className="contact-info">
          <p>Contact Us:</p>
          <ul>
            <li>Jacqueline Flynn: <a href="mailto:jacqfly@uw.edu">jacqfly@uw.edu</a></li>
            <li>Charlotte Liu: <a href="mailto:lsh355@uw.edu">lsh355@uw.edu</a></li>
            <li>Munir Emam: <a href="mailto:memamy3@uw.edu">memamy3@uw.edu</a></li>
            <li>Ellie Wu: <a href="mailto:yuxinw24@uw.edu">yuxinw24@uw.edu</a></li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
