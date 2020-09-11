import styled from "styled-components";

const SearcherForm = styled.form`
    border: none;
    background-color: var(--tCOne);
    box-shadow: 0px 1px 2px rgba(112, 92, 92, 0.12);
    padding: 2px 5px;
    outline: none;
    border-radius: 12px;
    margin: 5px;
    width: auto;
    align-items: center;
    align-content: center;
    justify-content: center;
    display: flex;
    font-size: 1.5rem;
  `,
  SearchButton = styled.button`
    background: transparent;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0;
    padding: 0;
  `,
  SearchInput = styled.input`
    background: none;
    border: none;
    width: 90%;
    height: 100%;
    font-size: 1rem;
    text-align: left;
    color: #333;
    padding: 7px 0;
  `,
  SearchIcon = styled.svg`
    font-size: 1.8rem;
    color: $dCTwo;
    padding: 5%;
  `;

export { SearcherForm, SearchButton, SearchIcon, SearchInput };
