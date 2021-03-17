import React from 'react';
import {
  Alert,
  AlertIcon,
  AlertTitle,
  ChakraProvider,
  CloseButton,
  Flex,
  theme,
} from '@chakra-ui/react';
import Navbar from '../components/Headers/Header';
import NewsSection from '../components/NewsSection/NewsSection';
import Footer from '../components/Footer/Footer';
import { RingLoader } from 'react-spinners';
import './App.scss';
import BackToTop from '../components/BackToTop/Back';
import { fetchNews } from '../api/api';
import { motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [query, setQuery] = React.useState('technology');
  const [isError, setIsError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  async function fetchData() {
    try {
      setIsLoading(true);
      const result = await fetchNews({
        q: query,
        page: currentPage,
      });
      setData(result);
    } catch (error) {
      setIsError(true);
      return console.error(error);
    } finally {
      return setIsLoading(false);
    }
  }

  function handleChangePage(page) {
    setCurrentPage(page);
  }

  function handleSearch(text) {
    setQuery(text);
    setCurrentPage(1);
  }

  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
    fetchData();
  }, []);

  React.useEffect(() => {
    fetchData();
  }, [currentPage, query]);

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
          <>
            <Navbar onSearch={handleSearch} />
            <NewsSection
              isLoading={isLoading}
              onChangePage={handleChangePage}
              currentPage={currentPage}
              onSearch={handleSearch}
              query={query}
              data={data}
            ></NewsSection>
            <Flex>
              {isError
                ? index => (
                    <Alert status="error" key={index}>
                      <AlertIcon />
                      <AlertTitle mr={2}>
                        Something error please try again
                      </AlertTitle>
                      <CloseButton position="absolute" right="8px" top="8px" />
                    </Alert>
                  )
                : null}
            </Flex>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
