import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

const SearchBar = () => {
    
  return (
    <form  onSubmit={(event) => {
        event.preventDefault();
        // if (ref.current) onSearch(ref.current.value);
      }}>
        <InputGroup width='67vw'>
          <InputLeftElement color='#444444' children={<BsSearch />} />
          <Input   color='#444444' borderRadius={20} placeholder='Search...' isInvalid errorBorderColor='#3839af'  />
        </InputGroup>
      </form>
  )
}

export default SearchBar
