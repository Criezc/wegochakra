/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useEffect } from 'react';
import { ChakraProvider, Flex, theme } from '@chakra-ui/react';
import { jsx, css } from '@emotion/react';
import { fetchNews } from '../Services/Service';
import { RingLoader } from 'react-spinners';
import Navbar from '../components/Headers/Header';
import NewsSection from '../components/NewsSection/NewsSection';
import Footer from '../components/Footer/Footer';
import BackToTop from '../components/BackToTop/Back';
import Wave from '../components/Wave/Wave';
import Error from '../components/Error/Error';

function App() {
  const [data, setData] = React.useState([]);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [query, setQuery] = React.useState('technology');
  const [loading, setLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    const getNews = async () => {
      try {
        setIsLoading(true);
        const res = await fetchNews({
          q: query,
          page: currentPage,
        });
        setData(res);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getNews();
  }, [query, currentPage]);

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
            <Flex>{isError && <Error />}</Flex>
            <Wave />
            <Footer />
            <BackToTop />
          </>
        )}
      </div>
    </ChakraProvider>
  );
}

export default App;
