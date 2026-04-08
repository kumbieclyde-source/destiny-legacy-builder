import { useState, useEffect } from 'react';
import { ChevronDown, Check, Timer } from 'lucide-react';

export default function DestinyMillennium() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(12); // 38/50 spots taken

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds === 0) {
          if (prev.minutes === 0) return prev;
          return { minutes: prev.minutes - 1, seconds: 59 };
        }
        return { ...prev, seconds: prev.seconds - 1 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#1a2a3a] text-white font-sans">
      {/* Top Bar - Urgency */}
      <div className="bg-[#FF4D4D] text-white py-2 text-center font-bold text-sm md:text-base uppercase tracking-wider sticky top-0 z-50 shadow-lg">
        <div className="container flex justify-center items-center gap-2">
          <Timer size={18} className="animate-pulse" />
          <span>Warning: Enrollment Closes In {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}</span>
        </div>
      </div>

      {/* Hero Section */}
      <header className="relative pt-12 pb-20 bg-gradient-to-b from-[#2a3a4a] to-[#1a2a3a]">
        <div className="container relative z-10 max-w-5xl mx-auto text-center">
          <div className="inline-block mb-6 px-6 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
            <span className="text-[#D4AF37] font-bold tracking-widest uppercase text-sm">For Faith-Driven Entrepreneurs Only</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.9] mb-8 text-white uppercase drop-shadow-2xl">
            How To Build A <span className="text-[#D4AF37] underline decoration-4 underline-offset-8 decoration-red-600">Kingdom Legacy</span> Without Losing Your Soul
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
            The Exact "Blueprint" Used By 500+ Christian Founders To Scale Their Impact & Income... <span className="text-white font-bold bg-red-600/20 px-2">Even If You're Currently Burned Out.</span>
          </p>

          <div className="relative w-full max-w-4xl mx-auto aspect-video bg-black rounded-xl shadow-[0_0_50px_rgba(212,175,55,0.2)] border-4 border-white/10 overflow-hidden group cursor-pointer mb-12">
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-all">
              <div className="w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 animate-pulse">
                <span className="text-white ml-2 text-3xl">▶</span>
              </div>
            </div>
            <img src="https://via.placeholder.com/1200x675?text=VSL+Video" alt="VSL Thumbnail" className="w-full h-full object-cover opacity-80" />
          </div>

          <div className="inline-block px-6 py-3 bg-[#D4AF37] text-[#1a2a3a] rounded-lg font-bold hover:opacity-90 transition-opacity">
            Watch The Full Presentation
          </div>
        </div>
      </header>

      {/* SECTION 1: IS IT EASY? */}
      <section className="py-20 bg-[#1a2a3a] border-t border-white/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Is It Easy? <span className="text-[#D4AF37]">Yes. It's Simple. Here's Exactly How It Works.</span>
          </h2>

          <p className="text-lg text-gray-300 mb-12 text-center">
            The Destiny program isn't complicated. It's a clear, step-by-step system that anyone can follow.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                step: 1,
                title: 'Clarify Your Dream',
                lesson: 'Lesson 1 - The Dream',
                description: 'You\'ll discover what you truly want. Not what others want for you. Not what seems practical. What you actually dream of achieving. We give you the exact worksheets and questions to uncover this.',
              },
              {
                step: 2,
                title: 'Create Your Vision',
                lesson: 'Lesson 2 - The Vision',
                description: 'Your dream becomes real when you can see it clearly. You\'ll learn the six principles of vision that turn vague desires into crystal-clear targets. You\'ll be able to articulate your vision so clearly that others can see it too.',
              },
              {
                step: 3,
                title: 'Accept the Cost',
                lesson: 'Lesson 3 - The Commitment',
                description: 'Every dream has a price. But here\'s what most people don\'t understand: the cost of a big dream and the cost of no dream is the same. It\'s your lifetime. This lesson shows you how to make peace with the cost and move forward with clarity.',
              },
              {
                step: 4,
                title: 'Build Your Goals',
                lesson: 'Lesson 4 - The Goal',
                description: 'Your vision becomes achievable when you break it into goals. You\'ll learn the Goal Formula that turns big visions into specific, measurable, achievable targets. This is where most people get stuck. We remove that obstacle.',
              },
              {
                step: 5,
                title: 'Create Your Mission',
                lesson: 'Lesson 5 - The Mission',
                description: 'Your goals become unstoppable when you have a mission that drives you. You\'ll craft a powerful mission statement that defines your direction, your vehicle, your commitment, and your positioning. This becomes your North Star.',
              },
              {
                step: 6,
                title: 'Achieve Your Destiny',
                lesson: 'Lesson 6 - The Destiny',
                description: 'This is where everything comes together. You\'ll learn the leadership principles, the confidence formulas, the team-building strategies, and the financial principles that allow you to achieve greatness and build a legacy.',
              },
            ].map((item) => (
              <div key={item.step} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#1a2a3a]">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-sm text-[#D4AF37] mb-3">{item.lesson}</p>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">That's it. Six lessons. Six steps. One clear path.</h3>
            <ul className="space-y-3 text-gray-300 mb-6">
              <li className="flex items-center gap-3">
                <Check size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Worksheets and planning templates</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Specific formulas and principles</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Real-world examples</span>
              </li>
              <li className="flex items-center gap-3">
                <Check size={20} className="text-[#D4AF37] flex-shrink-0" />
                <span>Step-by-step action plans</span>
              </li>
            </ul>
            <p className="text-lg text-gray-300">You don't need to figure it out. The path is already laid out. You just follow it.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOES IT WORK? */}
      <section className="py-20 bg-[#0f1a2a] border-t border-white/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Does It Work? <span className="text-[#D4AF37]">Yes. Here's the Proof.</span>
          </h2>

          <p className="text-lg text-gray-300 mb-12 text-center">
            This isn't theory. This isn't wishful thinking. These are real results from real people who applied these principles.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { metric: '500+', label: 'Students Transformed' },
              { metric: '98%', label: 'Satisfaction Rate' },
              { metric: '$50M+', label: 'Generated by Graduates' },
              { metric: '2%', label: 'Refund Rate' },
            ].map((item) => (
              <div key={item.label} className="bg-white/5 border border-white/10 rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-[#D4AF37] mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            {[
              {
                name: 'Bryce Raley',
                title: 'CEO, The Marketing Squad',
                quote: 'I first heard Peter speak 20-25 years ago. I purchased the Destiny program and my business partners and I used it to create our mission and vision statements. It has helped me become a goal setter and dreamer and operate with a sense of Destiny.',
                result: 'Built a thriving business with clear mission and vision guiding every decision.',
              },
              {
                name: 'Jamine Cross',
                title: 'CEO, foundHER theHEReffect.com',
                quote: 'Seven years ago, I asked Peter for advice. He told me to start a multi-level marketing company and read his book. Today, our business has successfully transitioned into an 8-figure multi-level marketing enterprise. We owe much of our success to Dr. Daniels\' insightful counsel.',
                result: 'Built an 8-figure business following the principles.',
              },
              {
                name: 'Claudio Gonzalez',
                title: 'Mortgage Broker',
                quote: 'I was this close to giving up on my dream and quitting selling forever when Peter Daniels shared with me his secrets for tapping into the creative imagination of the subconscious mind. It catapulted me from absolute failure to the top sales producer of a multi-billion sales organization.',
                result: 'Went from near-failure to top performer.',
              },
            ].map((testimonial) => (
              <div key={testimonial.name} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                <div className="mb-3">
                  <div className="font-bold text-white">{testimonial.name}</div>
                  <div className="text-sm text-[#D4AF37]">{testimonial.title}</div>
                </div>
                <div className="text-sm text-gray-400">Result: {testimonial.result}</div>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              <span className="font-bold text-white">These aren't outliers. These are the norm.</span>
            </p>
            <p className="text-gray-300">
              When you apply these principles, results follow. It's not magic. It's cause and effect. Apply the principles → Get the results.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3: CAN I DO IT? */}
      <section className="py-20 bg-[#1a2a3a] border-t border-white/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
            Can I Do It? <span className="text-[#D4AF37]">Yes. You Can. Here's Why.</span>
          </h2>

          <p className="text-lg text-gray-300 mb-12 text-center">
            You might be thinking: "This sounds great, but can I actually do this? I've tried other programs. I've failed before. What makes this different?"
          </p>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
            <p className="text-xl font-bold text-white mb-6">Here's the truth: <span className="text-[#D4AF37]">The only people who fail are those who don't apply the principles.</span></p>
            <p className="text-gray-300">This program removes every barrier between you and success.</p>
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                barrier: "I don't know where to start",
                solution: 'The 6 lessons give you a clear starting point. You don\'t have to figure it out. You just follow the path.',
              },
              {
                barrier: "I don't have the right background or education",
                solution: 'The principles work regardless of your background. Bryce Raley used them. Jamine Cross used them. Claudio Gonzalez used them. They came from different backgrounds, different industries, different starting points. The principles work for anyone who applies them.',
              },
              {
                barrier: "I don't have time",
                solution: 'The program is designed for busy people. Worksheets you can complete when it fits your schedule. No live classes. No strict timelines. You control the pace.',
              },
              {
                barrier: "I'm not sure if it will work for me",
                solution: '100% Money-Back Guarantee. If you don\'t see results in 60 days, we refund every penny. No questions asked. You have nothing to lose.',
              },
              {
                barrier: "I'm afraid of failing again",
                solution: 'This isn\'t about motivation or willpower. This is about applying proven principles. When you apply the principles, failure isn\'t an option. It\'s cause and effect.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-[#D4AF37] font-bold flex-shrink-0">✓</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-white mb-2">Barrier #{idx + 1}: "{item.barrier}"</h3>
                    <p className="text-gray-300">Solved. {item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-transparent border border-[#D4AF37]/30 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Here's what makes this different from other programs:</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">•</span>
                <div>
                  <span className="font-bold text-white">It's Biblical.</span> The principles aren't based on the latest trends or fads. They're based on biblical wisdom that has stood the test of time.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">•</span>
                <div>
                  <span className="font-bold text-white">It's Practical.</span> Every lesson includes worksheets, formulas, and step-by-step action plans. You're building your actual plan as you go.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">•</span>
                <div>
                  <span className="font-bold text-white">It's Proven.</span> 500+ students have applied these principles. 98% are satisfied. $50M+ has been generated by graduates.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">•</span>
                <div>
                  <span className="font-bold text-white">It's Complete.</span> You're getting the complete system, not just one piece of the puzzle.
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#D4AF37] font-bold flex-shrink-0">•</span>
                <div>
                  <span className="font-bold text-white">It's Supported.</span> You get access to the World Changers Community. You're not doing this alone.
                </div>
              </li>
            </ul>
          </div>

          <div className="mt-12 bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-xl text-gray-300 mb-4">
              You can do this. Not because you're special. Not because you're different. But because <span className="font-bold text-white">the principles work for anyone who applies them.</span>
            </p>
            <p className="text-lg text-[#D4AF37] font-bold">The only question is: Are you ready to apply them?</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0f1a2a] to-[#1a2a3a] border-t border-white/10">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Ready to Build Your Kingdom Legacy?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join 500+ faith-driven entrepreneurs who are scaling their impact and income without losing their soul.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-[#D4AF37] text-[#1a2a3a] rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
              Enroll Now - $997 Early Bird ({spotsLeft} spots left)
            </button>
            <button className="px-8 py-4 border-2 border-[#D4AF37] text-[#D4AF37] rounded-lg font-bold text-lg hover:bg-[#D4AF37]/10 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
