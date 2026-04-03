const Projects = () => {
    return (
      <section className="py-24 container mx-auto px-6" id="projects">
        <h2 className="text-3xl font-bold mb-12 tracking-tight">Dự án nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Ô dự án lớn */}
          <div className="md:col-span-2 group relative overflow-hidden rounded-3xl border bg-zinc-100 dark:bg-zinc-900 h-[400px]">
             <div className="p-8">
                <h3 className="text-2xl font-bold">E-Commerce Platform</h3>
                <p className="text-gray-500 mt-2">Next.js, Tailwind, Stripe</p>
             </div>
             {/* Thêm ảnh dự án ở đây */}
             <div className="absolute bottom-0 right-0 w-3/4 h-1/2 bg-blue-600 rounded-tl-3xl shadow-2xl transition-transform group-hover:-translate-y-2" />
          </div>
  
          {/* Ô dự án nhỏ 1 */}
          <div className="group rounded-3xl border p-8 flex flex-col justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer">
             <div>
                <h3 className="text-xl font-bold">Weather App</h3>
                <p className="text-sm text-gray-500 mt-1">Real-time API Integration</p>
             </div>
             <div className="text-blue-500 font-medium italic">View case study →</div>
          </div>
          
          {/* Ô dự án nhỏ 2 */}
          <div className="group rounded-3xl border p-8 flex flex-col justify-between hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-all cursor-pointer">
             <div>
                <h3 className="text-xl font-bold">Task Manager</h3>
                <p className="text-sm text-gray-500 mt-1">Fullstack Project</p>
             </div>
             <div className="text-blue-500 font-medium italic">View case study →</div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Projects;