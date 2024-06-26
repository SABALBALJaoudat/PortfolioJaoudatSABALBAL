import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (

    <AnimatePresence mode="wait">
      <motion.div key={router.pathname}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Component {...pageProps} />

          <motion.div className='slide-in' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1 }}></motion.div>
          <motion.div className='slide-in_2' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1 }}></motion.div>
          <motion.div className='slide-out' initial={{ scaleY: 1 }} animate={{ scaleY: 0 }} exit={{ scaleY: 0 }} transition={{ duration: 1 }}></motion.div>
          <motion.div className='slide-out_2' initial={{ scaleY: 0 }} animate={{ scaleY: 0 }} exit={{ scaleY: 1 }} transition={{ duration: 1 }}></motion.div>
          <Analytics />
        </ThemeProvider>
      </motion.div>
    </AnimatePresence>
  );
}
