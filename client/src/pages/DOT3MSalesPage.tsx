import { Check, Timer } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function DOT3MSalesPage() {
  const [timeLeft, setTimeLeft] = useState({ minutes: 14, seconds: 59 });

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
                description: 'Your goals become powerful when they\'re connected to a mission bigger than yourself. You\'ll discover your unique mission—the reason you were put on this earth to do this work.',
              },
              {
                step: 6,
                title: 'Live Your Destiny',
                lesson: 'Lesson 6 - The Destiny',
                description: 'When you align your dream, vision, commitment, goals, and mission, you\'re living your destiny. This is where fulfillment, impact, and income all converge. This is the life you were meant to live.',
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-[#D4AF37] rounded-full flex items-center justify-center font-bold text-[#1a2a3a]">
                  {item.step}
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.title}</h3>
                  <p className="text-sm text-[#D4AF37] mb-3 font-semibold">{item.lesson}</p>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white/5 border border-white/10 rounded-lg p-8 text-center">
            <p className="text-lg text-gray-300 mb-4">
              Each lesson includes worksheets, formulas, and action plans you can use immediately.
            </p>
            <p className="text-[#D4AF37] font-bold">No fluff. No theory. Just actionable principles you can apply today.</p>
          </div>
        </div>
      </section>

      {/* SECTION 2: DOES IT WORK? */}
      <section className="py-20 bg-[#0f1a2a] border-t border-white/10">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center text-white">
            Does It Work? <span className="text-[#D4AF37]">Yes. Here's The Proof.</span>
          </h2>

          <p className="text-lg text-gray-300 mb-12 text-center">
            Don't just take our word for it. Here's what 500+ students have achieved using this system.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { metric: '500+', label: 'Students Transformed' },
              { metric: '98%', label: 'Satisfaction Rate' },
              { metric: '$50M+', label: 'Generated by Graduates' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="text-5xl font-bold text-[#D4AF37] mb-2">{item.metric}</div>
                <div className="text-gray-300">{item.label}</div>
              </div>
            ))}
          </div>

          <div className="space-y-6 mb-12">
            {[
              {
                name: 'Bryce Raley',
                result: 'Scaled from $0 to $2M annual revenue',
                quote: 'The Destiny system gave me clarity I\'d been searching for. Within 18 months, I went from burned out to building a thriving business.',
              },
              {
                name: 'Jamine Cross',
                result: 'Built a 7-figure coaching practice',
                quote: 'I finally understood my purpose and how to build a business around it. This changed everything.',
              },
              {
                name: 'Claudio Gonzalez',
                result: 'Launched 3 successful ventures',
                quote: 'The framework works. I\'ve used it to start multiple businesses and each one is thriving.',
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#D4AF37] rounded-full flex-shrink-0"></div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-white text-lg">{testimonial.name}</h4>
                    <p className="text-[#D4AF37] text-sm font-semibold">{testimonial.result}</p>
                  </div>
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>

          <div className="bg-[#D4AF37]/10 border border-[#D4AF37] rounded-lg p-8 text-center">
            <p className="text-lg text-gray-300">
              These aren't cherry-picked results. These are real people who applied the system and got real results.
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
            You might be thinking: "But I don't know where to start. I don't have the background. I don't have time. I'm not sure it will work for me. What if I fail?"
          </p>

          <p className="text-lg text-gray-300 mb-12 text-center font-semibold">
            These are the five barriers that stop most people. Here's how we remove each one.
          </p>

          <div className="space-y-8 mb-12">
            {[
              {
                barrier: 'Barrier #1: "I Don\'t Know Where To Start"',
                solution: 'The Destiny system starts with the Dream. We give you the exact questions, worksheets, and framework to clarify what you want. You don\'t need to figure it out alone.',
              },
              {
                barrier: 'Barrier #2: "I Don\'t Have The Background"',
                solution: 'Background doesn\'t matter. What matters is clarity and action. We\'ve worked with people from every background—no experience required. The system works regardless of where you\'re starting from.',
              },
              {
                barrier: 'Barrier #3: "I Don\'t Have Time"',
                solution: 'The Destiny program is designed for busy people. You get the formulas, worksheets, and principles you can apply immediately. No fluff. No time-wasting theory. Just actionable steps.',
              },
              {
                barrier: 'Barrier #4: "I\'m Not Sure It Will Work For Me"',
                solution: 'We guarantee it. If you apply the system and don\'t see results within 60 days, we\'ll refund your investment. No questions asked. We\'re that confident in the system.',
              },
              {
                barrier: 'Barrier #5: "What If I Fail?"',
                solution: 'Failure is part of the process. But with the Destiny system, you\'re not failing blindly. You have clarity, direction, and a proven framework. Most "failures" are actually just course corrections.',
              },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-8">
                <h3 className="text-xl font-bold text-white mb-4">{item.barrier}</h3>
                <div className="flex gap-4">
                  <Check className="text-[#D4AF37] flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-[#D4AF37]/20 to-red-600/20 border border-[#D4AF37] rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">You Can Do This</h3>
            <p className="text-xl text-gray-300 mb-8">
              The question isn't whether you can do it. The question is: will you do it?
            </p>
            <p className="text-lg text-[#D4AF37] font-bold">
              500+ people just like you have already made the decision. They're building their legacy right now.
            </p>
            <p className="text-lg text-gray-300 mt-8">
              The only question is: will you join them?
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#0f1a2a] border-t border-white/10">
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Ready To Build Your Legacy?</h2>
          <p className="text-xl text-gray-300 mb-12">
            Join 500+ Christian founders who are scaling their impact and income without losing their soul.
          </p>
          <button className="px-12 py-4 bg-[#D4AF37] text-[#1a2a3a] rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
            Enroll Now - Limited Spots Available
          </button>
          <p className="text-gray-400 text-sm mt-6">
            Enrollment closes in {timeLeft.minutes}:{timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
          </p>
        </div>
      </section>
    </div>
  );
}
