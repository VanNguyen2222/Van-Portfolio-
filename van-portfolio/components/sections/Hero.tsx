"use client";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Hiệu ứng tia sáng phía sau */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
      
      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-500 text-xs font-medium uppercase tracking-widest mb-8 inline-block">
            Sẵn sàng cho các dự án mới
          </span>
          
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-6 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-500 dark:from-white dark:to-gray-400">
            Xây dựng trải nghiệm <br /> Web thế hệ mới
          </h1>

          <p className="max-w-xl mx-auto text-gray-500 text-lg md:text-xl mb-10 leading-relaxed">
            Tôi là <span className="text-black dark:text-white font-medium">Frontend Developer</span> chuyên biến những ý tưởng phức tạp thành giao diện tối giản và hiệu quả.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="h-12 px-8 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/25">
              Xem dự án của tôi
            </button>
            <button className="h-12 px-8 rounded-full border border-gray-200 dark:border-zinc-800 font-medium hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all">
              Liên hệ
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;