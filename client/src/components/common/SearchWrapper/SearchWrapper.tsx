import styles from './SearchWrapper.style';

import InputField from '../Input/InputField/InputField';

import { icons } from '../../../constants';
import { useSearchContext } from '../../../contexts/useSearchContext';
import useDebounce from '../../../hooks/useDebounce';

import { TouchableOpacity, View, Image, Keyboard } from 'react-native';
import { useEffect, useState } from 'react';

const SearchWrapper = () => {
  const { searchQuery, handleSetQuery } = useSearchContext();

  const [isSearchSelected, setIsSearchSelected] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>(searchQuery);

  //const debouncedValue = useDebounce(searchTerm);

  // useEffect(() => {
  //   handleSetQuery(debouncedValue);
  // }, [debouncedValue]);

  function handleFocus() {
    setIsSearchSelected(true);
  }

  function handleBlur() {
    setIsSearchSelected(false);
  }

  function handleInputFieldChange(value: string) {
    setSearchTerm(value);
  }

  function handleSearch() {
    Keyboard.dismiss();
    handleSetQuery(searchTerm);
  }

  return (
    <View style={styles.searchContainer}>
      <InputField
        dynamicStyle={
          isSearchSelected ? styles.selectedSearch : styles.defaultSearch
        }
        placeholder='Search for company'
        onFocus={() => handleFocus()}
        onBlur={() => handleBlur()}
        onChangeText={(text: string) => handleInputFieldChange(text)}
        value={searchTerm}
      />
      <TouchableOpacity style={styles.searchBtn} onPress={() => handleSearch()}>
        <Image
          style={styles.searchImg}
          source={icons.searchBtn}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchWrapper;
