/** @jsxRuntime classic */
/** @jsx jsx */
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
import { jsx, css } from '@emotion/react';
import { fetchNews } from '../api/api';
import { RingLoader } from 'react-spinners';
import Navbar from '../components/Headers/Header';
import NewsSection from '../components/NewsSection/NewsSection';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/Back';
import './App.scss';

function App() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [query, setQuery] = React.useState('technology');
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    try {
      setIsLoading(true);
      const result = await fetchNews({
        q: query,
        page: currentPage,
      });
      setData(result);
    } catch (error) {
      setIsError(error);
    } finally {
      setIsLoading(false);
    }
  };

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
  }, []);

  React.useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, query]);

  const style = css`
    html {
      line-height: 1.5px;
      scroll-behavior: smooth;
    }
    background: radial-gradient(
      ellipse at center,
      rgb(26, 32, 44) 0%,
      rgb(26, 32, 44) 35%
    );
    overflow: hidden;
  `;

  return (
    <ChakraProvider theme={theme}>
      <div css={style}>
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
            <Navbar changeSearch={handleSearch} />
            <NewsSection
              isLoading={isLoading}
              currPage={currentPage}
              changePage={handleChangePage}
              newSearch={handleSearch}
              query={query}
              newData={data}
            ></NewsSection>
            <Flex>
              {isError && (
                <Alert status="error" key={isError}>
                  <AlertIcon />
                  <AlertTitle mr={2}>
                    Something error please try again
                  </AlertTitle>
                  <CloseButton position="absolute" right="8px" top="8px" />
                </Alert>
              )}
            </Flex>
            <div>
              <div className="wave wave1"></div>
              <div className="wave wave2"></div>
              <div className="wave wave3"></div>
              <div className="wave wave4"></div>
            </div>
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
