import React, { useEffect, useState } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import Navbar from '../components/Headers/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NewsSection from '../components/NewsSection/NewsSection';
import Footer from '../components/Footer/Footer';
import { RingLoader } from 'react-spinners';
import './App.scss';
import BackToTop from '../components/BackToTop/Back';

function App() {
  const [active, setActive] = useState('');

  const [loading, setLoading] = useState(false);

  function handleActive(tab) {
    setActive(tab);
  }

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <div className="bg__global">
        {loading ? (
          <Flex
            justifyContent="center"
            alignItems="center"
            w="100%"
            h="100vh"
            bg="rgb(26,32,44)"
          >
            <RingLoader
              color={'rgb(56, 178, 172)'}
              size={200}
              loading={loading}
            />
          </Flex>
        ) : (
          <Router>
            <Navbar active={active} />
            <Switch>
              <Route
                exact
                path="/"
                component={props => (
                  <NewsSection
                    {...props}
                    setActiveTab={handleActive}
                  ></NewsSection>
                )}
              ></Route>
            </Switch>
            <Footer />
            <BackToTop />
          </Router>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
