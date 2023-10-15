import '../styles/globals.css';
import Layout from '../components/Layout';
import { AnimatePresence,motion } from 'framer-motion';
import  Transition  from '../components/Transition';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '../store/store';

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return(
    <Provider store={store}>
    <Layout>.
        <AnimatePresence>
          <motion.div key={router.route} className='h-full'>
                <Transition/>
                <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
    </Layout>
    </Provider>


  )
}

export default MyApp;
