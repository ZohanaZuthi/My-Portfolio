export default function Skills() {
  const technical = [
    ["Languages:", "C/C++, Python, Java, JavaScript, C#, Go"],
    ["ML & AI:", "Supervised, Unsupervised, Reinforcement Learning"],
    ["Deep Learning:", "CNN, NLP, NLTK, TensorFlow, Keras, BERT, Dialogflow"],
    ["Data Science Tools:", "Pandas, NumPy, Scikit-learn, Matplotlib, Seaborn"],
    ["Web Development:", "HTML, CSS, Django, JavaScript, React, Next.js, GO, Rest Framework, FastAPI, Docker"],
    ["Databases:", "MySQL, PostgreSQL"],
    ["Other Skills:", "Data Structures & Algorithms, Git, Competitive Programming"],
    ["Professional Skills:", "Effective Communication, Team Player, Strong Problem Solving, Documentation & Presentation, Time & Event Management"],
    ["IDEs:", "VS Code, PyCharm, Arduino IDE"],
    ["Database Tools:", "XAMPP, PgAdmin, MySQL"],
    ["ML/DS Tools:", "Colab, Jupyter Notebook, GitHub, Anaconda"],
  ];

  return (
    <section id="skills" className="py-20 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.28em] text-cyan-200/80">
            Toolkit
          </p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Skills</h2>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] px-5 py-6 md:px-6">
          <div className="h-px w-full bg-white/10" />
          <div className="grid grid-cols-1  gap-10 py-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold">Technical Skills</h3>
              <div className="space-y-3">
                {technical.map(([k, v]) => (
                  <div key={k} className="grid gap-1 text-sm sm:grid-cols-[minmax(150px,200px)_1fr] sm:gap-4 md:text-base">
                    <span className="font-semibold text-white">{k}</span>
                    <span className="text-white/70 ">{v}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
          <div className="h-px w-full bg-white/10" />
        </div>
      </div>
    </section>
  );
}
