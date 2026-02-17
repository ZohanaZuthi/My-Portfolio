import React from 'react'

export default function () {

    const left = [
    ["Birthday:", "17.05.2003"],
    ["Age:", "23"],
    ["Address:", "Rajshahi, Bangladesh"],
    ["Email:", "nazifafairuz@example.com"],
    ["Phone:", "+880 1837792890"],
  ];

  const right = [
    ["Nationality:", "Bangladesh"],
    ["Study:", "B.Sc. in CSE"],
    ["Degree:", "Undergraduate"],
    ["Interest:", "AI / ML"],
    ["Freelance:", "Available"],
  ];
  
  return (
    <div>
        <section id="about" className=" mt-30 flex items-center justify-center  text-white mx-16">
      <div className='flex flex-col'>
      <h2 className="ftext-3xl md:text-4xl font-semibold mb-6">About Me</h2>
      <p className=" text-white/80"> Hi my name is Nazifa Fairuz Zuthi, and I am a passionate Full-Stack Developer
       with a strong focus on AI and Machine Learning. With a solid foundation in both front-end and back-end development,
        I have honed my skills in creating dynamic and responsive web applications.</p>
        <div className="my-6 h-px w-full bg-white/20 shadow-xl/30" />
        <p>
         I am currently working as an Aspire Full stack and AI-ML Developer (intern). I am AI & Machine Learning
        I am currently working as an Aspire Full stack and AI-ML Developer (intern). I am AI & Machine Learning 
enthusiast with a strong foundation in Machine Learning, Natural Language Processing, and Data Science, 
currently pursuing a B.Sc. in Computer Science and Engineering. Experienced in end-to-end ML projects and 
competitive programming. Passionate about innovative AI applications, especially in assistive technologies, and 
competitive programming driven by a desire for continuous learning and impactful contributions.
      </p>
      <div className="my-6 h-px w-full bg-white/20 shadow-xl/30" />
      <div className='mt-10'>
       <div className="bg-white/[0.03] px-6 py-6 shadow-xl/30 rounded-xl">
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          {left.map(([label, value]) => (
            <div key={label} className="mb-3 ">
              <span className="font-semibold">{label}</span> 
             <span className="text-white/60 break-all"> {value}</span>
            </div>
          ))}
        </div>
        <div>
          {right.map(([label, value]) => (
            <div key={label} className="mb-3">
              <span className="font-semibold">{label}</span> 
              <span className="text-white/60 break-all"> {value}</span>
            </div>
          ))}
        </div>
       </div>
       </div>


      </div>
     
        <a href="CV.pdf" download className="inline-flex items-center justify-center bg-white text-black px-8 py-3 text-sm font-medium hover:bg-white/90 transition">
        Download CV</a>


      </div>
      
 

            </section>
    </div>
  )
}
