import { ChevronDownIcon } from '@chakra-ui/icons';
import { Flex, Select } from '@chakra-ui/react';
import React from 'react';
import { fetchSources } from '../../api/api';

class SourceBar extends React.Component {
  state = {
    sources: [],
    query: '',
  };

  async componentDidMount() {
    const sources = await fetchSources();

    this.setState({ sources });
  }

  loadNews(query) {
    this.setState({
      query: query,
    });
  }

  render() {
    return (
      <>
        <Flex my={5} pt={1}>
          <Select
            placeholder="Select Sources"
            variant="filled"
            flex="1"
            py={2}
            px={3}
            rounded="md"
            bg="gray.200"
            borderWidth="1px"
            _hover={{ borderColor: 'gray.200', bg: 'gray.300' }}
            _focus={{
              outline: 'none',
              bg: 'white',
              SelectShadow: 'outline',
              borderColor: 'gray.300',
            }}
            icon={<ChevronDownIcon />}
          >
            {this.state.sources.map((source, index) => (
              <option key={index} onClick={() => this.loadNews(source.name)}>
                {source.name}
              </option>
            ))}
          </Select>
        </Flex>
      </>
    );
  }
}

export default SourceBar;
