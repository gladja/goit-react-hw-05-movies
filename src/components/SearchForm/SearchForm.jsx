import { Btn, Form, Input } from './SearchForm.styled';

const SearchForm = ({handleSubmit, searchQuery, handleSearch}) => {
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          name='search'
          value={searchQuery}
          autoComplete='off'
          autoFocus
          placeholder='Search movies'
          onChange={handleSearch}
        />
        <Btn
          type={'submit'}
        >
          Search
        </Btn>
      </Form>
    </>
  )
}

export default SearchForm;
