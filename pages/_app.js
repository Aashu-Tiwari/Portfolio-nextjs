import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence,motion } from 'framer-motion';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return(
    <Layout>
        <AnimatePresence>
          <motion.div key={router.route} className='h-full'>
                <Transition/>
                <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
    </Layout>

  )
}

export default MyApp;
